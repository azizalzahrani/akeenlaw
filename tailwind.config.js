/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070C15',
          900: '#0A111E',
          850: '#111C2E',
          800: '#16243B',
          700: '#1F3352',
          600: '#2A456C',
        },
        gold: {
          400: '#E5C07B',
          500: '#C5A059',
          600: '#B28E46',
          700: '#8E6E2F',
        },
        sand: {
          50: '#FAF8F5',
          100: '#F4F0EA',
          200: '#E8E1D7',
          300: '#D6C9B7',
        }
      },
      fontFamily: {
        alexandria: ['Alexandria', 'sans-serif'],
        tajawal: ['Tajawal', 'sans-serif'],
        amiri: ['Amiri', 'serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(197, 160, 89, 0.15)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}
