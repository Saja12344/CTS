---
name: remotion-motion-studio
description: >-
  Use for any Remotion video, motion graphics, launch video, kinetic typography,
  UI animation, showreel, or product promo. Forces Remotion-only pipeline, best
  model, real brand assets, MagicPath/ready components first, anti-AI look,
  beat sync, and critique loop before final render.
---

# Remotion Motion Studio (Harness)

Apply this skill automatically whenever the user asks for a Remotion video, motion graphics, launch/promo clip, kinetic type, UI animation, showreel, or timed React video.

Also read **realistic-remotion-components** in the same turn for UI/visual sourcing.

**Prompt is ~10% of quality. This harness is ~90%.** Never ship a one-shot centered-title-on-gradient video.

---

## 0) Model selection (mandatory)

- Prefer the strongest available coding/reasoning model for the full creative pass (Opus-class / highest effort / max thinking when the host allows).
- Do NOT use cheap/fast/light models for first composition, style extraction, or critique.
- Light models are OK only for tiny typo/timing fixes after scores are already 8+.
- If spawning subagents for Remotion motion work, pick the highest-quality model the host allows for that task.

---

## 1) Stack lock: Remotion only

Unless the user explicitly asks otherwise:

1. Use Remotion (`@remotion/cli`, compositions, `useCurrentFrame`, `useVideoConfig`).
2. Install Remotion Agent Skills when missing: `npx remotion skills add`.
3. Animate only with Remotion primitives: `interpolate`, `spring`, `Sequence`, `Series`, `AbsoluteFill`, `Audio`, `Video`, `Img`.
4. **Forbidden in render path:** CSS transitions/animations, `setTimeout`, `requestAnimationFrame`, `Math.random()` (use seeded noise), carousel timers, Framer Motion for the final Remotion render.
5. Every frame must be a pure function of `frame` (and props). Deterministic re-renders.

Bootstrap if needed:

```bash
npx create-video --yes --blank <name>
cd <name> && npm install && npx remotion skills add && npm run dev
```

---

## 2) Component sourcing (ready-made first, then near-real)

Follow **realistic-remotion-components**. Summary:

1. Search MagicPath for product UI close to the brief; inspect previews.
2. Adapt matches into Remotion Sequences; keep tokens.
3. Else build near-real UI with authentic assets — not AI landing slop.
4. Pull real brand assets when a URL/product is given.

### Anti-AI look (hard bans)

- Centered title on purple/indigo or cream gradient
- Everything only fading in
- Corner labels, fake film borders, generic particle bursts, glow spam
- Inter/Roboto/Arial/system as display faces for branded work
- Rounded-full pill clusters, multi-layer soft shadows as decoration
- Stock “AI startup” purple-on-white look
- Device mockup chrome unless requested

### Realistic craft rules

- Hook in first 2 seconds
- One display face + one UI face; one accent unless brand says otherwise
- Every 2–4 seconds something new happens
- Readable at phone size
- Springs / overshoot — not linear fades only
- Product-like UI motion: cursor, click, panel slide, list cascade, chart draw

---

## 3) Brief → shotlist

1. Duration, fps (30/60), size (1080p or 9:16)
2. Genre (launch / UI demo / kinetic type / explainer / showreel)
3. 6–8 shots for ~15s
4. Asset list + beat intent
5. Write `docs/shotlist.md` in project folders

---

## 4) Style & reference grammar

Extract timing/cut/type/camera grammar into `docs/style_guide.md`. Steal rhythm, not content.

---

## 5) Audio & beat sync

1. Measure BPM → `beats.json` when music exists
2. Cuts/logo/UI hits on beats
3. UI SFX on events; ~-14 LUFS when mixing
4. Prefer real/cloned VO when available
5. Remotion `Audio` frame-accurate; visual hits ±2 frames

---

## 6) Animation vocabulary

Kinetic type · UI state machines · camera push/pan/snap · morphs · staggered cascades · chart draw-ons · logo lockup · cursor demos

Use `spring` + `interpolate` with clamp/easing. One technique per shot; variety across the piece.

---

## 7) Critique loop (required)

1. Contact sheet / key frames
2. Look at images
3. Score 1–10: hook, phone readability, motion, variety, brand, sound sync
4. Fix worst 3 until all ≥ 8
5. Then full render

Reject centered text + gradient + fade.

---

## 8) Delivery checklist

- [ ] Remotion-only deterministic timeline
- [ ] MagicPath/ready components searched first
- [ ] Anti-AI bans respected
- [ ] Shotlist/style notes for non-trivial jobs
- [ ] Beats/SFX/VO aligned
- [ ] Critique pass done (3 for launch videos)
- [ ] Final render previewed
