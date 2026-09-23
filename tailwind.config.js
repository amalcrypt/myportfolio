import defaultTheme from 'tailwindcss/defaultTheme';

// Colors come from CSS variables in index.css, so dark mode only swaps the variables.
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: token('paper'),
        surface: token('surface'),
        ink: token('ink'),
        muted: token('muted'),
        line: token('line'),
        accent: token('accent'),
      },
      fontFamily: {
        sans: ['Geist', ...defaultTheme.fontFamily.sans],
        serif: ['"Instrument Serif"', ...defaultTheme.fontFamily.serif],
        mono: ['"Geist Mono"', ...defaultTheme.fontFamily.mono],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'palette-in': {
          from: { opacity: '0', transform: 'translateY(-8px) scale(0.98)' },
          to: { opacity: '1', transform: 'none' },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '50.01%, 100%': { opacity: '0' },
        },
        'blink-eyes': {
          '0%, 92%, 100%': { transform: 'scaleY(1)' },
          '95%': { transform: 'scaleY(0.1)' },
        },
        dash: {
          to: { strokeDashoffset: '-16' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fade-in 0.2s ease-out both',
        'palette-in': 'palette-in 0.22s cubic-bezier(0.16, 1, 0.3, 1) both',
        blink: 'blink 1s step-end infinite',
        'blink-eyes': 'blink-eyes 5s ease-in-out infinite',
        dash: 'dash 1s linear infinite',
      },
    },
  },
  plugins: [],
}
