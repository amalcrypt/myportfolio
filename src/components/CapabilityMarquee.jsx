import { capabilities } from '../data';

// Endless ticker of capabilities; the list is doubled so the loop is seamless.
export default function CapabilityMarquee() {
  const items = [...capabilities, ...capabilities];

  return (
    <div className="relative overflow-hidden border-y border-slate-200/70 bg-white py-5 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <p className="sr-only">Capabilities: {capabilities.join(', ')}</p>
      <ul aria-hidden="true" className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-3 whitespace-nowrap pr-12 font-mono text-sm text-slate-500">
            <span className="text-[10px] text-primary">◆</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
