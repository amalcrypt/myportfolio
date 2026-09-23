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

// Three connected nodes: the site's agent mark (matches favicon.svg)
export const AgentMark = (props) => (
  <Icon {...props}>
    <path d="M7 8h10M7 8l5 9M17 8l-5 9" />
    <circle cx="7" cy="8" r="2.5" fill="currentColor" />
    <circle cx="17" cy="8" r="2.5" fill="currentColor" />
    <circle cx="12" cy="17" r="2.8" fill="currentColor" />
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

export const ArrowUp = (props) => (
  <Icon {...props}>
    <path d="M12 19V5M6 11l6-6 6 6" />
  </Icon>
);

export const ChevronDown = (props) => (
  <Icon {...props}>
    <path d="m6 9 6 6 6-6" />
  </Icon>
);

export const Download = (props) => (
  <Icon {...props}>
    <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
  </Icon>
);

export const Mail = (props) => (
  <Icon {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m4 7 8 6 8-6" />
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

export const Send = (props) => (
  <Icon {...props}>
    <path d="M21 3 10 14M21 3l-7 18-4-7-7-4 18-7Z" />
  </Icon>
);

export const Menu = (props) => (
  <Icon {...props}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Icon>
);

export const Close = (props) => (
  <Icon {...props}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Icon>
);

export const Target = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="12" cy="12" r="0.8" fill="currentColor" />
  </Icon>
);

export const Plan = (props) => (
  <Icon {...props}>
    <rect x="3" y="4" width="6" height="5" rx="1.5" />
    <rect x="15" y="4" width="6" height="5" rx="1.5" />
    <rect x="9" y="15" width="6" height="5" rx="1.5" />
    <path d="M6 9v2.5h12V9M12 11.5V15" />
  </Icon>
);

export const Bolt = (props) => (
  <Icon {...props}>
    <path d="M13 3 5 13.5h6L10 21l8-10.5h-6L13 3Z" />
  </Icon>
);

export const Loop = (props) => (
  <Icon {...props}>
    <path d="M20 11a8 8 0 0 0-14.3-4.9L4 8" />
    <path d="M4 4v4h4" />
    <path d="M4 13a8 8 0 0 0 14.3 4.9L20 16" />
    <path d="M20 20v-4h-4" />
  </Icon>
);

export const Link = (props) => (
  <Icon {...props}>
    <path d="M10 14a4.5 4.5 0 0 0 6.4 0l3-3a4.5 4.5 0 0 0-6.4-6.4l-1 1" />
    <path d="M14 10a4.5 4.5 0 0 0-6.4 0l-3 3a4.5 4.5 0 0 0 6.4 6.4l1-1" />
  </Icon>
);

export const Graph = (props) => (
  <Icon {...props}>
    <circle cx="5" cy="6" r="2.2" />
    <circle cx="19" cy="6" r="2.2" />
    <circle cx="12" cy="18" r="2.2" />
    <path d="M7.2 6h9.6M6.2 7.9l4.7 8.2M17.8 7.9l-4.7 8.2" />
  </Icon>
);

export const Sparkle = (props) => (
  <Icon {...props}>
    <path d="M12 3c.5 4.5 2.5 6.5 7 7-4.5.5-6.5 2.5-7 7-.5-4.5-2.5-6.5-7-7 4.5-.5 6.5-2.5 7-7Z" />
    <path d="M19 16c.2 1.6.9 2.3 2.5 2.5-1.6.2-2.3.9-2.5 2.5-.2-1.6-.9-2.3-2.5-2.5 1.6-.2 2.3-.9 2.5-2.5Z" />
  </Icon>
);

export const Brain = (props) => (
  <Icon {...props}>
    <path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3 3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Z" />
    <path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-3 3 3 3 0 0 1-3-3" />
  </Icon>
);
