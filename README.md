# Geo Gabaisen Portfolio

Personal portfolio website for Geo Ceff Vinzr H. Gabaisen, built with Next.js, React, TypeScript, and plain CSS.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Lucide React and React Icons
- GitHub Pages static deployment

## Pages

- Home
- About
- Projects
- Skills
- Contact

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Checks

```bash
npm run lint
npm run build
```

## Content

- Profile, education, skills, and contact links: `app/siteData.ts`
- Featured and detailed projects: `app/projectData.ts`
- Global styling and responsive layout: `app/globals.css`
- Public assets: `public/`

## Deployment

Set **Settings > Pages > Build and deployment > Source** to **GitHub Actions**.

Push to `main`; the `Deploy to GitHub Pages` workflow builds the static export with the `/portfolio-website-public` base path and deploys `out/` to:

`https://geoceff.github.io/portfolio-website-public/`
