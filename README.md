# Amal Binu — Agentic AI Engineer Portfolio

A single-page, responsive portfolio built with React, Vite, and Tailwind CSS.

## Sections

- **Home** — animated agent console that plays a scripted agent run (graph + trace), typed tagline
- **Projects** — screenshot cards linking to live sites, with a "View All" toggle
- **About** — bio and an animated `agent.config.js` profile card
- **Workflow** — the understand → plan → act → reflect agent loop
- **Skills** — LangChain, LangGraph, and OpenAI
- **Contact** — resume download, email (with copy), LinkedIn, and GitHub

Animations are CSS-only (no animation library), pause when off screen, and respect the visitor's reduced-motion setting.

## Project Structure

```
src/
├── assets/               # Project screenshots (WebP) and resume PDF
├── components/           # One file per page section, plus shared pieces
│   ├── AgentConsole.jsx  # Hero agent-run animation
│   ├── Reveal.jsx        # Scroll-triggered entrance wrapper
│   └── icons.jsx         # Inline SVG icons
├── data.js               # All site content: projects, skills, workflow, agent run
├── hooks.js              # useInView, reduced-motion check, card spotlight
├── App.jsx               # Page layout
├── index.css             # Global styles, reveal/spotlight effects
└── main.jsx              # Entry point
```

## Getting Started

```bash
npm install      # Install dependencies
npm run dev      # Start the dev server
npm run build    # Build for production into dist/
npm run preview  # Preview the production build
npm run lint     # Run ESLint
```

## Customization

- **Content** — everything lives in `src/data.js`: `projects`, `skills`, `stack`, `capabilities`, `workflowSteps`, `contact`, and the scripted hero `agentRun`.
- **Projects** — each entry takes a `title`, `subtitle`, `features`, `accent` gradient, `link`, and an `image` (a 900×600 screenshot works best). Set `isComingSoon: true` for a placeholder card.
- **Resume** — replace the PDF in `src/assets/` and update its import in `src/components/Contact.jsx`.
- **Theme color** — change `primary` in `tailwind.config.js`.

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 3
