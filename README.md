# ClipText AI

**Created by [Lamarrsdrip](https://github.com/Lamarrsdrip)**

A personal, local-first tool that converts any video or screen recording into a full timestamped transcript — then lets you send it straight to Claude.

Built on the open-source [agent-native](https://github.com/BuilderIO/agent-native) Clips template, customized and extended for personal AI workflow use.

---

## What it does

- **Record your screen** or **upload any video** — transcript is generated automatically
- **Timestamped transcript** with search, copy, and multi-format export
- **Claude-ready prompt** — one click to copy the full transcript wrapped in XML tags, ready to paste into Claude
- **Export as** `.txt`, `.md` (with timestamps), or `.srt`
- **100% local-first** — SQLite database, no cloud setup required
- **Summary + AI tools** — ask Claude to summarize, find key moments, or extract action items

---

## Quick start

```bash
# Clone
git clone https://github.com/Lamarrsdrip/cliptext-ai.git
cd cliptext-ai

# Install
pnpm install

# Configure (copy env template)
cp .env.example .env
# Optional: add GROQ_API_KEY= to .env for auto-transcription

# Run
pnpm dev
# → http://localhost:8080
```

---

## Enable transcription

Transcription is the only feature that needs an API key. Add one of these to your `.env`:

```bash
# Option A — Groq (recommended, fast, cheap ~$0.04/hr)
# Get free key at: https://console.groq.com/keys
GROQ_API_KEY=gsk_your_key_here

# Option B — OpenAI Whisper (fallback)
OPENAI_API_KEY=sk-your_key_here
```

Without a key, video upload and playback still work — you just won't get auto-transcription.

---

## Cloudflare Tunnel (share preview link)

```bash
cloudflared tunnel --url http://localhost:8080
# → gives you a public https://xxx.trycloudflare.com link
```

---

## Where data is saved

| What | Where |
|---|---|
| Database | `data/app.db` (SQLite, auto-created) |
| Uploaded videos | `data/uploads/` |
| Settings | `data/settings.json` |

All local, nothing leaves your machine.

---

## Daily workflow

1. `pnpm dev` in this directory
2. Open http://localhost:8080
3. **Record** your screen or **Upload** a video
4. Wait for transcription (seconds with Groq)
5. Click the **robot icon** to copy the Claude-ready prompt
6. Paste into Claude and ask anything

---

## Tech stack

- React Router v8 + Vite 8
- Tailwind CSS + shadcn/ui
- Drizzle ORM + SQLite (local-first)
- Nitro server
- @agent-native/core

---

## License

MIT — created by [Lamarrsdrip](https://github.com/Lamarrsdrip), built on [BuilderIO/agent-native](https://github.com/BuilderIO/agent-native) (MIT).
