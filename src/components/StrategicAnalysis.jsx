import { useState } from 'react'
import { pestelDimensions } from '../data/pestelData'

export default function StrategicAnalysis() {
  const [activeId, setActiveId] = useState(pestelDimensions[0].id)
  const active = pestelDimensions.find((d) => d.id === activeId) ?? pestelDimensions[0]

  function goTo(currentId, direction) {
    const index = pestelDimensions.findIndex((d) => d.id === currentId)
    const next =
      pestelDimensions[(index + direction + pestelDimensions.length) %
        pestelDimensions.length]
    setActiveId(next.id)
  }

  return (
    <section
      id="strategic-analysis"
      className="scroll-mt-20 border-b border-[#059669]/20 bg-slate-900 py-24 px-6"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#059669]">
            Strategic Analysis Work
          </p>
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Macroenvironmental Enterprise Analysis
          </h2>
          <p className="mx-auto max-w-3xl text-slate-400">
            A proof-of-concept PESTEL framework from my MBA studies—demonstrating
            how I analyze global technology enterprises such as Nvidia to inform
            strategic market and architecture decisions.
          </p>
        </div>

        <ul className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {pestelDimensions.map((dimension) => {
            const isActive = dimension.id === activeId
            return (
              <li key={dimension.id}>
                <button
                  type="button"
                  onClick={() => setActiveId(dimension.id)}
                  className={`group flex w-full flex-col items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-4 text-center transition-all duration-300 hover:-translate-y-1 mba-tab-hover ${
                    isActive ? 'mba-tab-active' : 'text-slate-500'
                  }`}
                  aria-pressed={isActive}
                  aria-controls="analysis-panel"
                >
                  <span className="text-2xl transition-transform duration-300 group-hover:scale-110">
                    {dimension.icon}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wide">
                    {dimension.label}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>

        <div className="grid gap-8 lg:grid-cols-12">
          <div
            className="hidden lg:col-span-4 lg:flex lg:flex-col lg:gap-2"
            role="tablist"
            aria-label="PESTEL dimensions"
          >
            {pestelDimensions.map((dimension) => {
              const isActive = dimension.id === activeId
              return (
                <button
                  key={dimension.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="analysis-panel"
                  onClick={() => setActiveId(dimension.id)}
                  className={`flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-left text-sm transition-all duration-300 mba-tab-hover ${
                    isActive ? 'mba-tab-active' : 'text-slate-500'
                  }`}
                >
                  <span>{dimension.icon}</span>
                  <span className="font-semibold text-white">{dimension.label}</span>
                </button>
              )
            })}
          </div>

          <div
            id="analysis-panel"
            role="tabpanel"
            className="relative overflow-hidden rounded-2xl border border-[#059669]/30 bg-slate-950 lg:col-span-8"
            style={{ boxShadow: '0 0 24px rgba(5, 150, 105, 0.12)' }}
          >
            <div
              key={active.id}
              className={`relative bg-gradient-to-br p-6 sm:p-8 lg:p-10 ${active.theme.panel} panel-enter`}
            >
              <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-[#10b981]">
                {active.letter} — {active.label}
              </p>
              <h3 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
                {active.label} Factors
              </h3>
              <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                {active.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {pestelDimensions.map((dimension) => (
                  <button
                    key={dimension.id}
                    type="button"
                    onClick={() => setActiveId(dimension.id)}
                    className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
                      dimension.id === activeId
                        ? 'border border-[#059669] bg-[#059669]/15 text-[#10b981]'
                        : 'border border-slate-700 text-slate-500 hover:border-[#059669]/50 hover:text-[#10b981]'
                    }`}
                  >
                    {dimension.label}
                  </button>
                ))}
              </div>
              <div className="mt-8 flex items-center justify-between border-t border-slate-800/80 pt-6">
                <button
                  type="button"
                  onClick={() => goTo(activeId, -1)}
                  className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-400 transition-all hover:border-[#059669]/50 hover:text-[#10b981]"
                >
                  ← Previous
                </button>
                <span className="text-xs font-medium text-[#059669]">
                  {pestelDimensions.findIndex((d) => d.id === activeId) + 1} /{' '}
                  {pestelDimensions.length}
                </span>
                <button
                  type="button"
                  onClick={() => goTo(activeId, 1)}
                  className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-300 transition-all hover:border-[#059669] hover:bg-[#059669] hover:text-white"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
