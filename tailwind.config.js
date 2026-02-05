/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-navy': 'var(--bg-primary)',
        'slate-gray': 'var(--text-primary)',
        'light-slate': 'var(--text-secondary)',
        'cyber-blue': 'var(--accent-primary)',
        'neon-cyan': 'var(--accent-glow)',
        'highlight': 'var(--text-highlight)',
        'panel': 'var(--glass-bg)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 10px var(--accent-primary), 0 0 20px var(--accent-primary)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-150%) skewX(12deg)' },
          '100%': { transform: 'translateX(150%) skewX(12deg)' },
        }
      }
    },
  },
  plugins: [],
}

