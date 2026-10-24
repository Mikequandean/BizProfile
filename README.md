# House of Mzozoyana — Business Profile

A polished, review-ready **Next.js** profile site for **House of Mzozoyana**, a
bold, vigorous technology company that builds software systems to solve the
operational problems businesses face.

This is not a generic marketing site — it is a focused business profile, built
with accuracy and review-readiness as the priority. All copy lives in a single
source of truth so it can be checked against the source profile at a glance.

## Getting started

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Verify

```bash
npm run lint   # ESLint + Next.js core-web-vitals rules
npm run build  # Production build
```

## Project layout

```
src/
  app/
    layout.tsx        # Root layout + SEO / Open Graph metadata
    page.tsx          # Composes the profile sections
    globals.css       # Brand palette & base styles
  components/         # Presentational section components (Hero, Brothers, ...)
  data/profile.ts     # All profile copy (single source of truth)
public/               # Logo + brother portraits
```

## Content

All profile copy is stored in [`src/data/profile.ts`](./src/data/profile.ts) and
was transcribed from the official House of Mzozoyana business profile PDF. Edit
the content there to keep every page in sync.

## Brand

- Deep emerald: `#0d5942`
- Tech-forward, grounded, bold.
