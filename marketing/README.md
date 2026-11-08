# CTS weekly prep

Private content prep for Core Tech Solutions. It is not part of the public Vite site. Nothing here is imported by the site build, and GitHub Pages publishes `dist/` only.

This folder writes one week of five Arabic short films: a review sheet, a prompt, and an OpenAI-shaped JSON body. It does not call OpenAI, it does not call a video API, and it does not publish.

The brand pack in `brand/` is frozen from `src/content/site.ts`. A film may repeat those Arabic sentences and may not add a price, a client, or a result.

## Run

From this directory:

```bash
python3 -m marketing_prep
```

That rewrites `content/2026-11-08/` and prints the five prompts. `OPENAI_API_KEY` is reported as set or unset and is never printed. The command does not read a `.env` file.

```bash
python3 -m marketing_prep --provider plate
python3 -m marketing_prep --submit
```

`--provider plate` prints the same prompts and names the still-and-type envelope. `--submit` exits 2 and sends nothing. There is no HTTP client in this package.

## Week of 8 November 2026

Scripts: `content/2026-11-08/scripts/`

Prompts: `content/2026-11-08/prompts/*.txt`

API bodies: `content/2026-11-08/prompts/*.json`

`model` and `Authorization` in the JSON are the placeholders `${OPENAI_VIDEO_MODEL}` and `${OPENAI_API_KEY}`. Fill them in an environment you control if a person later decides to pay for a video call. This tool will still refuse `--submit`.
