export default function Footer() {
  return (
    <footer className="px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 border-t border-line py-8 font-mono text-xs text-muted">
        <span>© {new Date().getFullYear()} Amal Binu</span>
        <a href="#home" className="transition-colors hover:text-ink">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
