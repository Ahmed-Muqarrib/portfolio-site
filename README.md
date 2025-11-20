# Ahmed Muqarrib – Portfolio

This portfolio is a condensed version of my resume, presented as a polished, responsive single-page experience. It highlights my machine learning research work, AI web applications, and accessible product design—all within a custom UI built from scratch.

## Why I Built It

- **Storytelling:** A resume lists bullet points; this site walks visitors through my career narrative, key projects, and impact metrics.
- **Experimentation:** I wanted an excuse to design motion-heavy sections (hero overlays, timeline animations, project hover states) and to explore Angular’s standalone component patterns.
- **Reusability:** Everything; content, skills, timelines, links; lives in `data.ts`, so I can iterate on wording or add new roles without touching the layout.

## Visual Highlights

- **Hero Section:** Animated gradients + staggered text reveal to establish personality immediately.
- **Timeline Experience:** Alternating cards on a vertical axis to showcase the three Sheridan Centre roles with specific metrics (e.g., “~800,000 patient records”).
- **Project Cards:** Rounded glassmorphism cards with custom imagery slots (`public/projects/Project1.png`, `Project2.png`) for Accessible Events Portal and Bloomzy.
- **Contact CTA:** Minimal, high-contrast block that routes visitors to email or LinkedIn.

## Tech Decisions

- **Angular 17 + Standalone Components:** Keeps the codebase compact and tree-shakeable without traditional NgModules.
- **Tailwind CSS 3:** Rapid styling, custom animation utilities, and consistent spacing/typography tokens.
- **TypeScript Data Layer:** `portfolioData` centralizes experience, projects, skills, and social links for easy maintenance.

## Architecture Overview

- `src/app/components/*` – each section (navbar, hero, about, experience, projects, contact, footer) lives in its own standalone component with dedicated templates/styles.
- `src/app/data.ts` – single source of truth for resume content.
- `public/projects/` – drop-in assets for project hero images.
- `styles.scss` – Tailwind entry point plus custom utility classes and keyframes.

## Contact

- **Email:** muqarrib720ahmed@gmail.com
- **LinkedIn:** [linkedin.com/in/ahmed-muqarrib-b59a90289](https://www.linkedin.com/in/ahmed-muqarrib-b59a90289/)
