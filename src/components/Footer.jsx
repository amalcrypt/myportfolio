import { Logo } from './Navbar';
import { ArrowUp } from './icons';
import { navLinks } from '../data';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white px-6 py-14 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
        <div>
          <Logo />
          <p className="mt-3 text-sm text-slate-500">
            © {new Date().getFullYear()} Amal Binu. All rights reserved.
            <br />
            Built with passion in India.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm font-semibold text-slate-600">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} className="transition-colors hover:text-primary">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#home"
          aria-label="Back to top"
          className="group grid h-11 w-11 place-items-center rounded-full border border-slate-200 text-slate-600 transition hover:border-primary hover:bg-primary hover:text-white"
        >
          <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </footer>
  );
}
