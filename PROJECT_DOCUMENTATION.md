# Project Documentation

## Overview

This project is a responsive single-page portfolio for Aayush Divani, a front-end developer and React.js specialist. It presents selected projects, professional experience, technical skills, and contact details in an editorial-style interface.

## Main Features

- Responsive layout for desktop and mobile screens
- Smooth anchor navigation for Work, Experience, and Contact sections
- Animated page entrance and project hover states with Framer Motion
- Scroll progress indicator animated with GSAP
- Selected project cards with live project links
- Resume link using `public/Aayush_Resume.pdf`
- Contact links for email, LinkedIn, and GitHub
- Tailwind CSS utility classes alongside custom CSS styling
- ESLint configuration for JavaScript and React files

## Technology Stack

- React 19
- Vite 8
- Framer Motion
- GSAP
- Tailwind CSS 4
- ESLint
- JavaScript and JSX

## Project Structure

```text
potfolio/
├── public/
│   ├── Aayush_Resume.pdf   # Resume opened by the Resume button
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/              # Image and template assets
│   ├── App.jsx              # Portfolio content and page layout
│   ├── App.css              # Portfolio-specific styles
│   ├── index.css            # Global styles, fonts, and Tailwind import
│   └── main.jsx             # React application entrypoint
├── eslint.config.js
├── index.html
├── package.json
└── vite.config.js
```

## Requirements

- Node.js 18 or newer
- npm

Python and a `.venv` folder are not required. This is a React/Vite application and uses `node_modules` for its dependencies.

## Installation

From the project directory, install the dependencies:

```bash
npm install
```

## Run Locally

Start the Vite development server:

```bash
npm run dev
```

Vite normally serves the site at `http://localhost:5173/`. If that port is already being used, Vite automatically selects another port, such as `http://localhost:5174/`. Always use the URL printed in the terminal.

## Available Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Check JavaScript and JSX files with ESLint |

## How the Application Works

The browser loads `src/main.jsx`, which imports the global stylesheet and renders the `App` component into the `root` element from `index.html`.

`src/App.jsx` contains the complete portfolio page. It defines data arrays for skills, experience, and projects, then renders those arrays into the page sections. The component also:

- Uses `useEffect` to listen for page scrolling.
- Uses GSAP to animate the fixed scroll progress bar.
- Uses Framer Motion for entrance animations and project hover movement.
- Uses anchor links to move between sections on the same page.

## Editing Portfolio Content

Most visible content is defined near the top of `src/App.jsx`:

- `skills`: technical skills shown in the Toolkit section
- `experience`: jobs, internships, dates, and bullet points
- `projects`: project names, descriptions, technology tags, live URLs, and visual labels

Update these areas when personal information changes:

- Hero introduction and availability text
- Email address and phone number
- LinkedIn and GitHub URLs
- Resume filename in the navigation link
- Footer name and copyright year

Use `src/App.css` for portfolio layout and component styles. Use `src/index.css` for global styles, imported fonts, and Tailwind CSS setup.

## Assets

Files inside `public/` are served from the website root. For example, `public/Aayush_Resume.pdf` is available at `/Aayush_Resume.pdf` and is opened by the Resume link.

Assets inside `src/assets/` can be imported into React components when needed. Existing template images are not currently used by the portfolio layout.

## Production Build

Build the application with:

```bash
npm run build
```

The generated files are placed in `dist/`. Test the production build locally with:

```bash
npm run preview
```

## Deployment

This is a static Vite build and can be deployed to Vercel, Netlify, GitHub Pages, or Firebase Hosting. Configure the deployment to run `npm run build` and publish the `dist/` directory.

Keep the resume file in `public/` so `/Aayush_Resume.pdf` continues to work after deployment.

## Troubleshooting

### The localhost link does not open

1. Confirm that `npm run dev` is still running.
2. Open the exact `Local` URL printed by Vite in the terminal.
3. Check whether Vite selected another port because `5173` was busy.
4. If dependencies are missing, run `npm install` and start the server again.

### The resume link does not work

Confirm that `public/Aayush_Resume.pdf` exists and that the filename matches the link in `src/App.jsx`.

### The site looks different after editing CSS

Vite hot reloads CSS changes automatically. Refresh the browser and check for syntax errors in the terminal or run:

```bash
npm run lint
```