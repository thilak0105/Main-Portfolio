# Thilak L - Portfolio

A terminal-inspired personal portfolio built with React + Vite. 

It showcases projects, experience, achievements, skills, resume, and contact details in a single-page scrolling layout with animated section transitions and VS Code-like UI chrome.

## Live Links

- Portfolio: https://thilakportfolio.vercel.app
- Resume Site: https://resume.thilak.tech

## Features 

- VS Code-inspired UI shell with top bar, tab navigation, and activity bar.
- Scroll-synced active tab state using Intersection Observer in the main app.
- Animated hero section with terminal-style status panel and profile highlights.
- Dedicated sections for:
	- Hello
	- Experience
	- About Me
	- Projects
	- Achievements
	- Skills
	- Resume
	- Contact
- Data-driven projects grid powered by a shared project source.
- Interactive skills terminal with selectable files and rendered skill metadata.
- Contact form with client-side state handling and analytics event tracking.
- Resume view/download actions with analytics events.
- Vercel Analytics + Speed Insights integration.

## Tech Stack

- React 19
- Vite 8
- Framer Motion
- React Icons
- Vercel Analytics
- Vercel Speed Insights
- ESLint 9

## Project Structure

```text
.
|- public/
|- src/
|  |- assets/
|  |- components/
|  |  |- ActivityBar.jsx
|  |  |- ContactForm.jsx
|  |  |- Footer.jsx
|  |  |- ProjectCard.jsx
|  |  |- SkillTerminal.jsx
|  |  |- TabNav.jsx
|  |  |- TopBar.jsx
|  |- data/
|  |  |- projects.js
|  |- sections/
|  |  |- AboutMe.jsx
|  |  |- Achievements.jsx
|  |  |- Contact.jsx
|  |  |- Experience.jsx
|  |  |- Hello.jsx
|  |  |- Projects.jsx
|  |  |- Resume.jsx
|  |  |- Skills.jsx
|  |- animation.js
|  |- App.css
|  |- App.jsx
|  |- index.css
|  |- main.jsx
|- eslint.config.js
|- index.html
|- package.json
|- vite.config.js
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Customization Notes

- Update project cards in `src/data/projects.js`.
- Update section-specific content in `src/sections/*.jsx`.
- Update color system, layout, and terminal styling in `src/index.css` and `src/App.css`.
- Update resume PDF in `public/resume.pdf`.

## Analytics Events

The app tracks key interactions with Vercel Analytics:

- `project_open_click`
- `resume_view_click`
- `resume_download_click`
- `contact_form_submit`

## Scripts

- `npm run dev` - Start Vite dev server.
- `npm run build` - Create production bundle.
- `npm run preview` - Serve production build locally.
- `npm run lint` - Run ESLint.

## License

This project is for personal portfolio use.
