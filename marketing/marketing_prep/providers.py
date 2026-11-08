"""Swappable envelopes around one locked prompt.

The OpenAI envelope is a request body a video endpoint can take.
This module never sends it.
"""

from __future__ import annotations

from typing import Protocol


class VideoCallRefused(RuntimeError):
    """Raised when something tries to spend money on a video call."""


class VideoProvider(Protocol):
    name: str

    def build(self, item: dict, brand: dict, prompt: str) -> dict:
        """Return a JSON-ready envelope. Do not perform I/O."""


class OpenAIVideoProvider:
    name = "openai"

    def build(self, item: dict, brand: dict, prompt: str) -> dict:
        seconds = item["duration_seconds"]
        return {
            "provider": self.name,
            "kind": "video.generate",
            "swappable": True,
            "submit": False,
            "item_id": item["id"],
            "request": {
                "method": "POST",
                "url": "https://api.openai.com/v1/videos",
                "headers": {
                    "Authorization": "Bearer ${OPENAI_API_KEY}",
                    "Content-Type": "application/json",
                },
                "body": {
                    "model": "${OPENAI_VIDEO_MODEL}",
                    "prompt": prompt,
                    "size": "1080x1920",
                    "seconds": str(seconds),
                },
            },
            "locks": {
                "aspect_ratio": "9:16",
                "size": "1080x1920",
                "duration_seconds": seconds,
                "identity": brand["identity"],
                "idea": item["idea_en"],
                "on_screen_text": item["on_screen_text"],
                "must_not_appear": brand["must_not_appear"],
            },
        }


class PlateProvider:
    """Flat fields and type. No network. Same locks, different envelope."""

    name = "plate"

    def build(self, item: dict, brand: dict, prompt: str) -> dict:
        frames = []
        for shot in item["storyboard"]:
            frames.append(
                {
                    "scene": shot["scene"],
                    "t0": shot["t0"],
                    "t1": shot["t1"],
                    "picture": shot["visual_prompt"],
                    "hears": shot["hears"],
                }
            )
        return {
            "provider": self.name,
            "kind": "still.motion",
            "swappable": True,
            "submit": False,
            "item_id": item["id"],
            "size": "1080x1920",
            "aspect_ratio": "9:16",
            "prompt": prompt,
            "frames": frames,
            "locks": {
                "identity": brand["identity"],
                "idea": item["idea_en"],
                "on_screen_text": item["on_screen_text"],
                "must_not_appear": brand["must_not_appear"],
            },
        }


PROVIDERS: dict[str, VideoProvider] = {
    "openai": OpenAIVideoProvider(),
    "plate": PlateProvider(),
}


def refuse_submit(_payload: dict | None = None) -> None:
    raise VideoCallRefused(
        "Refusing to send a video job. Weekly prep writes the prompt and stops."
    )
