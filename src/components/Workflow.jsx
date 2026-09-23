import { useEffect, useState } from 'react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { Loop } from './icons';
import { workflowSteps } from '../data';
import { prefersReducedMotion, useInView } from '../hooks';

export default function Workflow() {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const [active, setActive] = useState(0);

  // Walk through the loop like a running agent, only while the section is visible
  useEffect(() => {
    if (!inView || prefersReducedMotion()) return;
    const id = setInterval(() => setActive((value) => (value + 1) % workflowSteps.length), 2200);
    return () => clearInterval(id);
  }, [inView]);

  return (
    <section id="workflow" className="bg-white px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            index="03"
            label="Agent Workflow"
            align="center"
            title={<>From goal to action, <span className="text-primary">autonomously</span>.</>}
          >
            Every agent I build runs on a tight loop: understand the goal, plan, act with tools, and reflect until the job is done.
          </SectionHeading>
        </Reveal>

        <div ref={ref} className="relative mt-16">
          {/* animated connectors: horizontal on large screens, vertical when stacked */}
          <div aria-hidden="true" className="flow-line absolute left-[12.5%] right-[12.5%] top-[calc(3rem-1px)] hidden h-0.5 lg:block" />
          <div aria-hidden="true" className="flow-line-vertical absolute bottom-10 left-[calc(3rem-1px)] top-10 w-0.5 md:hidden" />

          <ol className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {workflowSteps.map((step, i) => {
              const isActive = i === active;
              const Icon = step.icon;
              return (
                <Reveal as="li" key={step.title} delay={i * 120} onMouseEnter={() => setActive(i)}>
                  <div
                    className={`relative h-full rounded-3xl border bg-white p-6 transition-all duration-500 ${
                      isActive ? '-translate-y-1 border-primary/40 shadow-xl shadow-primary/10' : 'border-slate-200 shadow-sm'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`relative grid h-12 w-12 place-items-center rounded-2xl transition-colors duration-500 ${
                          isActive ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        {isActive && <span className="absolute inset-0 animate-ping-slow rounded-2xl bg-primary/30" />}
                        <Icon className="relative h-5 w-5" />
                      </span>
                      <span className="font-mono text-xs text-slate-400">0{i + 1}</span>
                    </div>
                    <h3 className="mt-6 text-lg font-bold text-slate-950">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
                    <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 font-mono text-[11px]">
                      <span className={isActive ? 'text-primary' : 'text-slate-400'}>{step.code}</span>
                      <span className={`transition-colors duration-500 ${isActive ? 'text-emerald-500' : 'text-slate-300'}`}>
                        {isActive ? '● running' : '○ idle'}
                      </span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>

        <Reveal delay={200} className="mt-10 flex justify-center">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-violet-200 bg-violet-50 px-5 py-2.5 font-mono text-xs font-medium text-violet-700">
            <Loop className="h-4 w-4 animate-spin-slow" />
            loop until the goal is met
          </span>
        </Reveal>
      </div>
    </section>
  );
}
