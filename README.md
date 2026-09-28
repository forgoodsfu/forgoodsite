# Project For Good — website

The public site for Project For Good, a team of SFU software engineers building websites and web apps for local non-profits and small businesses, free of charge.

Built with **Next.js (App Router) + TypeScript**. Styling is plain CSS driven by design tokens from the Project For Good design system — no CSS framework.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (static)
npm run typecheck
```

## Where things live

| Path | What |
| --- | --- |
| `content/site.ts` | **All homepage copy**: nav, hero, process steps, projects, team, FAQ, footer, contact email. Edit this first. |
| `app/page.tsx` | The homepage, composed from components in section order. |
| `app/layout.tsx` | Fonts (Geist via the `geist` package), metadata, skip link. |
| `app/tokens.css` | Design tokens as CSS variables (light + dark via `prefers-color-scheme`). |
| `app/components.css` | Component and layout styles, all built on the tokens. |
| `components/` | `NavBar`, `Hero`, `SectionHeader`, `ImpactList`, `ProcessSteps`, `ProjectCard`, `TeamStrip`, `FAQ`, `CTABand`, `Footer`, `Button`, `Eyebrow`, `Tag`, `Wordmark`. |
| `public/hero-vancouver-dusk.jpg` | Hero background (a crop of the old site's photo; replace with the full-resolution original). |

## Before launch

- [x] Real projects and team in `content/site.ts` (ShowtimExotics, Little Papillon, Little Light Castle; Armin, Bardya, Felix, Nathan).
- [x] `CONTACT_EMAIL` set to forgoodsfu@gmail.com; GitHub footer link points at github.com/forgoodsfu.
- [ ] Add team roles (optional `role` on each member) and more projects as they ship. Screenshots go in `public/projects/`.
- [ ] Add Instagram / LinkedIn to the footer once those accounts exist.
- [ ] Swap in the full-resolution hero photo.
- [ ] Set `NEXT_PUBLIC_SITE_URL` in your host (see `.env.example`) so social previews work.

## Deploy

Push to GitHub and import the repo on [Vercel](https://vercel.com/new); no config needed. Any static host also works after `npm run build`.
