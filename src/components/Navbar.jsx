import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { navLinks } from '../data';
import { AgentBot, Close, Menu } from './icons';

const Logo = () => (
  <a href="#home" aria-label="Amal Binu, back to top" className="group flex items-center gap-2.5 font-semibold tracking-tight text-ink">
    <span className="grid h-8 w-8 place-items-center rounded-lg bg-ink text-paper transition-transform duration-300 group-hover:-rotate-6">
      <AgentBot className="h-5 w-5" antennaClassName="fill-accent" />
    </span>
    Amal Binu
  </a>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(() => window.scrollY > 8);
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Mark the link for whichever section sits in the middle of the viewport
  useEffect(() => {
    const sections = ['home', ...navLinks.map((link) => link.id), 'contact']
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open ? 'border-line bg-paper/85 backdrop-blur-md' : 'border-transparent'
      }`}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6 lg:px-8">
        <Logo />

        <ul className="hidden items-center gap-8 text-sm md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? 'location' : undefined}
                className={`transition-colors ${active === link.id ? 'text-ink' : 'text-muted hover:text-ink'}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden h-9 items-center rounded-full bg-ink px-4 text-sm font-medium text-paper transition-opacity hover:opacity-85 sm:inline-flex"
          >
            Contact
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid h-9 w-9 place-items-center rounded-full text-ink md:hidden"
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        inert={!open}
        className={`grid transition-all duration-300 md:hidden ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="min-h-0 overflow-hidden">
          <ul className="mx-auto max-w-6xl px-6 pb-6 pt-2">
            {[...navLinks, { id: 'contact', label: 'Contact' }].map((link) => (
              <li key={link.id} className="border-b border-line last:border-0">
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between py-4 text-lg ${active === link.id ? 'text-ink' : 'text-muted'}`}
                >
                  {link.label}
                  <span aria-hidden="true" className="font-mono text-xs text-muted">→</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
