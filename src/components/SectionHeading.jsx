export default function SectionHeading({ index, label, title, align = 'left', dark = false, children }) {
  const centered = align === 'center';

  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-xl'}>
      <p className={`flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.3em] text-primary ${centered ? 'justify-center' : ''}`}>
        <span className={dark ? 'text-slate-500' : 'text-slate-400'}>{index}</span>
        <span className="h-px w-8 bg-primary/40" />
        {label}
      </p>
      <h2 className={`mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl ${dark ? 'text-white' : 'text-slate-950'}`}>
        {title}
      </h2>
      {children && (
        <p className={`mt-5 text-lg leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>{children}</p>
      )}
    </div>
  );
}
