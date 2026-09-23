import { useEffect, useState } from 'react';
import AgentConsole from './AgentConsole';
import { ArrowRight, Brain, Check } from './icons';
import { stack } from '../data';
import { prefersReducedMotion } from '../hooks';

const verbs = ['reason.', 'plan.', 'use tools.', 'take action.', 'collaborate.'];

// Types a verb, holds it, deletes it, then moves to the next one.
function TypedVerb() {
  const [reduced] = useState(prefersReducedMotion);
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(() => (reduced ? verbs[0].length : 0));
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduced) return;
    const word = verbs[index];
    let timeout;
    if (!deleting && length < word.length) {
      timeout = setTimeout(() => setLength((value) => value + 1), 70);
    } else if (!deleting) {
      timeout = setTimeout(() => setDeleting(true), 1600);
    } else if (length > 0) {
      timeout = setTimeout(() => setLength((value) => value - 1), 35);
    } else {
      timeout = setTimeout(() => {
        setDeleting(false);
        setIndex((value) => (value + 1) % verbs.length);
      }, 250);
    }
    return () => clearTimeout(timeout);
  }, [reduced, index, length, deleting]);

  return (
    <span className="text-primary">
      {verbs[index].slice(0, length)}
      <span className="ml-1 inline-block h-[0.9em] w-[3px] translate-y-[0.12em] animate-blink rounded-full bg-primary" />
    </span>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden px-6 pb-20 pt-32 lg:px-8 lg:pb-28 lg:pt-40">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black_30%,transparent_100%)]" />
        <div className="absolute -top-32 left-[5%] h-96 w-96 animate-drift rounded-full bg-violet-400/25 blur-3xl" />
        <div className="absolute right-[0%] top-24 h-[28rem] w-[28rem] animate-drift-slow rounded-full bg-indigo-300/25 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 animate-drift rounded-full bg-fuchsia-300/20 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="text-center lg:text-left">
          <div className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/80 px-3.5 py-1.5 font-mono text-xs font-medium text-emerald-700 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for agentic AI projects
          </div>

          <p className="mt-7 animate-fade-up text-lg font-medium text-slate-500 [animation-delay:100ms]">Hey, I'm Amal 👋</p>

          <h1 className="mt-3 animate-fade-up text-5xl font-bold leading-[0.95] tracking-tight text-slate-950 [animation-delay:200ms] sm:text-6xl lg:text-7xl xl:text-8xl">
            <span className="animate-gradient-x bg-gradient-to-r from-primary via-fuchsia-500 to-indigo-500 bg-[length:200%_auto] bg-clip-text text-transparent">
              Agentic
            </span>{' '}
            AI
            <br />
            Engineer
          </h1>

          <p className="mt-7 min-h-[2.25rem] animate-fade-up text-xl font-semibold text-slate-800 [animation-delay:300ms] sm:text-2xl">
            <span className="sr-only">I build agents that reason, plan, use tools, and take action.</span>
            <span aria-hidden="true">
              I build agents that <TypedVerb />
            </span>
          </p>

          <p className="mx-auto mt-5 max-w-xl animate-fade-up text-lg leading-relaxed text-slate-600 [animation-delay:400ms] lg:mx-0">
            I'm an Agentic AI Engineer focused on building autonomous, LLM-powered agents that reason, use tools, and orchestrate complex multi-step workflows.
          </p>

          <div className="mt-10 flex animate-fade-up flex-col items-center justify-center gap-4 [animation-delay:500ms] sm:flex-row lg:justify-start">
            <a
              href="#contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-slate-950/20 transition hover:bg-slate-800 sm:w-auto"
            >
              Get In Touch
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-200 bg-white/80 px-8 py-4 text-sm font-semibold text-slate-900 backdrop-blur transition hover:border-slate-300 hover:bg-white sm:w-auto"
            >
              Browse Projects
            </a>
          </div>

          <div className="mt-10 flex animate-fade-up flex-wrap items-center justify-center gap-2 font-mono text-xs text-slate-500 [animation-delay:600ms] lg:justify-start">
            <span className="mr-1">stack →</span>
            {stack.map((item) => (
              <span key={item} className="rounded-lg border border-slate-200 bg-white/70 px-2.5 py-1 text-slate-700 backdrop-blur">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg animate-fade-up [animation-delay:300ms] lg:max-w-none">
          <AgentConsole />

          <div className="absolute -bottom-12 -left-8 hidden animate-float items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-3 shadow-xl shadow-slate-900/10 backdrop-blur sm:flex">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-violet-100 text-primary">
              <Brain className="h-5 w-5" />
            </span>
            <span className="text-left">
              <span className="block text-sm font-semibold text-slate-900">Stateful memory</span>
              <span className="block font-mono text-[11px] text-slate-500">langgraph checkpoint</span>
            </span>
          </div>

          <div className="absolute -right-6 -top-12 hidden animate-float-delayed items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-3 shadow-xl shadow-slate-900/10 backdrop-blur sm:flex">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-100 text-emerald-600">
              <Check className="h-5 w-5" />
            </span>
            <span className="text-left">
              <span className="block text-sm font-semibold text-slate-900">Tool call succeeded</span>
              <span className="block font-mono text-[11px] text-slate-500">function_calling · 212ms</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
