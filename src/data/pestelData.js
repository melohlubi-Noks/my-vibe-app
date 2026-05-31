export const brandTheme = {
  tab: 'mba-tab-hover',
  active: 'mba-tab-active',
  panel: 'from-[#059669]/15 via-slate-900 to-slate-950',
  glow: 'bg-[#059669]/20',
  accent: 'text-[#10b981]',
  ring: 'ring-[#059669]/40',
}

export const pestelDimensions = [
  {
    id: 'political',
    label: 'Political',
    icon: '🏛️',
    letter: 'P',
    description:
      'Government policies regarding AI hardware distribution and international chip export regulations affecting Nvidia.',
    theme: brandTheme,
  },
  {
    id: 'economic',
    label: 'Economic',
    icon: '📉',
    letter: 'E',
    description:
      'High R&D costs in AI development, global supply chain costs, and market demand for GPUs.',
    theme: brandTheme,
  },
  {
    id: 'social',
    label: 'Social',
    icon: '👥',
    letter: 'S',
    description:
      'Growing public demand for ethical AI, automation anxiety, and tech talent acquisition.',
    theme: brandTheme,
  },
  {
    id: 'technological',
    label: 'Technological',
    icon: '💻',
    letter: 'T',
    description:
      'Rapid advancements in deep learning models, hardware optimization, and software ecosystem integration (like CUDA).',
    theme: brandTheme,
  },
  {
    id: 'environmental',
    label: 'Environmental',
    icon: '🌱',
    letter: 'E',
    description:
      'Massive energy consumption from data centers and electronic waste management.',
    theme: brandTheme,
  },
  {
    id: 'legal',
    label: 'Legal',
    icon: '⚖️',
    letter: 'L',
    description:
      'Intellectual property laws, data privacy compliance, and antitrust scrutiny in the AI sector.',
    theme: brandTheme,
  },
]
