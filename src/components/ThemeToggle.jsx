import { useId } from 'react';
import { toggleTheme, useTheme } from '../theme';

const RAYS = [0, 45, 90, 135, 180, 225, 270, 315];
const EASE = 'ease-[cubic-bezier(0.65,0,0.35,1)]';

// Sun that morphs into a crescent moon: the rays retract, the core grows,
// and a masking circle slides in to carve out the crescent.
export default function ThemeToggle({ className = '' }) {
  const dark = useTheme() === 'dark';
  const maskId = `moon-mask-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;

  const handleClick = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    toggleTheme({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={dark ? 'Light mode' : 'Dark mode'}
      className={`group grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-ink transition-all duration-300 hover:border-ink/30 active:scale-90 ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={`h-[18px] w-[18px] transition-transform duration-700 ${EASE} ${dark ? '-rotate-[30deg]' : 'rotate-0 group-hover:rotate-45'}`}
      >
        <mask id={maskId}>
          <rect width="24" height="24" fill="white" />
          <circle
            cx="26"
            cy="-2"
            r="6.5"
            fill="black"
            className={`transition-transform duration-700 ${EASE} ${dark ? '-translate-x-[9px] translate-y-[9px]' : ''}`}
          />
        </mask>
        <g mask={`url(#${maskId})`}>
          <circle
            cx="12"
            cy="12"
            r="5"
            fill="currentColor"
            className={`origin-center transition-transform duration-700 [transform-box:fill-box] ${EASE} ${dark ? 'scale-[1.6]' : 'scale-100'}`}
          />
        </g>
        <g
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className={`origin-center transition-all duration-500 ${EASE} ${dark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}
        >
          {RAYS.map((angle) => (
            <line key={angle} x1="12" y1="2.5" x2="12" y2="4.5" transform={`rotate(${angle} 12 12)`} />
          ))}
        </g>
      </svg>
    </button>
  );
}
