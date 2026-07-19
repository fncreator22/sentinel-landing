# Sentinel — Landing Page

The official landing page for [Sentinel MCP](https://github.com/fncreator22/sentinel-mcp) — a three-stage guardrail agent for LLM-powered coding assistants.

---

## 🎬 Demo Video

> A short walkthrough of the problem, the pipeline, and the dashboard.

<video src="assets/sentinel-demo.mp4" controls width="100%"></video>

> **Can't see the video inline?** [▶ Download and watch it directly](assets/sentinel-demo.mp4)

---

## What's on the page

- **Hero** — headline, animated terminal blocking a dangerous command, and CTA buttons
- **Intro video** — compressed `sentinel-demo.mp4` (4.2 MB, faststart-optimised for smooth streaming)
- **Problem section** — explains the risk of autonomous agent execution with live verdict examples
- **Pipeline visualization** — animated packet traveling through the 3 stages with GSAP ScrollTrigger
- **Feature grid** — 8 guardrail features including Rules Engine, Classifier, LLM Reviewer, SSE support, Audit Log
- **Dashboard gallery** — 5 screenshots: Overview, Rule Editor, Model Settings, MCP Servers, Export & Share
- **Get started steps** — 5-step install guide
- **Tech stack** — Python · FastAPI · scikit-learn · Ollama · SQLite · MCP · Vanilla JS
- **Final CTA** — links to the main GitHub repository

Fully responsive, GSAP-animated, and respects `prefers-reduced-motion`.

---

## File structure

```
portfolio/
├── index.html                          # all content and structure
├── style.css                           # design tokens + all styling
├── script.js                           # GSAP animation logic
└── assets/
    ├── sentinel-demo.mp4               # compressed demo video (4.2 MB, faststart)
    ├── dashboard-overview.png          # Sentinel dashboard screenshot
    ├── localhost_8080_ (1).png         # Rule editor screenshot
    ├── localhost_8080_ (2).png         # Model settings screenshot
    ├── localhost_8080_ (3).png         # Export & Share screenshot
    └── Screenshot 2026-07-19 004943.png   # MCP Servers screenshot
```

---

## Notes

- GSAP + ScrollTrigger are loaded via CDN — no build step required
- Video is H.264 MP4 with `+faststart` MOOV atom for instant browser streaming
- Gallery images use `loading="lazy"` for performance
- Colors are defined as CSS custom properties in `:root` — change palette there

