# Premium Brand Film audio

| File | Source |
|------|--------|
| `premium-brand-vo.wav` | English VO generated with Google gTTS (`en` / `.com`), tempo-adjusted and mixed into a 26s stereo bed. Prefer regenerating with `edge-tts` (`en-US-AndrewNeural`) when that endpoint is available. |
| `premium-brand-bed.wav` | Original synthesized musical pad (`scripts/generate_premium_audio.py`). |
| `premium-brand-sfx.wav` | Original whooshes, soft impacts, UI clicks (`scripts/generate_premium_audio.py`). |

Note: Microsoft Edge TTS returned HTTP 403 in this environment; gTTS was used as the legally usable generated-voice fallback.
