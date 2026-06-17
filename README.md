# Glenn Josia Devano — Cybersecurity & QA Testing Portfolio

A modern React + Tailwind CSS portfolio website for Glenn Josia Devano, focused on cybersecurity, QA testing, web application security, CTF, digital forensics, and secure product development.

## Overview

This portfolio presents Glenn as an Information Systems student at Universitas Indonesia with hands-on learning and project experience in web security, CTF challenge design, digital forensics, QA testing, bot development, AI safety evaluation, and technical documentation.

The previous static HTML/CSS/JavaScript portfolio was migrated into a Vite-powered React application with reusable components and data files for easier updates.

## Live Demo

Production URL:

```txt
https://your-project-name.vercel.app/
```

Replace this with the final Vercel URL after deployment.

## Tech Stack

- React.js
- Vite
- Tailwind CSS
- JavaScript
- Lucide React
- Vercel deployment support

## Features

- Dark, recruiter-friendly cybersecurity visual style
- Sticky responsive navigation with GitHub and LinkedIn links
- Hero section with profile image, CTA buttons, badges, and terminal-style status card
- Data-driven skills, experience, achievements, and projects
- Featured FlagWarden project card with styled mock visual
- Project filtering by category
- Responsive project cards with fixed aspect ratio media
- Privacy-safe contact section using mailto instead of a fake working form
- SEO and Open Graph meta tags
- Initials-based SVG favicon
- Static deployment-ready build for Vercel

## Sections

- Navbar
- Hero
- About
- Focus Areas
- Technical Skills
- Experience
- Projects
- Certifications & Achievements
- Why Me / Value Proposition
- Contact
- Footer

## Project Highlights

### FlagWarden — Telegram CTF Cybersecurity Learning Bot

Featured project for cybersecurity education and QA-minded bot development. It highlights Python, FastAPI, Telegram Bot API, SQLite, Pytest, CTF learning flows, safety guardrails, scoring, streak tracking, duplicate-solve prevention, rate limiting, and automated tests.

### Personal Portfolio Website

The current React + Tailwind CSS portfolio, redesigned to communicate cybersecurity, QA testing, web security, CTF, and software development focus areas.

### Older Mobile Prototype Projects

- Waste2Wealth
- Task Track Smasa
- Senja

These projects are kept as UI/UX, mobile prototyping, workflow design, and product thinking evidence.

## Local Setup

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Vite will print a local URL, usually:

```txt
http://localhost:5173/
```

## Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deploy to Vercel

This project is configured for Vercel root hosting:

```js
base: "/"
```

Recommended Vercel project settings:

- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

Local command flow:

```bash
npm install
npm run dev
npm run build
npm run preview
```

Push the project to GitHub, then import the repository from the Vercel dashboard. Vercel will redeploy automatically after future pushes to the production branch.

## Assets

Current source assets are stored in:

```txt
src/assets/
```

Included assets:

- `profile.jpg`
- `project1.jpg`
- `project2.jpg`
- `project3.jpg`

The CV download file is expected at:

```txt
public/Glenn_Josia_Devano_CV.pdf
```

If the CV changes, replace that PDF with the updated version using the same filename.

FlagWarden currently uses a styled mock visual because no real screenshot is included. Add future screenshots under:

```txt
public/assets/screenshots/
```

Then update `src/data/projects.js` to reference the new screenshot.

## Future Improvements

- Add real FlagWarden screenshots or a short demo video
- Add case-study pages for major projects
- Add a downloadable one-page resume preview section
- Add GitHub Actions deployment for GitHub Pages
- Add Lighthouse and accessibility checks to the build workflow
- Add project metrics when public repositories are ready

## Contact

- Email: [glennjosiadevano07@gmail.com](mailto:glennjosiadevano07@gmail.com)
- LinkedIn: [glenn-josia-devano](https://www.linkedin.com/in/glenn-josia-devano)
- GitHub: [DevCoder-7](https://github.com/DevCoder-7)
- Location: Depok, West Java, Indonesia
