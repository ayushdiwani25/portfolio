# Aayush Divani — Portfolio

Editorial single-page portfolio. React 19 · Vite 8 · Framer Motion (LazyMotion) · plain CSS with design tokens.

```bash
npm install
npm run dev        # local dev
npm run lint
npm run build      # -> dist/
npm run preview
```

## Edit content
Everything lives in `src/data/site.js` (contact info, socials, projects, experience, skills, education).
Add a project = add one object to `PROJECTS`.

## Theme
Light/dark via CSS variables in `src/styles/base.css`; choice is saved in localStorage and falls back to the OS setting.

## Deploy (GitHub Pages)
Push to `main`; `.github/workflows/deploy.yml` builds and publishes.
Settings → Pages → Source: **GitHub Actions**. `base: './'` works under any repo name.
