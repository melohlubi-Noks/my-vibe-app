const projects = [
  {
    title: 'Strategic Market & Enterprise Architecture (Nvidia Case Study)',
    badge: 'MBA Team Project',
    description:
      'Led a collaborative team analysis exploring global tech infrastructures, market volatility, and operational scale.',
    analysisLink: true,
  },
  {
    title: 'Computerized Educational Study Game (Java Capstone)',
    badge: 'Technology Capstone',
    description:
      'Engineered an interactive desktop learning platform using Object-Oriented Programming (OOP) to track and optimize student retention metrics.',
  },
]

export default function MBAProjects() {
  return (
    <section
      id="mba-projects"
      className="scroll-mt-20 border-b border-slate-800/60 bg-slate-950 py-24 px-6"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#059669]">
            MBA &amp; Technology Projects
          </h2>
          <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Emerging trends and business models
          </h3>
        </div>

        <ul className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <li
              key={project.title}
              className="group flex flex-col border-l-4 border-[#059669] bg-slate-900/40 py-6 pl-6 pr-5 transition-all duration-300 hover:bg-slate-900/70 hover:pl-7"
            >
              <span className="mb-3 inline-flex w-fit rounded-md border border-[#059669]/30 bg-[#059669]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#10b981]">
                {project.badge}
              </span>
              <h4 className="mb-4 text-xl font-bold leading-snug tracking-tight text-white sm:text-2xl">
                {project.title}
              </h4>
              <p className="flex-1 text-sm leading-relaxed text-slate-400 sm:text-base">
                {project.description}
              </p>
              {project.analysisLink && (
                <a
                  href="#strategic-analysis"
                  className="mt-6 inline-flex w-fit text-sm font-medium text-[#059669] transition-colors hover:text-[#10b981]"
                >
                  View Macroenvironmental Analysis →
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
