import { useState } from 'react';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';
import { ArrowDown, ArrowUpRight, Check, Copy } from './icons';
import { contact } from '../data';
import resumeFile from '../assets/Amal_Binu_FullStack_Developer_Resume.pdf';

const linkClass =
  'group inline-flex h-11 items-center gap-2 rounded-full border border-line px-5 text-sm font-medium text-ink transition-colors hover:border-ink/40';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${contact.email}`;
    }
  };

  return (
    <section id="contact" className="px-6 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader index="05" label="Contact" note="Let’s talk" />

        <Reveal as="h2" className="mt-10 text-5xl leading-[1] sm:text-7xl lg:text-8xl lg:tracking-[-0.045em]">
          Have an agent <em className="font-serif font-normal italic">in mind?</em>
        </Reveal>
        <Reveal as="p" delay={80} className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
          If you have an AI project, an automation idea, or just want to say hello, I’m always open to new opportunities and interesting conversations.
        </Reveal>

        <Reveal delay={140} className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-3">
          <a
            href={`mailto:${contact.email}`}
            className="text-2xl font-medium tracking-tight text-ink underline decoration-line decoration-2 underline-offset-[10px] transition-colors hover:decoration-accent sm:text-4xl"
          >
            {contact.email}
          </a>
          <button
            type="button"
            onClick={copyEmail}
            aria-label={copied ? 'Email copied' : 'Copy email address'}
            className="inline-flex h-9 items-center gap-1.5 rounded-full border border-line px-3 font-mono text-xs text-muted transition-colors hover:border-ink/40 hover:text-ink"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
            {copied ? 'Copied' : 'Copy'}
          </button>
          <span aria-live="polite" className="sr-only">{copied ? 'Email address copied' : ''}</span>
        </Reveal>

        <Reveal delay={200} className="mt-10 flex flex-wrap gap-3">
          <a href={resumeFile} download="Amal_Binu_Resume.pdf" className={linkClass}>
            Resume
            <ArrowDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
            LinkedIn
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
            GitHub
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
