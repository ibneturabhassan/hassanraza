import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0b0d10',
        foreground: '#e6e8eb',
        muted: '#9aa4af',
        accent: {
          DEFAULT: '#4fd1c5',
          600: '#36b3a7',
          700: '#2a8f86'
        },
        card: '#111418',
        border: '#1b2026'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(79, 209, 197, 0.3), 0 10px 30px -12px rgba(79, 209, 197, 0.35)'
      },
      fontFamily: {
        inter: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: [],
} satisfies Config
