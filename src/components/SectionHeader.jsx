// Thin rule with a numbered label, used at the top of every section.
export default function SectionHeader({ index, label, note }) {
  return (
    <div className="flex items-center justify-between gap-6 border-t border-line pt-5 font-mono text-xs uppercase tracking-[0.16em] text-muted">
      <span>
        <span className="text-ink">{index}</span> / {label}
      </span>
      {note && <span className="hidden normal-case tracking-normal sm:inline">{note}</span>}
    </div>
  );
}
