import { Fragment } from 'react';
import { useInView } from '../hooks';

// Groups text parts into words. A part is a string, { text, em: true } for the serif accent,
// or { text, className }. Punctuation stays glued to its word so lines never break before it.
function toWords(parts, emClassName) {
  const words = [];
  let current = null;
  parts.forEach((part) => {
    const text = typeof part === 'string' ? part : part.text;
    const className = typeof part === 'string' ? '' : part.em ? emClassName : part.className ?? '';
    text.split(/(\s+)/).forEach((token) => {
      if (!token) return;
      if (/^\s+$/.test(token)) {
        current = null;
        return;
      }
      if (!current) {
        current = [];
        words.push(current);
      }
      current.push({ text: token, className });
    });
  });
  return words;
}

// Heading whose words rise into place one after another the first time it scrolls into view.
export default function RevealHeading({
  as = 'h2',
  parts,
  className = '',
  emClassName = 'font-serif font-normal italic',
  delay = 0,
}) {
  const Tag = as;
  const [ref, inView] = useInView({ once: true, threshold: 0.3 });
  const words = toWords(parts, emClassName);

  return (
    <Tag ref={ref} className={`${inView ? 'is-visible' : ''} ${className}`} style={{ '--delay': `${delay}ms` }}>
      {words.map((segments, i) => (
        <Fragment key={i}>
          {i > 0 && ' '}
          <span className="split-mask">
            <span className="split-word" style={{ '--i': i }}>
              {segments.map((segment, j) => (
                <span key={j} className={segment.className || undefined}>
                  {segment.text}
                </span>
              ))}
            </span>
          </span>
        </Fragment>
      ))}
    </Tag>
  );
}
