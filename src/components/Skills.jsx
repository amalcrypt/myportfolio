import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { Check } from './icons';
import { skills } from '../data';
import { trackSpotlight } from '../hooks';

export default function Skills() {
  return (
    <section id="skills" className="border-y border-slate-200/60 bg-slate-50 px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            index="04"
            label="Expertise"
            align="center"
            title={<>My <span className="text-primary">agentic</span> toolbox.</>}
          />
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <Reveal key={skill.name} delay={i * 120} className="h-full">
                <article
                  onMouseMove={trackSpotlight}
                  className="spotlight group relative flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-violet-300 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="rounded-full border border-slate-200 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-slate-500">
                      {skill.role}
                    </span>
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-slate-950 transition-colors group-hover:text-primary">{skill.name}</h3>
                  <p className="mt-1.5 font-mono text-xs text-slate-400">
                    <span className="text-primary">$</span> {skill.install}
                  </p>
                  <ul className="mt-7 space-y-3.5">
                    {skill.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-slate-600">
                        <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-violet-50 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                          <Check className="h-3 w-3" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
