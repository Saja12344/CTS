# Remotion video workspace

This folder is the **real Remotion Studio / render project** for the CTS repo.

The parent `/workspace` app is a Vite + React marketing site. It is **not** Remotion.
Previous “video” attempts that only opened `npm run dev` (Vite) were previewing a webpage, not Remotion Studio.

## Commands (from this directory)

```bash
cd remotion
npm run studio          # open Remotion Studio
npm run compositions    # list composition IDs
npm run render          # export WorkflowTest → out/workflow-test.mp4
npm run still           # export WorkflowStill → out/workflow-still.png
```

From the repo root:

```bash
npm run remotion:studio
npm run remotion:render
```

## Structure

- `src/Root.tsx` — composition registration (`registerRoot` entry via `src/index.ts`)
- `src/compositions/` — full videos (e.g. `WorkflowTest`)
- `src/scenes/` — timed scenes used inside Series
- `src/components/` — interactive reusable layers (`TitleCard`, `GeometricBadge`)
- `src/settings.ts` — easy knobs (duration/FPS/dims/colors/copy)
- `public/` — assets referenced with `staticFile()`

## Studio vs Player vs file

| Surface | What it is |
| --- | --- |
| **Remotion Studio** (`npm run studio`) | Full editor UI: sidebar compositions, timeline, props, preview |
| **`@remotion/player` / Vite site** | Embeddable preview in a webpage — not Studio |
| **Rendered MP4/PNG** | Offline export via `remotion render` / `still` |

Editor Starter (commercial custom timeline UI) is **not** required for this workflow.
