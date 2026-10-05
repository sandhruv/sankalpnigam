# Sankalp Nigam — Portfolio / Resume

Single-page portfolio site built with Next.js 16 (App Router), TypeScript and Tailwind CSS v4.

## Run

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # production build
npm run lint   # eslint
```

## Structure

- `lib/resume.ts` — all resume content (skills, experience, projects, certificates, achievements, education) and every outbound link. Edit this file to update the site.
- `app/page.tsx` — page composition
- `components/` — `site-header`, `hero`, `section`, `external-link`

## Note on links

The source resume shows anchor text `sankalp-nigam` / `sankalpnigam` for LinkedIn and GitHub, but the actual hyperlink targets point to the `sandhruv` profiles. The real destinations are kept in `lib/resume.ts` — confirm which profile is correct and update there.
