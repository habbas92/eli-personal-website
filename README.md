# elideltoro.com

Website for Eli del Toro, strength, hybrid training and Pilates Sculpt coach on the French Riviera.

Built with [Astro](https://astro.build) as a fully static site. No backend, no booking.

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
npm run preview    # serves dist/ locally
```

## Deploy on Cloudflare Pages

1. Push this repo to GitHub.
2. In the Cloudflare dashboard: Workers & Pages → Create → Pages → Connect to Git → pick the repo.
3. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node version: set the environment variable `NODE_VERSION` to `22`.
4. Add the custom domain `elideltoro.com` (and `www.elideltoro.com`) under the project's Custom domains tab.

`public/_headers` sets security headers and long cache times for hashed assets.

## Content rules

- "Eli" everywhere, never "Elizabeth".
- The email address is never written in the HTML. `src/components/EmailLink.astro` stores it encoded and builds the `mailto:` link only when the visitor clicks.
- Instagram: https://www.instagram.com/elideltorov. No TikTok.

## Languages

The site is in English (default, at the root), French (`/fr/...`) and Spanish (`/es/...`).
All text lives in `src/i18n/en.ts`, `fr.ts` and `es.ts`, one dictionary per language with the same shape, so a missing translation is a type error. To change wording, edit the dictionary; the page templates in `src/components/pages/` contain no copy. French uses the formal "vous"; Spanish uses "tú".

## Where things live

- `src/pages/` — thin route files; `src/pages/[lang]/` generates the French and Spanish versions.
- `src/components/pages/` — the four page templates, shared by all languages.
- `src/i18n/` — translations and URL helpers.
- `src/layouts/Base.astro` — head tags, nav, footer.
- `src/styles/global.css` — palette, type, buttons, shared blocks.
- `src/assets/photos/` — original photos; Astro resizes and converts them at build time.
- `design/` — the design canvas artboards this site was built from.
