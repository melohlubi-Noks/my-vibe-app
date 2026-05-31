const experienceBlocks = [
  {
    title: 'Head of Department & ICT/Mathematics Educator',
    duration: '10 Years',
    focus:
      'Departmental leadership, curriculum architecture, resource optimization, and cross-functional team management.',
  },
  {
    title: 'International ESL Educator – Taiwan',
    duration: '2 Years',
    focus:
      'Cultural adaptability, rapid agility in new environments, and high-impact international communications.',
  },
]

const competencies = [
  'Strategic Leadership',
  'Educational Technology',
  'Agile Management',
  'Intercultural Communication',
  'Fluent English & Beginner Mandarin',
]

export default function LeadershipExperience() {
  return (
    <section
      id="leadership"
      className="scroll-mt-20 border-b border-slate-800/60 bg-slate-900/40 py-24 px-6"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#059669]">
            Leadership &amp; Experience
          </h2>
          <h3 className="text-3xl font-bold text-white sm:text-4xl">
            Career trajectory in practice
          </h3>
        </div>

        <ul className="mb-12 space-y-6">
          {experienceBlocks.map((block, index) => (
            <li
              key={block.title}
              className="relative border-l-4 border-[#059669] bg-slate-950/60 py-6 pl-8 pr-6 transition-all duration-300 hover:bg-slate-900/80"
            >
              <span
                className="absolute -left-3 top-8 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#059669] bg-slate-950 text-xs font-bold text-[#10b981]"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h4 className="text-xl font-bold text-white sm:text-2xl">
                  {block.title}
                </h4>
                <span className="rounded-md border border-[#059669]/30 bg-[#059669]/10 px-3 py-1 text-sm font-semibold text-[#10b981]">
                  {block.duration}
                </span>
              </div>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Core Focus
              </p>
              <p className="mt-1 max-w-3xl text-sm leading-relaxed text-slate-400 sm:text-base">
                {block.focus}
              </p>
            </li>
          ))}
        </ul>

        <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8">
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#059669]">
            Core Competencies
          </h4>
          <ul className="flex flex-wrap gap-2">
            {competencies.map((skill) => (
              <li
                key={skill}
                className="rounded-lg border border-[#059669]/25 bg-[#059669]/10 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-[#059669]/50 hover:text-[#10b981]"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
