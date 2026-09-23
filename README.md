# Amal Binu — Agentic AI Engineer Portfolio

A single-page, responsive portfolio built with React, Vite, and Tailwind CSS.

## Sections

- **Home** — headline, intro, and a terminal-style console that plays a scripted agent run (graph + trace)
- **Work** — project screenshots linking to the live sites
- **Process** — the understand → plan → act → reflect agent loop
- **About** — bio and a short facts list with the resume download
- **Skills** — LangChain, LangGraph, and OpenAI
- **Contact** — email (with copy), resume, LinkedIn, and GitHub

Also on every page:

- **Dark mode** — sun/moon toggle in the navbar. The new theme is revealed in a circle growing from the button (View Transitions API, instant fallback elsewhere). The choice is saved, follows the OS setting until then, and an inline script in `index.html` applies it before first paint so there is no flash.

Motion is calm and consistent (one shared easing curve):

- **Smooth scrolling** via [Lenis](https://github.com/darkroomengineering/lenis) for wheel/trackpad, including `#` links; touch keeps native scrolling.
- **Headings** rise in word by word (`RevealHeading`), section rules draw in from the left, project screenshots open like a curtain, and lists arrive one item at a time.
- **Links** draw their underline on hover; the navbar tucks away on scroll down and returns on scroll up.

Everything is CSS transitions driven by an IntersectionObserver, the console pauses off screen, and all motion is switched off for visitors who prefer reduced motion.

## Design

- **Type** — Geist for text, Instrument Serif italic for emphasis, Geist Mono for labels (Google Fonts).
- **Color** — design tokens in `src/index.css` (`--paper`, `--surface`, `--ink`, `--muted`, `--line`, `--accent`), exposed to Tailwind as `bg-paper`, `text-ink`, `border-line`, and so on. Dark mode only swaps the variables. Change `--accent` to rebrand.

## Project Structure

```
src/
├── assets/                # Project screenshots (WebP) and resume PDF
├── components/            # One file per page section, plus shared pieces
│   ├── AgentConsole.jsx   # Hero agent-run animation
│   ├── ThemeToggle.jsx    # Animated sun/moon toggle
│   ├── SectionHeader.jsx  # Numbered rule at the top of each section
│   ├── RevealHeading.jsx  # Word-by-word heading reveal
│   ├── Reveal.jsx         # Scroll-triggered entrance wrapper
│   └── icons.jsx          # Inline SVG icons
├── data.js                # All site content: projects, process, skills, facts, agent run
├── theme.js               # Theme state, persistence, and circle-reveal transition
├── hooks.js               # useInView and the reduced-motion check
├── App.jsx                # Page layout
├── index.css              # Design tokens and global styles
└── main.jsx               # Entry point
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

- **Content** — everything lives in `src/data.js`: `projects`, `processSteps`, `skills`, `facts`, `stack`, `contact`, and the scripted hero `agentRun`.
- **Projects** — each entry takes a `title`, `subtitle`, `features`, `link`, and an `image` (a 900×600 screenshot works best).
- **Resume** — replace the PDF in `src/assets/` and update its imports in `About.jsx` and `Contact.jsx`.

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 3
