# CTS Brand Film SaaS

Next.js + Remotion SaaS app for the Core Tech Solutions 20s brand film.

Built from the official Remotion Next.js template (`create-video --next --tailwind`) with the CTS six-scene composition parameterized for live preview and Lambda render.

## Features

- **Player preview** — `@remotion/player` plays the full 20s / 1920×1080 film
- **Editable props** — brand name, tagline, canvas/ink/accent colors, scene copy
- **Wordmark-only brand end** — no icon; tagline from props
- **Lambda render API** — `/api/lambda/render` + `/api/lambda/progress` (requires AWS setup)

## Run locally

```bash
cd remotion-saas
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Remotion Studio:

```bash
npm run remotion
```

Local render (no Lambda):

```bash
npx remotion render CTSBrandFilm out/brand-film.mp4
```

## Composition props

| Prop | Default |
|------|---------|
| `brandName` | Core Tech Solutions |
| `tagline` | We turn ideas into digital products. |
| `canvasColor` | `#F6F3EE` |
| `inkColor` | `#1E1C1A` |
| `accentColor` | `#D96B2F` |
| `scene1Text` … `scene4Text` | Film captions |

## Lambda rendering

1. Copy `.env.example` → `.env` and add AWS credentials (`REMOTION_AWS_ACCESS_KEY_ID`, `REMOTION_AWS_SECRET_ACCESS_KEY`).
2. Follow the [Lambda setup guide](https://www.remotion.dev/docs/lambda/setup).
3. Deploy site + function: `npm run deploy`.
4. Use **Render video** in the UI.

## Repo scripts (from monorepo root)

```bash
npm run saas        # next dev
npm run saas:studio # remotion studio
npm run saas:build  # next build
```

## Source layout

- `src/remotion/cts/` — BrandFilm + scenes (ported from remotion scaffold)
- `src/app/page.tsx` — Player + form
- `types/constants.ts` — Zod schema + video constants
