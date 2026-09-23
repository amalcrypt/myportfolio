import { useInView } from '../hooks';

// Fades and lifts its children into place the first time they scroll into view.
export default function Reveal({ as = 'div', delay = 0, className = '', style, children, ...props }) {
  const Tag = as;
  const [ref, inView] = useInView({ once: true, threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
      style={{ ...style, '--reveal-delay': `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  );
}
