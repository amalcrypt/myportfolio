const Icon = ({ className = 'h-5 w-5', children, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
    {...props}
  >
    {children}
  </svg>
);

// Robot agent: the site's brand mark (matches favicon.svg). Eyes blink on a loop.
export const AgentBot = ({ antennaClassName = 'fill-current', ...props }) => (
  <Icon {...props}>
    <path d="M12 5.5V3.9" />
    <circle cx="12" cy="2.6" r="1.4" stroke="none" className={antennaClassName} />
    <rect x="4" y="5.5" width="16" height="13.5" rx="4.5" />
    <path d="M4 10.5H3a1 1 0 0 0-1 1V14a1 1 0 0 0 1 1h1M20 10.5h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1h-1" />
    <rect x="8" y="9.8" width="2.4" height="3.8" rx="1.2" fill="currentColor" stroke="none" className="origin-center animate-blink-eyes [transform-box:fill-box]" />
    <rect x="13.6" y="9.8" width="2.4" height="3.8" rx="1.2" fill="currentColor" stroke="none" className="origin-center animate-blink-eyes [transform-box:fill-box]" />
    <path d="M10 16.1c1.2.8 2.8.8 4 0" />
  </Icon>
);

export const ArrowRight = (props) => (
  <Icon {...props}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Icon>
);

export const ArrowUpRight = (props) => (
  <Icon {...props}>
    <path d="M7 17 17 7M8 7h9v9" />
  </Icon>
);

export const ArrowDown = (props) => (
  <Icon {...props}>
    <path d="M12 5v14M6 13l6 6 6-6" />
  </Icon>
);

export const Copy = (props) => (
  <Icon {...props}>
    <rect x="9" y="9" width="11" height="11" rx="2" />
    <path d="M5 15V6a2 2 0 0 1 2-2h8" />
  </Icon>
);

export const Check = (props) => (
  <Icon {...props}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </Icon>
);

export const Menu = (props) => (
  <Icon {...props}>
    <path d="M4 8h16M4 16h16" />
  </Icon>
);

export const Close = (props) => (
  <Icon {...props}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Icon>
);
