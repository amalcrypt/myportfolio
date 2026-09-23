import { useEffect, useState } from 'react';
import { navLinks } from '../data';
import { AgentMark, Close, Menu } from './icons';

export const Logo = () => (
  <a href="#home" className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-slate-950">
    <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-slate-950 text-violet-300">
      <AgentMark className="h-5 w-5" />
      <span className="absolute -right-0.5 -top-0.5 flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
        <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
      </span>
    </span>
    <span>
      Amal Binu<span className="text-primary">.</span>
    </span>
  </a>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(() => window.scrollY > 16);
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the link for whichever section sits in the middle of the viewport
  useEffect(() => {
    const sections = [...navLinks.map((link) => link.id), 'contact']
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const raised = scrolled || open;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3">
      <nav
        aria-label="Main"
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-3 py-2 transition-all duration-500 sm:px-4 ${
          raised
            ? 'border-slate-200/80 bg-white/80 shadow-lg shadow-slate-900/5 backdrop-blur-xl'
            : 'border-transparent bg-transparent'
        }`}
      >
        <Logo />

        <ul className="hidden items-center gap-1 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? 'location' : undefined}
                className={`rounded-full px-4 py-2 transition-colors duration-300 ${
                  active === link.id ? 'bg-slate-900/5 text-slate-950' : 'text-slate-500 hover:text-slate-950'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className={`hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition sm:inline-flex ${
              active === 'contact' ? 'bg-primary' : 'bg-slate-950 hover:bg-slate-800'
            }`}
          >
            Get In Touch
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid h-10 w-10 place-items-center rounded-xl text-slate-700 transition hover:bg-slate-900/5 md:hidden"
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        inert={!open}
        className={`mx-auto grid max-w-6xl transition-all duration-300 md:hidden ${
          open ? 'mt-2 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <ul className="rounded-2xl border border-slate-200/80 bg-white/95 p-2 shadow-lg shadow-slate-900/5 backdrop-blur-xl">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    active === link.id ? 'bg-slate-900/5 text-slate-950' : 'text-slate-600 hover:bg-slate-900/5'
                  }`}
                >
                  {link.label}
                  {active === link.id && <span className="h-1.5 w-1.5 rounded-full bg-primary" />}
                </a>
              </li>
            ))}
            <li className="p-1 pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center rounded-xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white"
              >
                Get In Touch
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
