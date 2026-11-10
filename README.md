# SpareLab Marketplace

A frontend-only automotive procurement marketplace landing page built with Next.js App Router, React, Tailwind CSS, and Lucide icons. The search, supplier chat, quote acceptance, and QA certificate are interactive mockups; there is no backend or live procurement service.

The landing page includes a persisted light/dark appearance toggle and scroll-scrubbed section transitions. The transitions reverse with scroll direction, use a reduced version on compact screens, and are disabled for reduced-motion preferences.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## GitHub Pages deployment

The `Deploy to GitHub Pages` workflow publishes the static frontend from the `main` branch to:

`https://VamsiTirumanyam.github.io/frontend-mockup/`

In the repository settings, enable **Pages → Build and deployment → GitHub Actions**. Each push to `main` then builds and deploys the site automatically.

## Project structure

- `app/page.tsx` — landing page and demo interactions
- `app/globals.css` — brand tokens, responsive layout, and component styles
- `app/layout.tsx` — root layout and page metadata
- `components/` — theme provider, toggle, and scroll transitions
- `tailwind.config.ts` — SpareLab brand color palette
