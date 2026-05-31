const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#leadership', label: 'Leadership & Experience' },
  { href: '#mba-projects', label: 'MBA Projects' },
  { href: '#strategic-analysis', label: 'Strategic Analysis' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/80 bg-slate-950/95 backdrop-blur-md">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6"
        aria-label="Main navigation"
      >
        <a
          href="#about"
          className="shrink-0 text-lg font-semibold tracking-tight text-white transition-colors hover:text-[#10b981]"
        >
          Noks
        </a>
        <ul className="flex flex-wrap items-center justify-end gap-0.5 sm:gap-1">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="rounded-lg px-2 py-2 text-xs font-medium text-slate-400 transition-colors hover:bg-slate-800/60 hover:text-[#10b981] sm:px-3 sm:text-sm"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
