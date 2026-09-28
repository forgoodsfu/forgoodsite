# Project For Good site — notes for Claude Code

Next.js App Router + TypeScript, plain CSS. Run `npm run dev`; check `npm run build` and `npm run typecheck` before calling work done.

## Design system rules (follow these for every change)

- **Never hard-code colours, spacing or radii.** Use the CSS variables in `app/tokens.css` (e.g. `var(--ink)`, `var(--space-5)`, `var(--radius-md)`). Add new styles to `app/components.css` with a `pfg-` class prefix.
- **Two grounds:** `--paper` for reading sections, `--night` for the stage (nav, hero, process screen, CTA band, footer). Alternate `.pfg-sunken` bands between paper sections; never split sections with borders.
- **One accent:** `--sunset` for the main CTA fill, the cursor, the active process rail and bullet squares. Text on it is `--on-sunset`, never white. On light paper, sunset used as *text* must be `--sunset-ink`.
- **Links** use `--harbour` on paper and `--harbour-on-night` on night. Focus ring: 2px solid `--focus-ring`, 2px offset.
- **Frame colours** (`--frame-harbour|sunset|lilac|moss`) are for project stages and bullet squares only; no text on them.
- **Type:** Geist (`--font-sans`) for everything; Geist Mono (`--font-mono`) for eyebrows, meta labels, step numbers. Eyebrows are uppercase: `01 / WHAT WE DO`.
- **Headings are two-tone:** quiet lead-in + loud payoff (`SectionHeader light="Work that" title="speaks for itself."`).
- **Buttons:** one `accent` per view; `ghost` / `ghost-night` beside it. Radius `--radius-sm`, never pills.
- **Motion:** only the cursor blink and the team marquee loop; both stop under `prefers-reduced-motion`.
- **Voice:** plain, specific, sentence case, no exclamation marks, no emoji, no invented stats. "We" = the team, "you" = the partner organization (a non-profit or small business).

## Content

All copy is in `content/site.ts`. See the launch checklist in README.md.

## Source of truth

The design system (tokens, component guidelines, previews) lives in the Project For Good Design System artifact on Claude. If tokens change there, regenerate `app/tokens.css` to match.
