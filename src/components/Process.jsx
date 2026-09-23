import Reveal from './Reveal';
import SectionHeader from './SectionHeader';
import { processSteps } from '../data';

export default function Process() {
  return (
    <section id="process" className="px-6 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader index="02" label="Process" note="How I build agents" />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <Reveal as="h2" className="max-w-2xl text-4xl sm:text-5xl lg:text-6xl lg:tracking-[-0.035em]">
            From goal to action, <em className="font-serif font-normal italic">autonomously</em>.
          </Reveal>
          <Reveal as="p" delay={80} className="max-w-md text-lg leading-relaxed text-muted">
            Every agent I build runs on a tight loop: understand the goal, plan, act with tools, and reflect until the job is done.
          </Reveal>
        </div>

        <Reveal as="ol" delay={120} className="mt-16 grid overflow-hidden rounded-lg border border-line bg-line md:grid-cols-2 lg:grid-cols-4 [&>li]:bg-paper gap-px">
          {processSteps.map((step, i) => (
            <li key={step.title} className="group flex flex-col p-7 transition-colors duration-300 hover:!bg-surface">
              <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-10 text-xl">{step.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{step.description}</p>
              <code className="mt-auto pt-8 font-mono text-xs text-muted transition-colors group-hover:text-accent">{step.code}</code>
            </li>
          ))}
        </Reveal>
        <p className="mt-5 font-mono text-xs text-muted">↻ Reflect feeds back into Plan until the goal is met.</p>
      </div>
    </section>
  );
}
