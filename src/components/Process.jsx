import Reveal from './Reveal';
import RevealHeading from './RevealHeading';
import SectionHeader from './SectionHeader';
import { processSteps } from '../data';

export default function Process() {
  return (
    <section id="process" className="px-6 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader index="02" label="Process" note="How I build agents" />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <RevealHeading
            parts={['From goal to action, ', { text: 'autonomously', em: true }, '.']}
            className="max-w-2xl text-4xl sm:text-5xl lg:text-6xl lg:tracking-[-0.035em]"
          />
          <Reveal as="p" delay={200} className="max-w-md text-lg leading-relaxed text-muted">
            Every agent I build runs on a tight loop: understand the goal, plan, act with tools, and reflect until the job is done.
          </Reveal>
        </div>

        {/* Cells keep their borders static; only the content inside each one animates in */}
        <ol className="mt-16 grid overflow-hidden rounded-lg border-l border-t border-line md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <li key={step.title} className="group border-b border-r border-line transition-colors duration-500 hover:bg-surface">
              <Reveal delay={i * 110} className="flex h-full flex-col p-7">
                <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-10 text-xl transition-transform duration-500 ease-out group-hover:translate-x-1">{step.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{step.description}</p>
                <code className="mt-auto pt-8 font-mono text-xs text-muted transition-colors duration-300 group-hover:text-accent">{step.code}</code>
              </Reveal>
            </li>
          ))}
        </ol>
        <Reveal as="p" delay={300} className="mt-5 font-mono text-xs text-muted">
          ↻ Reflect feeds back into Plan until the goal is met.
        </Reveal>
      </div>
    </section>
  );
}
