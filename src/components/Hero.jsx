import AgentConsole from './AgentConsole';
import LocalTime from './LocalTime';
import ScrambleText from './ScrambleText';
import { ArrowRight } from './icons';

export default function Hero() {
  return (
    <section id="home" className="px-6 pb-20 pt-32 lg:px-8 lg:pb-24 lg:pt-44">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <p className="animate-fade-up font-mono text-xs uppercase tracking-[0.16em] text-muted">
            <ScrambleText text="Agentic AI Engineer — India" />
          </p>

          <h1 className="mt-6 animate-fade-up text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.035em] [animation-delay:120ms] sm:text-6xl lg:text-[4.25rem]">
            I build AI agents that{' '}
            <em className="font-serif text-[1.12em] font-normal italic tracking-[-0.01em]">reason</em> and{' '}
            <em className="font-serif text-[1.12em] font-normal italic tracking-[-0.01em]">act</em>
            <span className="text-accent">.</span>
          </h1>

          <p className="mt-7 max-w-lg animate-fade-up text-lg leading-relaxed text-muted [animation-delay:240ms]">
            I'm Amal. I design LLM-powered agents with LangChain, LangGraph and OpenAI that plan multi-step work, call tools, and keep going until the job is done.
          </p>

          <div className="mt-10 flex animate-fade-up flex-wrap items-center gap-x-7 gap-y-4 [animation-delay:360ms]">
            <a
              href="#work"
              className="inline-flex h-11 items-center rounded-full bg-ink px-6 text-sm font-medium text-paper transition-opacity hover:opacity-85"
            >
              View my work
            </a>
            <a href="#contact" className="group inline-flex items-center gap-2 text-sm font-medium text-ink">
              <span className="underline decoration-line underline-offset-[6px] transition-colors group-hover:decoration-ink">Get in touch</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>

          <p className="mt-12 flex animate-fade-up flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-muted [animation-delay:480ms]">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Open to roles &amp; projects
            </span>
            <span aria-hidden="true">·</span>
            <span>
              India, <LocalTime />
            </span>
          </p>
        </div>

        <div className="animate-fade-up [animation-delay:300ms]">
          <AgentConsole />
        </div>
      </div>
    </section>
  );
}
