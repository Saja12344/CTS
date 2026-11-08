"""Load the frozen brand pack."""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BRAND_PATH = ROOT / "brand" / "brand_pack.json"
SITE_TS = ROOT.parent / "src" / "content" / "site.ts"


def load_brand() -> dict:
    return json.loads(BRAND_PATH.read_text(encoding="utf-8"))


def load_site_source() -> str:
    return SITE_TS.read_text(encoding="utf-8")
