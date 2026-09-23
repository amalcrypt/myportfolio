import Reveal from './Reveal';
import RevealHeading from './RevealHeading';
import SectionHeader from './SectionHeader';
import { skills } from '../data';

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader index="04" label="Skills" note="What I work with" />
        <RevealHeading
          parts={['My agentic ', { text: 'toolbox', em: true }, '.']}
          className="mt-10 max-w-3xl text-4xl sm:text-5xl lg:text-6xl lg:tracking-[-0.035em]"
        />

        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          {skills.map((skill, i) => (
            <Reveal key={skill.name} delay={i * 120} className="relative pt-6">
              <span aria-hidden="true" className="line-draw absolute inset-x-0 top-0 h-px bg-ink" />
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-2xl">{skill.name}</h3>
                <span className="font-mono text-xs uppercase tracking-[0.12em] text-muted">{skill.role}</span>
              </div>
              <p className="mt-2 font-mono text-xs text-muted">$ {skill.install}</p>
              <ul className="stagger mt-8 space-y-3 text-[15px] text-ink">
                {skill.items.map((item, j) => (
                  <li key={item} style={{ '--i': j }} className="flex gap-3">
                    <span className="text-muted">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
