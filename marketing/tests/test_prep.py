"""The week stays inside the live site, and the tool does not send a video job."""

from __future__ import annotations

import json
import os
import subprocess
import unittest

from marketing_prep.brand import ROOT, SITE_TS, load_brand, load_site_source
from marketing_prep.catalog import ITEMS
from marketing_prep.claims import forbidden_hits, scanned_text
from marketing_prep.providers import PROVIDERS, VideoCallRefused, refuse_submit
from marketing_prep.render import build_prompt, documents, write_documents

OFFERS = [
    "استراتيجية المنتج، تصميم تجربة وواجهة المستخدم، وتطوير المنتج الرقمي من البداية للنهاية.",
    "أدوات تشغيل مخصصة، أتمتة سير العمل، وربط عمليات الأعمال.",
    "تطبيقات ويب متجاوبة وتجارب جوال مصممة حول مستخدمين حقيقيين وحالات استخدام فعلية.",
    "قدرات ذكاء اصطناعي عملية مدمجة في المنتجات وسير العمل حيث تخلق قيمة حقيقية.",
]


class WeekTests(unittest.TestCase):
    def setUp(self) -> None:
        self.brand = load_brand()
        self.site = load_site_source()
        self.docs = documents(self.brand)

    def test_brand_claims_are_on_the_live_source(self) -> None:
        self.assertTrue(SITE_TS.is_file())
        for claim in self.brand["claims_ar"]:
            self.assertIn(claim, self.site, claim)
        phone = self.brand["identity"]["whatsapp_display"]
        self.assertIn(phone, self.site)

    def test_five_films_cover_the_four_offers(self) -> None:
        self.assertEqual(len(ITEMS), 5)
        used = "\n".join(claim for item in ITEMS for claim in item["claims_used"])
        for offer in OFFERS:
            self.assertIn(offer, used)
        self.assertIn("الحل الصحيح يبدأ بالسؤال الصحيح.", used)

    def test_each_film_is_a_locked_short(self) -> None:
        for item in ITEMS:
            scenes = item["storyboard"]
            self.assertEqual(scenes[0]["t0"], 0)
            self.assertEqual(scenes[-1]["t1"], item["duration_seconds"])
            self.assertGreaterEqual(item["duration_seconds"], 20)
            self.assertLessEqual(item["duration_seconds"], 40)
            for left, right in zip(scenes, scenes[1:]):
                self.assertEqual(left["t1"], right["t0"])
            hook = scenes[0]["t1"] - scenes[0]["t0"]
            self.assertGreaterEqual(hook, 1)
            self.assertLessEqual(hook, 3)
            self.assertGreaterEqual(scenes[-1]["t1"] - scenes[-1]["t0"], 5)
            self.assertEqual(
                item["hook"],
                "\n".join(item["on_screen_text"][0]["lines"]),
            )
            self.assertEqual(item["cta"], "ابدأ مشروعًا")
            self.assertIn(self.brand["identity"]["whatsapp_display"], item["caption"])
            self.assertGreaterEqual(len(item["hashtags"]), 5)
            for tag in item["hashtags"]:
                self.assertTrue(tag.startswith("#"))
                self.assertNotIn(" ", tag)
            for claim in item["claims_used"]:
                self.assertIn(claim, self.brand["claims_ar"])
                blob = "\n".join(
                    [item["voiceover"], item["caption"], item["hook"]]
                )
                self.assertIn(claim, blob, item["id"])
            hits = forbidden_hits(scanned_text(item))
            self.assertEqual(hits, [], f"{item['id']} {hits}")
            prompt = build_prompt(item, self.brand)
            positive, _, negative = prompt.partition("MUST NOT APPEAR")
            self.assertTrue(negative)
            self.assertEqual(forbidden_hits(positive), [])
            self.assertIn("9:16", prompt)
            self.assertIn("1080x1920", prompt)
            for card in item["on_screen_text"]:
                for line in card["lines"]:
                    self.assertIn(line, prompt)

    def test_prompt_files_and_openai_envelope(self) -> None:
        prompts = [name for name in self.docs if name.endswith(".txt")]
        bodies = [name for name in self.docs if name.endswith(".json") and "/prompts/" in name]
        self.assertEqual(len(prompts), 5)
        self.assertEqual(len(bodies), 5)
        for name in bodies:
            payload = json.loads(self.docs[name])
            self.assertEqual(payload["provider"], "openai")
            self.assertFalse(payload["submit"])
            body = payload["request"]["body"]
            self.assertEqual(body["size"], "1080x1920")
            self.assertEqual(payload["locks"]["aspect_ratio"], "9:16")
            self.assertIn("9:16", body["prompt"])
            self.assertEqual(body["model"], "${OPENAI_VIDEO_MODEL}")
            self.assertEqual(
                payload["request"]["headers"]["Authorization"],
                "Bearer ${OPENAI_API_KEY}",
            )
            self.assertNotIn("sk-", json.dumps(payload))

    def test_plate_provider_is_a_different_envelope(self) -> None:
        item = ITEMS[0]
        prompt = build_prompt(item, self.brand)
        plate = PROVIDERS["plate"].build(item, self.brand, prompt)
        self.assertEqual(plate["provider"], "plate")
        self.assertEqual(plate["aspect_ratio"], "9:16")
        self.assertFalse(plate["submit"])
        self.assertNotIn("api.openai.com", json.dumps(plate))
        self.assertEqual(len(plate["frames"]), len(item["storyboard"]))

    def test_submit_is_refused(self) -> None:
        with self.assertRaises(VideoCallRefused):
            refuse_submit({"provider": "openai"})
        result = subprocess.run(
            ["python3", "-m", "marketing_prep", "--submit"],
            cwd=ROOT,
            capture_output=True,
            text=True,
            check=False,
        )
        self.assertEqual(result.returncode, 2)
        self.assertIn("Refusing", result.stderr)
        self.assertNotIn("api.openai.com", result.stdout)

    def test_dry_run_prints_prompts_without_the_key(self) -> None:
        env = os.environ.copy()
        env["OPENAI_API_KEY"] = "sk-test-secret-value"
        result = subprocess.run(
            ["python3", "-m", "marketing_prep", "--quiet"],
            cwd=ROOT,
            capture_output=True,
            text=True,
            check=False,
            env=env,
        )
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertNotIn("sk-test-secret-value", result.stdout)
        self.assertNotIn("sk-test-secret-value", result.stderr)
        for item in ITEMS:
            path = ROOT / "content" / "2026-11-08" / "prompts" / f"{item['id']}.txt"
            self.assertTrue(path.is_file(), path)
            self.assertNotIn("sk-test-secret-value", path.read_text(encoding="utf-8"))
        rendered = write_documents()
        self.assertEqual(len(list((ROOT / "content" / "2026-11-08" / "prompts").glob("*.txt"))), 5)
        self.assertGreaterEqual(len(rendered), 5)

    def test_disk_matches_the_generator(self) -> None:
        folder = ROOT / "content" / "2026-11-08" / "prompts"
        if not folder.is_dir():
            write_documents()
        for relative, text in self.docs.items():
            path = ROOT / relative
            self.assertTrue(path.is_file(), path)
            self.assertEqual(path.read_text(encoding="utf-8"), text)


if __name__ == "__main__":
    unittest.main()
