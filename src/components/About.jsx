import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { Graph, Bolt, Brain } from './icons';
import { stack } from '../data';
import { trackSpotlight, useInView } from '../hooks';

const tone = {
  k: 'text-violet-400', // keyword
  p: 'text-sky-300', // property
  s: 'text-emerald-300', // string
  f: 'text-amber-300', // function
  x: 'text-slate-500', // punctuation
  v: 'text-slate-200', // identifier
};

const list = (items) =>
  items.flatMap((item, i) => [['s', `"${item}"`], ...(i < items.length - 1 ? [['x', ', ']] : [])]);

// Each line is a list of [tone, text] segments.
const codeLines = [
  [['k', 'const '], ['v', 'agent'], ['x', ' = {']],
  [['p', '  name'], ['x', ': '], ['s', '"Amal Binu"'], ['x', ',']],
  [['p', '  role'], ['x', ': '], ['s', '"Agentic AI Engineer"'], ['x', ',']],
  [['p', '  stack'], ['x', ': ['], ...list(stack), ['x', '],']],
  [['p', '  focus'], ['x', ': ['], ...list(['multi-agent', 'tool calling', 'RAG']), ['x', '],']],
  [['p', '  location'], ['x', ': '], ['s', '"India"'], ['x', ',']],
  [['p', '  status'], ['x', ': '], ['s', '"open to opportunities"'], ['x', ',']],
  [['x', '};']],
  [],
  [['v', 'agent'], ['x', '.'], ['f', 'run'], ['x', '('], ['s', '"build something great"'], ['x', ');']],
];

const focusAreas = [
  { label: 'Autonomous agents', icon: Brain },
  { label: 'Multi-agent systems', icon: Graph },
  { label: 'Tool-using LLMs', icon: Bolt },
];

function ProfileCard() {
  const [ref, inView] = useInView({ once: true, threshold: 0.3 });

  return (
    <div
      ref={ref}
      onMouseMove={trackSpotlight}
      className="spotlight relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 shadow-2xl shadow-slate-900/20 [--spot-color:rgba(139,92,246,0.18)]"
    >
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
          </div>
          <span className="rounded-md bg-white/5 px-2.5 py-1 font-mono text-xs text-slate-400">agent.config.js</span>
        </div>
        <span className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          synced
        </span>
      </div>
      <pre className="overflow-x-auto px-5 py-6 font-mono text-[12px] leading-7 sm:text-[13px]">
        <code>
          {codeLines.map((segments, i) => (
            <span
              key={i}
              className={`block ${inView ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <span className="mr-5 inline-block w-4 select-none text-right text-slate-600">{i + 1}</span>
              {segments.map(([t, text], j) => (
                <span key={j} className={tone[t]}>
                  {text}
                </span>
              ))}
              {i === codeLines.length - 1 && (
                <span className="ml-1 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-violet-400" />
              )}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="border-y border-slate-200/60 bg-slate-50 px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <SectionHeading
            index="02"
            label="About Me"
            title={<><span className="text-primary">I build</span> AI agents that reason, plan & act.</>}
          />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            I’m a passionate Agentic AI engineer dedicated to building autonomous systems that can reason, plan, and take action on their own.
            I design LLM-powered agents that use tools, work through multi-step tasks, and collaborate with other agents to solve real problems. I believe great AI is not just about models, it’s about building reliable agents that deliver meaningful results.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {focusAreas.map((area) => {
              const Icon = area.icon;
              return (
                <li
                  key={area.label}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
                >
                  <Icon className="h-4 w-4 text-primary" />
                  {area.label}
                </li>
              );
            })}
          </ul>
        </Reveal>
        <Reveal delay={150}>
          <ProfileCard />
        </Reveal>
      </div>
    </section>
  );
}
