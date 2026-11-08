"""Reject copy that goes past the live site."""

from __future__ import annotations

import re

FORBIDDEN = (
    re.compile(r"Canela", re.IGNORECASE),
    re.compile(r"Panorama", re.IGNORECASE),
    re.compile(r"Thuluth", re.IGNORECASE),
    re.compile(r"عميلنا|عملاؤنا|دراسة حالة"),
    re.compile(r"ر\.س|ريال|\bSAR\b|\$\d"),
    re.compile(r"خصم|باقة|نضمن|الأفضل"),
    re.compile(r"10x|٪|%"),
    re.compile(r"instagram\.com|youtube\.com", re.IGNORECASE),
    re.compile(r"\bsk-[A-Za-z0-9]"),
)


def scanned_text(item: dict) -> str:
    parts = [
        item["objective"],
        item["audience_segment"],
        item["concept"],
        item["idea_en"],
        item["hook"],
        item["voiceover"],
        item["caption"],
        "\n".join(item["edit_notes"]),
        "\n".join(scene["visual_prompt"] for scene in item["storyboard"]),
        "\n".join(scene["shot_ar"] for scene in item["storyboard"]),
        "\n".join(line for card in item["on_screen_text"] for line in card["lines"]),
    ]
    return "\n".join(parts)


def forbidden_hits(text: str) -> list[str]:
    return [pattern.pattern for pattern in FORBIDDEN if pattern.search(text)]
