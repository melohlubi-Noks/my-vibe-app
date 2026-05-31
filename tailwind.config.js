/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#059669',
          light: '#10b981',
          dark: '#047857',
        },
      },
      boxShadow: {
        brand: '0 0 24px rgba(5, 150, 105, 0.2)',
        'brand-lg': '0 8px 32px rgba(5, 150, 105, 0.25)',
      },
    },
  },
  plugins: [],
}
