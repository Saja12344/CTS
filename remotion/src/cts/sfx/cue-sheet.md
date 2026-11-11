# CTS Brand Film — SFX Cue Sheet

No background music. Dry, premium, tactile. Leave headroom for music later.

Timecode @ 30fps. Volumes are relative (−dB suggested).

| # | Timecode | Frames | Duration | Cue | Description | Mix notes |
|---|---|---|---|---|---|---|
| 1 | 0:00.2 | 6 | 1.6s | pen-stroke-A | Fine-tip pen drawing head profile | −18 dB, soft attack |
| 2 | 0:00.8 | 24 | 1.2s | pen-stroke-B | Continued jaw / shoulder strokes | −20 dB |
| 3 | 0:01.6 | 48 | 0.8s | paper-hush | Very light paper texture | −28 dB, sparse |
| 4 | 0:02.3 | 70 | 0.5s | idea-chime | Delicate high chime on spark | −16 dB, short decay |
| 5 | 0:03.2 | 96 | 0.3s | draw-tick | Line radiates from spark | −22 dB |
| 6 | 0:03.6–0:05.5 | 108–165 | varies | draw-strokes | Soft strokes as network draws | −20 dB, staggered |
| 7 | 0:04.5 | 135 | 0.25s | module-tick | Card locks into place | −18 dB |
| 8 | 0:05.2 | 156 | 0.35s | lift-whoosh | Flat → depth airy whoosh | −20 dB |
| 9 | 0:05.8 | 174 | 0.2s | color-pop | Soft pop as fill appears | −22 dB, not cartoon |
| 10 | 0:07.2 | 216 | 0.25s | magnetic-snap | First grid alignment | −16 dB |
| 11 | 0:07.8–0:08.8 | 234–264 | 0.2s ea | muted-clicks | Remaining modules snap | −18 dB |
| 12 | 0:09.2 | 276 | 0.6s | structure-tone | Low tonal settle | −24 dB |
| 13 | 0:10.4 | 312 | 0.4s | morph-whoosh | Card → editor transform | −18 dB |
| 14 | 0:10.8–0:13.0 | 324–390 | bursts | typing | Restrained keyboard bursts | −20 dB |
| 15 | 0:13.2 | 396 | 0.3s | build-confirm | Soft digital confirmation | −18 dB |
| 16 | 0:13.6 | 408 | 0.45s | fold-whoosh | Editor → phone fold | −18 dB |
| 17 | 0:14.3 | 429 | 0.5s | assembly | Soft mechanical assembly | −20 dB |
| 18 | 0:15.0 | 450 | 0.25s | device-snap | Phone complete snap | −16 dB |
| 19 | 0:15.6 | 468 | 0.3s | ui-confirm | Screen / UI reveal | −18 dB |
| 20 | 0:16.4 | 492 | 0.35s | settle-whoosh | Composition settle | −20 dB |
| 21 | 0:17.4 | 522 | 0.4s | brand-settle | Final spatial settle | −20 dB |
| 22 | 0:18.0 | 540 | 0.8s | brand-tone | Warm restrained confirmation | −16 dB, natural decay |

## Implementation note

`SfxLayer.tsx` documents these cues as comments / data. Audio files are not embedded in the first render (keeps output music-ready and avoids network assets). Drop licensed WAVs into `remotion/public/sfx/` and wire `<Audio>` entries using the `from` frame values above.
