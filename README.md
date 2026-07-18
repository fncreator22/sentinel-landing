# Portfolio — Sentinel Project Page

A static, single-page portfolio site. Project #1 is Sentinel (a guardrail
agent for AI coding agents, built for a hackathon). Structured so more
projects can be added later.

## What's already built and tested

- Full page structure: hero, problem statement, pipeline visualization,
  a 5-image dashboard feature gallery (rules editor, live action tester,
  model settings, MCP server registry, export & share), tech stack, CTA.
- A live GitHub stars badge in the nav (via shields.io — no backend needed).
- GSAP animations, verified working in a real browser:
  - Hero: a command types itself out, then gets stamped "BLOCKED"
  - Scroll-triggered fade-ins on every section
  - Signature animation: an action packet visibly travels through the
    3-stage pipeline and gets tagged with a final verdict
- Fully responsive (collapses to single column under 820px)
- Respects `prefers-reduced-motion` (animations disabled for users who need that)
- Visible keyboard focus states for accessibility

All of the above was rendered and screenshotted in a real headless browser
to confirm it actually works — this isn't unverified code.

## What YOU (or your agent) need to do before this is ready to publish

1. **Replace placeholder links** — search for `YOUR-USERNAME` in `index.html`
   (appears 5 times, including in the stars badge URL) and replace with your
   actual GitHub username/repo.
2. **Replace the nav logo** — `<div class="logo">◆ your name</div>` in
   `index.html` — put your actual name or brand.
3. **Note on the stars badge**: it uses `img.shields.io`, a public badge
   service — it'll show your repo's real star count automatically once the
   URL points at your actual repo, no backend or token needed. GitHub repo
   *views* are intentionally not shown here — that data requires repo-owner
   authentication and isn't safely exposable on a static public page.
3. **Decide on hosting** — this is a static site, so any of these work with
   zero backend:
   - GitHub Pages (free, easiest — just enable Pages on this repo's settings,
     pointing at the root or a `/docs` folder)
   - Vercel or Netlify (free tier, drag-and-drop deploy)
4. **Optional**: add a real demo video/GIF of the dashboard in action instead
   of (or alongside) the static screenshot in `assets/dashboard-screenshot.png`.
5. **Optional, for future projects**: duplicate the `.pipeline`-style section
   pattern for a second project, or turn the hero eyebrow ("Project 01") into
   an actual multi-project index page if you want a true portfolio homepage
   listing several projects instead of one deep-dive page.

## File structure

```
portfolio/
├── index.html      # all content and structure
├── style.css        # design tokens + all styling
├── script.js         # GSAP animation logic
└── assets/
    └── dashboard-screenshot.png   # real screenshot of the Sentinel dashboard
```

## Notes on the animation approach (for whoever edits this next)

- GSAP + ScrollTrigger are loaded via CDN (cdnjs) in `index.html` — no build
  step, no npm install required to just open and view the page.
- The pipeline animation (`script.js`) calculates packet position by reading
  the actual DOM positions of the stage cards at animation time — if you
  change the pipeline section's HTML structure or number of stages, you'll
  need to update the `stages` selector and the timeline logic accordingly.
- Colors are defined once as CSS custom properties in `style.css` (`:root`)
  — change the palette there, not by hunting through individual rules.
