import Reveal from './Reveal';
import RevealHeading from './RevealHeading';
import SectionHeader from './SectionHeader';
import { ArrowUpRight } from './icons';
import { projects } from '../data';

function ProjectCard({ project, index }) {
  return (
    <a href={project.link} target="_blank" rel="noopener noreferrer" className="group block">
      <div className="img-reveal overflow-hidden rounded-lg border border-line bg-surface">
        <img
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          width="900"
          height="600"
          loading="lazy"
          decoding="async"
          className="aspect-[3/2] w-full object-cover object-top group-hover:scale-[1.04]"
        />
      </div>
      <div className="mt-5 flex items-baseline justify-between gap-4">
        <h3 className="text-lg">{project.title}</h3>
        <span className="font-mono text-xs text-muted">{String(index + 1).padStart(2, '0')}</span>
      </div>
      <p className="mt-2 text-[15px] leading-relaxed text-muted">{project.subtitle}</p>
      <p className="mt-4 font-mono text-xs text-muted">{project.features.join(' / ')}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink">
        <span className="link-u">Visit live site</span>
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </a>
  );
}

export default function Projects() {
  return (
    <section id="work" className="px-6 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader index="01" label="Work" note="Selected projects" />
        <RevealHeading
          parts={['Things I’ve ', { text: 'built', em: true }, '.']}
          className="mt-10 max-w-3xl text-4xl sm:text-5xl lg:text-6xl lg:tracking-[-0.035em]"
        />

        <div className="mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 120}>
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
