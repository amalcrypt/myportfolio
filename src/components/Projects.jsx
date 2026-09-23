import { useState } from 'react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { AgentMark, ArrowRight, ArrowUpRight } from './icons';
import { projects } from '../data';
import { trackSpotlight } from '../hooks';

function ProjectCard({ project }) {
  const live = !project.isComingSoon;

  return (
    <article
      onMouseMove={trackSpotlight}
      className={`spotlight group relative flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-900/5 transition-all duration-500 ease-out ${
        live ? 'hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10' : ''
      }`}
    >
      <div className={`relative mb-5 aspect-[3/2] shrink-0 overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-br ${project.accent}`}>
        {project.image && (
          <img
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            width="900"
            height="600"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />
        )}

        {live ? (
          <>
            <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-slate-950/70 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Live
            </span>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} live site`}
              className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-slate-950/60 via-slate-950/0 to-transparent p-3 opacity-0 transition-opacity duration-500 focus-visible:opacity-100 group-hover:opacity-100"
            >
              <span className="inline-flex translate-y-2 items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-950 shadow-lg transition-transform duration-500 group-hover:translate-y-0">
                Open live site <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </a>
          </>
        ) : (
          <div className="absolute inset-0 grid place-items-center">
            <div className="flex flex-col items-center gap-3">
              <span className="relative grid h-14 w-14 place-items-center">
                <span className="absolute inset-0 animate-spin-slow rounded-full border-2 border-white/25 border-t-white" />
                <AgentMark className="h-6 w-6 text-white" />
              </span>
              <span className="rounded-full bg-slate-950/40 px-3 py-1 font-mono text-[11px] text-white backdrop-blur-md">
                status: "building"
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="flex items-start justify-between gap-3 px-1">
        <h3 className={`text-lg font-bold transition-colors ${live ? 'text-slate-950 group-hover:text-primary' : 'text-slate-400'}`}>
          {project.title}
        </h3>
        {live && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${project.title}`}
            className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-slate-200 text-slate-500 transition-all duration-300 group-hover:rotate-45 group-hover:border-primary group-hover:bg-primary group-hover:text-white"
          >
            <ArrowUpRight className="h-4 w-4" />
          </a>
        )}
      </div>
      <p className="mt-2 px-1 text-sm leading-relaxed text-slate-600">{project.subtitle}</p>

      {project.features && (
        <div className="mt-auto flex flex-wrap gap-2 px-1 pt-5">
          {project.features.map((feature) => (
            <span
              key={feature}
              className="rounded-lg border border-slate-100 bg-slate-50 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-slate-500 transition-colors group-hover:border-primary/20 group-hover:text-primary/80"
            >
              {feature}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const featured = projects.slice(0, 3);
  const more = projects.slice(3);

  return (
    <section id="projects" className="bg-white px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <SectionHeading
              index="01"
              label="Projects"
              title={<><span className="text-primary">Featured</span> work I’ve built recently.</>}
            />
          </Reveal>
          {more.length > 0 && (
            <Reveal delay={100}>
              <button
                type="button"
                onClick={() => setShowAll((value) => !value)}
                aria-expanded={showAll}
                aria-controls="more-projects"
                className="group inline-flex items-center gap-2 rounded-full bg-slate-950 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/20 transition-all hover:bg-slate-800 active:scale-95"
              >
                {showAll ? 'View Less' : 'View All Projects'}
                <ArrowRight className={`h-4 w-4 transition-transform duration-300 ${showAll ? '-rotate-90' : 'group-hover:translate-x-1'}`} />
              </button>
            </Reveal>
          )}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <Reveal key={project.title} delay={i * 120} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        {more.length > 0 && (
          <div
            id="more-projects"
            inert={!showAll}
            className={`grid transition-all duration-700 ease-in-out ${showAll ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
          >
            <div className="-mx-3 min-h-0 overflow-hidden px-3">
              <div className="grid gap-6 pb-6 pt-6 sm:grid-cols-2 lg:grid-cols-3">
                {more.map((project, i) => (
                  <Reveal key={project.title} delay={i * 120} className="h-full">
                    <ProjectCard project={project} />
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
