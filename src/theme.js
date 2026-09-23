import { useSyncExternalStore } from 'react';
import { flushSync } from 'react-dom';
import { prefersReducedMotion } from './hooks';

// The `dark` class on <html> is the source of truth; index.html sets it before first paint.
const STORAGE_KEY = 'theme';
const root = document.documentElement;
const listeners = new Set();

const getTheme = () => (root.classList.contains('dark') ? 'dark' : 'light');

const subscribe = (listener) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

// Browser UI color (mobile address bar), matching --paper in index.css
const THEME_COLORS = { light: '#f6f5f1', dark: '#0d0d0c' };

function applyTheme(theme) {
  root.classList.toggle('dark', theme === 'dark');
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLORS[theme]);
  listeners.forEach((listener) => listener());
}

const savedTheme = () => {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
};

// Follow the OS setting until the visitor picks a theme themselves
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
  if (!savedTheme()) applyTheme(event.matches ? 'dark' : 'light');
});

export const useTheme = () => useSyncExternalStore(subscribe, getTheme);

// Switches theme, revealing the new one in a circle that grows from `origin` ({ x, y } in px).
export function toggleTheme(origin) {
  const next = getTheme() === 'dark' ? 'light' : 'dark';
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // storage blocked (private mode); the switch still works for this visit
  }

  if (!document.startViewTransition || prefersReducedMotion()) {
    applyTheme(next);
    return;
  }

  const x = origin?.x ?? window.innerWidth / 2;
  const y = origin?.y ?? window.innerHeight / 2;
  const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

  const transition = document.startViewTransition(() => {
    flushSync(() => applyTheme(next));
  });
  transition.ready
    .then(() => {
      root.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 700, easing: 'cubic-bezier(0.65, 0, 0.35, 1)', pseudoElement: '::view-transition-new(root)' },
      );
    })
    // The browser skips the transition when it can't render it (hidden tab, rapid clicks);
    // the theme has already switched by then, so there is nothing to recover.
    .catch(() => {});
}
