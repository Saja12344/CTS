---
name: remotion-motion-studio
description: >-
  AUTO-USE whenever the user asks to make a video in Arabic or English
  (سوي فيديو، اعمل فيديو، فيديو، Remotion, motion graphics, launch video,
  SaaS promo, product demo, showreel, kinetic type). Full harness: best model,
  approved tool stack, Remotion-first, HyperFrames for URL launches, real
  capture, MagicPath for UI only, anti-AI look, beat sync, critique loop.
---

# Remotion Motion Studio (Harness)

**Trigger:** any request to make a video — including «سوي فيديو»، «اعمل فيديو»، «فيديو»، launch/promo/demo/motion/Remotion — even if they do not say “Remotion”.

Also read **realistic-remotion-components** in the same turn.

**Prompt ≈ 10%. Harness ≈ 90%.** Never ship centered-title-on-gradient + fade-only.

---

## Approved tool stack (do not invent a weaker stack)

| Role | Tool | Notes |
|------|------|--------|
| Brain | Strongest available model (Opus-class / max thinking) | Not cheap/fast for creative + critique |
| Engine (default) | **Remotion** | React, templates, deterministic frames |
| Engine (URL launch) | **HyperFrames** | Fast SaaS promo from product URL / HTML+GSAP |
| Product capture | **Screen Studio** (+ real screenshots) | Real UI footage so it does not look AI |
| UI / brand components | **MagicPath** (+ Figma/assets) | Components & brand match — **not** the video engine |
| Style references | **WhatShips** (whatships.com) | Launch-video grammar only |
| Voice | **Fish Audio** (MCP when available) | VO + clone; not flat default TTS |
| Beat sync | librosa → `beats.json` + code SFX | Cuts on beats; ~-14 LUFS |
| Encode | **FFmpeg** / Remotion render (Lambda if scale) | Deterministic MP4 |

Optional only when needed: Screenify/ScreenKite, Arcade/Storylane (interactive), Creatomate (bulk templates), Three.js/Blender (heavy 3D).

**MagicPath = UI/brand source on a large canvas. Remotion/HyperFrames = motion/video engine.**

---

## 0) Model selection (mandatory)

- Strongest coding/reasoning model for composition, style extraction, critique.
- Light models only for tiny fixes after scores ≥ 8.
- Subagents for motion: highest-quality model the host allows.

---

## 1) Route the job

1. **Default → Remotion** (`useCurrentFrame`, `spring`, `interpolate`, `Sequence`, `Series`, `AbsoluteFill`, `Audio`/`Video`/`Img`).
2. **Product URL launch / site tour → HyperFrames** `/product-launch-video` when faster; still apply anti-AI + critique rules.
3. Install Remotion skills if missing: `npx remotion skills add`.
4. **Forbidden in Remotion render path:** CSS transitions, `setTimeout`, `requestAnimationFrame`, unseeded `Math.random()`, Framer Motion as the final renderer.

Bootstrap Remotion:

```bash
npx create-video --yes --blank <name>
cd <name> && npm install && npx remotion skills add && npm run dev
```

---

## 2) Asset & component pipeline

1. Gather real brand assets (logo, colors, fonts, screenshots).
2. Prefer **Screen Studio** (or supplied) recordings of the real product.
3. Search **MagicPath** for near-real UI components; adapt into timed Sequences.
4. Follow **realistic-remotion-components** (no AI slop UI).
5. Pull style grammar from **WhatShips** / reference film → `docs/style_guide.md`.

### Anti-AI bans

Centered title on purple/cream gradient · fade-only · corner labels · glow spam · Inter/Roboto display · pill clusters · generic AI startup look · fake device chrome unless asked.

### Craft

Hook in 2s · one display + one UI face · one accent · new beat every 2–4s · phone-readable · springs not linear fades · product UI motion (cursor, panels, cascades).

---

## 3) Brief → shotlist

Duration, fps (30/60), aspect · genre · 6–8 shots per ~15s · assets · beat intent → `docs/shotlist.md`.

---

## 4) Audio

Fish Audio VO when possible · `beats.json` · SFX on UI events · Remotion `Audio` ±2 frames of visual hits.

---

## 5) Animation vocabulary

Kinetic type · UI state machines · camera push/pan/snap · morphs · staggered cascades · chart draw-ons · logo lockup · cursor demos.

---

## 6) Critique loop (required)

Contact sheet → look at frames → score hook / readability / motion / variety / brand / sync → fix worst 3 until all ≥ 8 → full render.

---

## 7) Delivery checklist

- [ ] Correct engine (Remotion default / HyperFrames for URL launch)
- [ ] Real capture or screenshots used when product exists
- [ ] MagicPath searched for UI (not used as sole motion engine)
- [ ] Anti-AI bans respected
- [ ] Beats / VO / SFX aligned
- [ ] Critique ≥ 1 pass (3 for launch)
- [ ] Final MP4 previewed
