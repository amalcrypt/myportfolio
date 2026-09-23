# Amal Binu — Agentic AI Engineer Portfolio

A single-page, responsive portfolio built with React, Vite, and Tailwind CSS.

## Sections

- **Home** — intro and call-to-action buttons
- **Projects** — live previews of deployed projects, with a "View All" toggle
- **About** — bio and core agentic stack
- **Skills** — LangChain, LangGraph, and OpenAI
- **Contact** — resume download, email, LinkedIn, and GitHub

## Project Structure

```
src/
├── assets/          # Portrait, project screenshots, resume PDF
├── App.jsx          # All page sections and project data
├── index.css        # Global styles and Tailwind directives
└── main.jsx         # Entry point
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

- **Projects** — edit the `allProjects` array in `src/App.jsx`. Each entry takes a `title`, `subtitle`, `features`, `accent` gradient, and `link`. Add an `image` to show a screenshot instead of a live iframe preview, or set `isComingSoon: true` for a placeholder card.
- **Skills** — edit the `categories` array in the `Skills` component and the stack list in the `About` component.
- **Resume** — replace the PDF in `src/assets/` and update its import at the top of `src/App.jsx`.
- **Theme color** — change `primary` in `tailwind.config.js`.

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 3
