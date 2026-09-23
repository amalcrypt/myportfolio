import Reveal from './Reveal';
import RevealHeading from './RevealHeading';
import SectionHeader from './SectionHeader';
import { ArrowDown } from './icons';
import { facts } from '../data';
import resumeFile from '../assets/Amal_Binu_FullStack_Developer_Resume.pdf';

export default function About() {
  return (
    <section id="about" className="px-6 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader index="03" label="About" note="Who’s building" />

        <div className="mt-10 grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <RevealHeading
              parts={['I build agents that ', { text: 'reason, plan & act', em: true }, '.']}
              className="max-w-2xl text-4xl sm:text-5xl lg:text-6xl lg:tracking-[-0.035em]"
            />
            <Reveal delay={200} className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-muted">
              <p>
                I’m a passionate Agentic AI engineer dedicated to building autonomous systems that can reason, plan, and take action on their own.
              </p>
              <p>
                I design LLM-powered agents that use tools, work through multi-step tasks, and collaborate with other agents to solve real problems. I believe great AI is not just about models, it’s about building reliable agents that deliver meaningful results.
              </p>
            </Reveal>
          </div>

          <Reveal delay={150} className="lg:pt-2">
            <dl className="stagger divide-y divide-line border-y border-line">
              {facts.map((fact, i) => (
                <div key={fact.label} style={{ '--i': i }} className="grid grid-cols-[7rem_1fr] gap-4 py-4 text-[15px]">
                  <dt className="font-mono text-xs uppercase leading-6 tracking-[0.12em] text-muted">{fact.label}</dt>
                  <dd className="text-ink">{fact.value}</dd>
                </div>
              ))}
              <div style={{ '--i': facts.length }} className="grid grid-cols-[7rem_1fr] gap-4 py-4 text-[15px]">
                <dt className="font-mono text-xs uppercase leading-6 tracking-[0.12em] text-muted">Resume</dt>
                <dd>
                  <a href={resumeFile} download="Amal_Binu_Resume.pdf" className="group inline-flex items-center gap-1.5 font-medium text-ink">
                    <span className="link-u">Download PDF</span>
                    <ArrowDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
