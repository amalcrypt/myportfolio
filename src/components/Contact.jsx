import { useState } from 'react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { ArrowUpRight, Check, Copy, Download, Mail, Send } from './icons';
import { contact } from '../data';
import resumeFile from '../assets/Amal_Binu_FullStack_Developer_Resume.pdf';

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
    <section id="contact" className="px-6 py-24 lg:px-8 lg:py-32">
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-slate-950 p-8 shadow-2xl shadow-slate-900/30 sm:rounded-[3rem] sm:p-14 lg:p-20">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
            <div className="bg-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_right,black_20%,transparent_70%)]" />
            <div className="absolute -right-24 -top-24 h-96 w-96 animate-drift rounded-full bg-violet-600/30 blur-3xl" />
            <div className="absolute -bottom-32 left-10 h-80 w-80 animate-drift-slow rounded-full bg-fuchsia-600/20 blur-3xl" />
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <SectionHeading
                index="05"
                label="Contact"
                dark
                title={<>Let’s build intelligent agents <span className="text-violet-300">together.</span></>}
              >
                If you have an AI project, an automation idea, or just want to say hello, I’m always open to new opportunities and interesting conversations.
              </SectionHeading>

              <a
                href={`mailto:${contact.email}?subject=${encodeURIComponent('Building an AI agent')}`}
                className="group mt-10 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-2 pl-5 backdrop-blur transition hover:border-primary/60 hover:bg-white/10"
              >
                <span className="font-mono text-lg text-primary">›</span>
                <span className="flex-1 truncate text-sm text-slate-400 transition-colors group-hover:text-slate-200">
                  Describe the agent you want to build…
                </span>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary text-white transition-transform duration-300 group-hover:scale-105">
                  <Send className="h-4 w-4" />
                </span>
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href={resumeFile}
                download="Amal_Binu_Resume.pdf"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-8 py-4 text-base font-bold text-slate-950 shadow-xl transition duration-200 hover:scale-[1.03] hover:bg-slate-100 active:scale-95"
              >
                <Download className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5" />
                Download Resume
              </a>

              <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-2 pl-4">
                <Mail className="h-4 w-4 shrink-0 text-slate-400" />
                <a href={`mailto:${contact.email}`} className="min-w-0 flex-1 truncate text-sm font-medium text-slate-300 transition-colors hover:text-white">
                  {contact.email}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label={copied ? 'Email copied' : 'Copy email address'}
                  className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl transition-colors ${
                    copied ? 'bg-emerald-500/20 text-emerald-300' : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>
              <span aria-live="polite" className="sr-only">{copied ? 'Email address copied' : ''}</span>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'LinkedIn', href: contact.linkedin },
                  { label: 'GitHub', href: contact.github },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-1.5 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-300 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
                  >
                    {social.label}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
