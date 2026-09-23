import { useInView } from '../hooks';

// Numbered label at the top of every section; its rule draws in from the left.
export default function SectionHeader({ index, label, note }) {
  const [ref, inView] = useInView({ once: true, threshold: 0.5 });

  return (
    <div
      ref={ref}
      className={`relative flex items-center justify-between gap-6 pt-5 font-mono text-xs uppercase tracking-[0.16em] text-muted ${inView ? 'is-visible' : ''}`}
    >
      <span aria-hidden="true" className="line-draw absolute inset-x-0 top-0 h-px bg-line" />
      <span className={`transition-opacity delay-300 duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}>
        <span className="text-ink">{index}</span> / {label}
      </span>
      {note && (
        <span className={`hidden normal-case tracking-normal transition-opacity delay-500 duration-700 sm:inline ${inView ? 'opacity-100' : 'opacity-0'}`}>
          {note}
        </span>
      )}
    </div>
  );
}
