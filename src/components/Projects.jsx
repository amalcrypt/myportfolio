import Reveal from './Reveal';
import RevealHeading from './RevealHeading';
import SectionHeader from './SectionHeader';
import { ArrowUpRight } from './icons';
import { projects } from '../data';

const number = (index) => String(index + 1).padStart(2, '0');

function ProjectImage({ project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${project.title} live site`}
      className="group block"
    >
      <div className="img-reveal overflow-hidden rounded-lg border border-line bg-surface">
        <img
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          width="900"
          height="600"
          loading="lazy"
          decoding="async"
          className="aspect-[3/2] w-full object-cover object-top group-hover:scale-[1.04] dark:brightness-90"
        />
      </div>
    </a>
  );
}

function ProjectLinks({ project }) {
  const links = [
    { label: 'Visit live site', href: project.link },
    ...(project.code ? [{ label: 'View code', href: project.code }] : []),
  ];

  return (
    <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 text-sm font-medium text-ink"
        >
          <span className="link-u">{link.label}</span>
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      ))}
    </div>
  );
}

// Full-width case study: screenshot beside a short "how it works" breakdown.
function FeaturedProject({ project, index }) {
  return (
    <article className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
      <ProjectImage project={project} />
      <div>
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-2xl">{project.title}</h3>
          <span className="font-mono text-xs text-muted">{number(index)}</span>
        </div>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">{project.subtitle}</p>

        <ol className="stagger mt-6 divide-y divide-line border-y border-line">
          {project.howItWorks.map((step, i) => (
            <li key={step.label} style={{ '--i': i }} className="grid grid-cols-[5rem_1fr] gap-4 py-3.5 text-[15px]">
              <span className="font-mono text-xs uppercase leading-6 tracking-[0.12em] text-muted">{step.label}</span>
              <span className="leading-relaxed text-ink">{step.text}</span>
            </li>
          ))}
        </ol>

        <p className="mt-5 font-mono text-xs text-muted">{project.features.join(' / ')}</p>
        <ProjectLinks project={project} />
        {project.note && <p className="mt-4 font-mono text-[11px] leading-relaxed text-muted">{project.note}</p>}
      </div>
    </article>
  );
}

function ProjectCard({ project, index }) {
  return (
    <article>
      <ProjectImage project={project} />
      <div className="mt-5 flex items-baseline justify-between gap-4">
        <h3 className="text-lg">{project.title}</h3>
        <span className="font-mono text-xs text-muted">{number(index)}</span>
      </div>
      <p className="mt-2 text-[15px] leading-relaxed text-muted">{project.subtitle}</p>
      <p className="mt-4 font-mono text-xs text-muted">{project.features.join(' / ')}</p>
      <ProjectLinks project={project} />
    </article>
  );
}

export default function Projects() {
  const featured = projects[0].howItWorks ? projects[0] : null;
  const rest = featured ? projects.slice(1) : projects;
  const offset = featured ? 1 : 0;

  return (
    <section id="work" className="px-6 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader index="01" label="Work" note="Selected projects" />
        <RevealHeading
          parts={['Things I’ve ', { text: 'built', em: true }, '.']}
          className="mt-10 max-w-3xl text-4xl sm:text-5xl lg:text-6xl lg:tracking-[-0.035em]"
        />

        {featured && (
          <Reveal className="mt-16">
            <FeaturedProject project={featured} index={0} />
          </Reveal>
        )}

        <div className={`grid gap-x-8 gap-y-16 md:grid-cols-2 ${featured ? 'mt-20' : 'mt-16 lg:grid-cols-3'}`}>
          {rest.map((project, i) => (
            <Reveal key={project.title} delay={i * 120}>
              <ProjectCard project={project} index={i + offset} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
