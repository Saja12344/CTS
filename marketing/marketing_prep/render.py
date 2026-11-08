"""Turn the catalog into review sheets and provider files."""

from __future__ import annotations

import json
from pathlib import Path

from marketing_prep.brand import ROOT, load_brand
from marketing_prep.catalog import ITEMS, WEEK
from marketing_prep.providers import PROVIDERS


def build_prompt(item: dict, brand: dict) -> str:
    identity = brand["identity"]
    colors = identity["colors"]
    lines: list[str] = [
        "Generate one vertical film for Core Tech Solutions (CTS), a Saudi product studio.",
        "Aspect ratio 9:16. Frame size 1080x1920. "
        f"Duration {item['duration_seconds']} seconds. 30 frames per second.",
        "Hard cuts only. Locked camera. Flat color fields. No music in the picture.",
        "",
        "IDENTITY LOCK",
        f"Name on the end card: {identity['mark']}. Spoken brand: {identity['name_ar']}.",
        "Tone: premium, modern, Arabic-first, Swiss editorial. Wide empty field, hairline rules, one accent.",
        "Palette, and no other hues: "
        f"charcoal {colors['charcoal']}, paper {colors['paper']}, "
        f"signal {colors['signal']}, white {colors['white']}, muted {colors['muted']}.",
        "Arabic type: IBM Plex Sans Arabic, grotesque, even stroke, right-aligned, no shadow.",
        "Index numerals: JetBrains Mono. If a named family cannot be drawn, use a plain grotesque with the same color and alignment.",
        "",
        "IDEA",
        item["idea_en"],
        "",
        "ARABIC ON-SCREEN TEXT",
        "Render these strings exactly, right-aligned, in this order, and only while their times are active.",
        "Copy the Arabic code points. Do not add tashkeel, do not translate, do not paraphrase, do not mirror glyphs.",
        "Do not put the voiceover paragraph on screen.",
    ]
    for card in item["on_screen_text"]:
        spoken = " / ".join(card["lines"])
        lines.append(f"- {card['t0']:g}s to {card['t1']:g}s: {spoken}")
    lines.extend(
        [
            "",
            "VOICE",
            "No person in frame. No lip-sync. No talking head. The spoken stem is added later and is not typeset.",
            item["voiceover"],
            "",
            "SCENES",
        ]
    )
    for shot in item["storyboard"]:
        lines.append(
            f"Scene {shot['scene']} ({shot['t0']:g}s–{shot['t1']:g}s). {shot['visual_prompt']}"
        )
    lines.extend(["", "MUST NOT APPEAR"])
    for rule in brand["must_not_appear"]:
        lines.append(f"- {rule}")
    lines.append("")
    return "\n".join(lines)


def script_markdown(item: dict, brand: dict) -> str:
    screens = []
    for card in item["on_screen_text"]:
        block = "\n".join(f"> {line}" for line in card["lines"])
        screens.append(f"{card['t0']:g}–{card['t1']:g} ث\n{block}")
    scenes = []
    for shot in item["storyboard"]:
        scenes.append(
            "\n".join(
                [
                    f"### مشهد {shot['scene']} — {shot['t0']:g}–{shot['t1']:g} ث",
                    shot["shot_ar"],
                    "",
                    f"الصوت: {shot['hears']}",
                    "",
                    "التوجيه البصري:",
                    "",
                    shot["visual_prompt"],
                ]
            )
        )
    notes = [f"- {note}" for note in brand["edit_rules_ar"] + item["edit_notes"]]
    tags = " ".join(item["hashtags"])
    claims = "\n".join(f"- {claim}" for claim in item["claims_used"])
    return "\n".join(
        [
            f"# {item['number']} — {item['title_ar']}",
            "",
            f"- الهدف: {item['objective']}",
            f"- الشريحة: {item['audience_segment']}",
            f"- المحور: {item['pillar']}",
            f"- الفكرة: {item['concept']}",
            f"- الخطاف (أول {item['storyboard'][0]['t1']:g} ثوانٍ): {item['hook'].replace(chr(10), ' / ')}",
            f"- المدة: {item['duration_seconds']} ثانية، 9:16، 1080×1920",
            f"- وقت النشر المقترح: {item['suggested_post_label']}",
            f"- أساس الوقت: {item['post_time_note']}",
            "",
            "## النص العربي",
            "",
            item["voiceover"],
            "",
            "## التعليق الصوتي",
            "",
            "النص والتعليق الصوتي متطابقان: لا حوار خارج هذا النص، ولا ملف صوت في هذا الإعداد.",
            "",
            item["voiceover"],
            "",
            "## النص على الشاشة",
            "",
            "\n\n".join(screens),
            "",
            "## اللوحات",
            "",
            "\n\n".join(scenes),
            "",
            "## ملاحظات المونتاج",
            "",
            "\n".join(notes),
            "",
            "## الوصف",
            "",
            item["caption"],
            "",
            "## الدعوة",
            "",
            f"{item['cta']}",
            brand["identity"]["whatsapp_display"],
            brand["identity"]["whatsapp_url"],
            "",
            "## الوسوم",
            "",
            tags,
            "",
            "الوسوم اقتراح تحريري، لا قياس وصول.",
            "",
            "## جمل الموقع المستخدمة",
            "",
            claims,
            "",
        ]
    )


