import AgentConsole from './AgentConsole';
import LocalTime from './LocalTime';
import RevealHeading from './RevealHeading';
import ScrambleText from './ScrambleText';
import { ArrowDown, ArrowRight } from './icons';

const headline = [
  'I build AI agents that ',
  { text: 'reason', em: true },
  ' and ',
  { text: 'act', em: true },
  { text: '.', className: 'text-accent' },
];

export default function Hero() {
  return (
    <section id="home" className="px-6 pb-20 pt-32 lg:px-8 lg:pb-24 lg:pt-44">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <p className="animate-fade-up font-mono text-xs uppercase tracking-[0.16em] text-muted">
            <ScrambleText text="Agentic AI Engineer" />
          </p>

          <RevealHeading
            as="h1"
            parts={headline}
            delay={150}
            emClassName="font-serif text-[1.12em] font-normal italic tracking-[-0.01em]"
            className="mt-6 text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-[4.25rem]"
          />

          <p className="mt-7 max-w-lg animate-fade-up text-lg leading-relaxed text-muted [animation-delay:550ms]">
            I'm Amal. I design LLM-powered agents with LangChain, LangGraph and OpenAI that plan multi-step work, call tools, and keep going until the job is done.
          </p>

          <div className="mt-10 flex animate-fade-up flex-wrap items-center gap-x-7 gap-y-4 [animation-delay:700ms]">
            <a
              href="#work"
              className="group inline-flex h-11 items-center gap-2 rounded-full bg-ink px-6 text-sm font-medium text-paper transition-transform duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
            >
              View my work
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
            <a href="#contact" className="group inline-flex items-center gap-2 text-sm font-medium text-ink">
              <span className="link-u">Get in touch</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          <p className="mt-12 flex animate-fade-up flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-muted [animation-delay:850ms]">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Open to roles &amp; projects
            </span>
            <span aria-hidden="true">·</span>
            <span>
              Local time <LocalTime />
            </span>
          </p>
        </div>

        <div className="animate-fade-up [animation-delay:400ms]">
          <AgentConsole />
        </div>
      </div>
    </section>
  );
}
