#!/usr/bin/env python3
"""Generate original music bed + SFX for CTS Premium Brand Film (26s)."""
from __future__ import annotations

import math
import struct
import wave
from pathlib import Path

import numpy as np

SR = 48000
DURATION = 30.0
OUT = Path(__file__).resolve().parents[1] / "public" / "audio"


def env_adsr(n: int, a=0.01, d=0.08, s=0.7, r=0.2) -> np.ndarray:
    t = np.arange(n) / SR
    total = n / SR
    attack = np.clip(t / max(a, 1e-6), 0, 1)
    decay = 1 - (1 - s) * np.clip((t - a) / max(d, 1e-6), 0, 1)
    release_start = total - r
    release = np.ones_like(t)
    mask = t > release_start
    release[mask] = np.clip(1 - (t[mask] - release_start) / max(r, 1e-6), 0, 1)
    return attack * decay * release


def tone(freq: float, dur: float, amp=0.1, kind="sine") -> np.ndarray:
    n = int(dur * SR)
    t = np.arange(n) / SR
    if kind == "triangle":
        sig = 2 * np.abs(2 * ((t * freq) % 1) - 1) - 1
    elif kind == "soft":
        sig = np.sin(2 * math.pi * freq * t) + 0.25 * np.sin(4 * math.pi * freq * t)
    else:
        sig = np.sin(2 * math.pi * freq * t)
    return (sig * env_adsr(n, a=0.02, d=0.15, s=0.65, r=0.25) * amp).astype(np.float64)


def noise_whoosh(dur=0.35, amp=0.08) -> np.ndarray:
    n = int(dur * SR)
    rng = np.random.default_rng(42)
    noise = rng.standard_normal(n)
    # band-ish emphasis via simple diff
    whoosh = np.cumsum(noise)
    whoosh = whoosh / (np.max(np.abs(whoosh)) + 1e-9)
    env = env_adsr(n, a=0.04, d=0.12, s=0.35, r=0.18)
    return (whoosh * env * amp).astype(np.float64)


def soft_impact(dur=0.45, amp=0.12) -> np.ndarray:
    n = int(dur * SR)
    t = np.arange(n) / SR
    body = np.sin(2 * math.pi * 72 * t) * np.exp(-4.5 * t)
    thump = np.sin(2 * math.pi * 48 * t) * np.exp(-8 * t)
    return ((body + 0.6 * thump) * amp).astype(np.float64)


def ui_click(amp=0.035) -> np.ndarray:
    n = int(0.05 * SR)
    t = np.arange(n) / SR
    click = np.sin(2 * math.pi * 1800 * t) * np.exp(-55 * t)
    return (click * amp).astype(np.float64)


def place(buf: np.ndarray, clip: np.ndarray, at_sec: float) -> None:
    i = int(at_sec * SR)
    end = min(len(buf), i + len(clip))
    if i >= len(buf):
        return
    buf[i:end] += clip[: end - i]


def write_wav(path: Path, mono_or_stereo: np.ndarray) -> None:
    if mono_or_stereo.ndim == 1:
        data = np.stack([mono_or_stereo, mono_or_stereo], axis=1)
    else:
        data = mono_or_stereo
    data = np.clip(data, -1, 1)
    pcm = (data * 32767.0).astype(np.int16)
    with wave.open(str(path), "wb") as w:
        w.setnchannels(2)
        w.setsampwidth(2)
        w.setframerate(SR)
        w.writeframes(pcm.tobytes())


def make_bed() -> np.ndarray:
    n = int(DURATION * SR)
    t = np.arange(n) / SR
    # Slow evolving pad — graphite/lime brand mood (minor-ish, restrained)
    pad = (
        0.045 * np.sin(2 * math.pi * 110 * t)
        + 0.035 * np.sin(2 * math.pi * 164.81 * t)
        + 0.028 * np.sin(2 * math.pi * 220 * t)
        + 0.018 * np.sin(2 * math.pi * 329.63 * t)
    )
    # Gentle swell
    swell = 0.55 + 0.45 * (0.5 + 0.5 * np.sin(2 * math.pi * t / DURATION - 0.4))
    # High air texture
    air = 0.008 * np.sin(2 * math.pi * 880 * t) * (0.4 + 0.6 * np.sin(2 * math.pi * 0.07 * t))
    bed = (pad * swell + air) * env_adsr(n, a=1.2, d=2.0, s=0.85, r=1.4)
    # Soft riser into brand reveal (~19.5s)
    riser_start = 18.8
    for i in range(n):
        sec = i / SR
        if sec >= riser_start:
            u = (sec - riser_start) / 2.2
            bed[i] += 0.03 * math.sin(2 * math.pi * (220 + 180 * u) * sec) * min(1.0, u)
    # Resolve settle after 22s
    settle = np.ones(n)
    settle[int(22.5 * SR) :] *= np.linspace(1, 0.55, n - int(22.5 * SR))
    return bed * settle


def make_sfx() -> np.ndarray:
    n = int(DURATION * SR)
    buf = np.zeros(n, dtype=np.float64)
    # Opening atmosphere — tiny air
    place(buf, noise_whoosh(0.55, 0.04), 0.35)
    # Spark
    place(buf, soft_impact(0.5, 0.09), 1.1)
    place(buf, noise_whoosh(0.4, 0.06), 2.6)
    # Expand
    place(buf, noise_whoosh(0.5, 0.07), 3.0)
    place(buf, soft_impact(0.4, 0.07), 4.8)
    # Product reveals
    place(buf, noise_whoosh(0.38, 0.065), 6.7)
    place(buf, ui_click(0.03), 7.4)
    place(buf, ui_click(0.025), 7.7)
    place(buf, noise_whoosh(0.35, 0.055), 9.0)
    place(buf, ui_click(0.028), 10.6)
    place(buf, noise_whoosh(0.4, 0.06), 11.2)
    # Resolve
    place(buf, soft_impact(0.55, 0.1), 16.2)
    place(buf, noise_whoosh(0.45, 0.05), 16.5)
    # Brand accent
    place(buf, soft_impact(0.7, 0.14), 19.7)
    place(buf, tone(330, 0.9, 0.04, "soft"), 19.85)
    place(buf, noise_whoosh(0.5, 0.045), 20.1)
    return buf


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    bed = make_bed()
    sfx = make_sfx()
    write_wav(OUT / "premium-brand-bed.wav", bed)
    write_wav(OUT / "premium-brand-sfx.wav", sfx)
    print("wrote", OUT / "premium-brand-bed.wav")
    print("wrote", OUT / "premium-brand-sfx.wav")


if __name__ == "__main__":
    main()