def week_markdown(brand: dict) -> str:
    rows = "\n".join(
        f"| {item['number']} | {item['title_ar']} | {item['pillar']} | {item['suggested_post_label']} |"
        for item in ITEMS
    )
    return "\n".join(
        [
            f"# أسبوع {WEEK['id']}",
            "",
            WEEK["strategy_ar"],
            "",
            f"حالة الأرقام: {WEEK['insights']['status']} ({WEEK['insights']['reason']}).",
            "",
            "| الرقم | الفيلم | المحور | الوقت المقترح |",
            "| --- | --- | --- | --- |",
            rows,
            "",
            "النصوص في `scripts/`. طلب التوليد في `prompts/`: ملف نص، وملف JSON بالظرف نفسه.",
            "الظرف الافتراضي `openai` قابل للاستبدال. الأداة لا ترسل الطلب.",
            f"النشر: {brand['publishing']}.",
            "",
        ]
    )


def public_item(item: dict) -> dict:
    return {
        "id": item["id"],
        "number": item["number"],
        "title_ar": item["title_ar"],
        "objective": item["objective"],
        "audience_segment": item["audience_segment"],
        "pillar": item["pillar"],
        "pillar_id": item["pillar_id"],
        "concept": item["concept"],
        "idea_en": item["idea_en"],
        "hook": item["hook"],
        "script_ar": item["voiceover"],
        "voiceover": item["voiceover"],
        "on_screen_text": item["on_screen_text"],
        "storyboard": item["storyboard"],
        "visual_prompts": [shot["visual_prompt"] for shot in item["storyboard"]],
        "edit_notes": item["edit_notes"],
        "caption": item["caption"],
        "cta": item["cta"],
        "hashtags": item["hashtags"],
        "duration_seconds": item["duration_seconds"],
        "suggested_post_time": item["suggested_post_time"],
        "suggested_post_label": item["suggested_post_label"],
        "post_time_note": item["post_time_note"],
        "claims_used": item["claims_used"],
        "frame": "1080x1920",
        "aspect_ratio": "9:16",
    }


def documents(brand: dict | None = None) -> dict[str, str]:
    brand = brand or load_brand()
    provider = PROVIDERS["openai"]
    docs: dict[str, str] = {}
    batch = {
        "week": WEEK,
        "items": [public_item(item) for item in ITEMS],
    }
    base = f"content/{WEEK['id']}"
    docs[f"{base}/batch.json"] = json.dumps(batch, ensure_ascii=False, indent=2) + "\n"
    docs[f"{base}/week.md"] = week_markdown(brand)
    for item in ITEMS:
        prompt = build_prompt(item, brand)
        envelope = provider.build(public_item(item), brand, prompt)
        docs[f"{base}/scripts/{item['id']}.md"] = script_markdown(item, brand)
        docs[f"{base}/prompts/{item['id']}.txt"] = prompt
        docs[f"{base}/prompts/{item['id']}.json"] = (
            json.dumps(envelope, ensure_ascii=False, indent=2) + "\n"
        )
    return docs


def write_documents(root: Path | None = None, brand: dict | None = None) -> list[Path]:
    root = root or ROOT
    written: list[Path] = []
    for relative, text in documents(brand).items():
        path = root / relative
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(text, encoding="utf-8")
        written.append(path)
    return written
