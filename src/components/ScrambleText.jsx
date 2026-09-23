import { useEffect, useState } from 'react';
import { prefersReducedMotion, useInView } from '../hooks';

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*+=<>/';
const randomGlyph = () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)];

// "Decodes" text from random glyphs, left to right, the first time it scrolls into view.
export default function ScrambleText({ text, className = '' }) {
  const [ref, inView] = useInView({ once: true, threshold: 0.6 });
  const [output, setOutput] = useState(text);

  useEffect(() => {
    if (!inView || prefersReducedMotion()) return;
    let frame = 0;
    const id = setInterval(() => {
      frame += 1;
      const revealed = frame - 6; // a few frames of pure noise before letters lock in
      setOutput(
        text
          .split('')
          .map((char, i) => (char === ' ' || i < revealed ? char : randomGlyph()))
          .join(''),
      );
      if (revealed >= text.length) clearInterval(id);
    }, 40);
    return () => clearInterval(id);
  }, [inView, text]);

  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{output}</span>
    </span>
  );
}
