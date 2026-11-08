"""Print the five prompts. Never send them."""

from __future__ import annotations

import argparse
import os
import sys

from marketing_prep.brand import load_brand
from marketing_prep.catalog import ITEMS
from marketing_prep.providers import PROVIDERS, VideoCallRefused, refuse_submit
from marketing_prep.render import build_prompt, write_documents


def key_state() -> str:
    value = os.environ.get("OPENAI_API_KEY", "")
    if value.strip():
        return "set"
    return "unset"


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(
        description="Write and print the CTS weekly video prompts. Does not call a provider."
    )
    parser.add_argument(
        "--provider",
        default="openai",
        choices=sorted(PROVIDERS),
        help="Envelope to print. Files on disk stay the OpenAI payload.",
    )
    parser.add_argument(
        "--submit",
        action="store_true",
        help="Refused. Kept so a paid call cannot be the default path.",
    )
    parser.add_argument(
        "--quiet",
        action="store_true",
        help="Write files and print paths only.",
    )
    args = parser.parse_args(argv)
    if args.submit:
        try:
            refuse_submit()
        except VideoCallRefused as exc:
            print(str(exc), file=sys.stderr)
        return 2

    brand = load_brand()
    written = write_documents(brand=brand)
    provider = PROVIDERS[args.provider]
    if args.quiet:
        for path in written:
            print(path)
    else:
        for item in ITEMS:
            prompt = build_prompt(item, brand)
            print(f"----- {item['id']} {item['duration_seconds']}s 9:16 -----")
            print(prompt)
            if provider.name != "openai":
                envelope = provider.build(item, brand, prompt)
                print(f"----- envelope {envelope['provider']} {item['id']} -----")
                print(envelope["kind"])
        print(
            f"files: {len(written)} | video call: not sent | "
            f"OPENAI_API_KEY: {key_state()} | provider printed: {provider.name}"
        )
    return 0
