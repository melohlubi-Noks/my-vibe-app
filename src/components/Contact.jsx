import { profile } from '../data/profile'

const contactLinks = [
  {
    id: 'email',
    label: 'Email',
    display: profile.email,
    href: `mailto:${profile.email}`,
    icon: '📧',
    external: false,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    display: 'linkedin.com/in/nokuthula-mamba-3a65a6ab',
    href: profile.linkedin,
    icon: '💼',
    external: true,
  },
  {
    id: 'github',
    label: 'GitHub',
    display: 'github.com/melohlubi-Noks',
    href: profile.github,
    icon: '🐙',
    external: true,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-slate-950 py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#059669]">
            Contact
          </h2>
          <h3 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Let&apos;s connect
          </h3>
          <p className="text-slate-400">
            Open to leadership opportunities, MBA collaborations, and technology
            partnerships.
          </p>
        </div>

        <ul className="mb-10 grid gap-4 sm:grid-cols-3">
          {contactLinks.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#059669]/50 hover:shadow-[0_0_24px_rgba(5,150,105,0.15)]"
              >
                <span className="mb-3 text-2xl">{item.icon}</span>
                <span className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-500 group-hover:text-[#059669]">
                  {item.label}
                </span>
                <span className="break-all text-sm font-medium text-white group-hover:text-[#10b981]">
                  {item.display}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex justify-center">
          <a
            href={profile.resumeUrl}
            download="Noks-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mba-btn-primary px-8 py-3.5 text-base"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}
