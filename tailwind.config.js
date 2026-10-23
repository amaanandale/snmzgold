/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          DEFAULT: '#063926',
          dark: '#042a1c',
          light: '#0a5438',
          muted: '#0d6b48',
        },
        gold: {
          DEFAULT: '#DFAF24',
          antique: '#B8860B',
          light: '#ECC84A',
          pale: '#F5DFA0',
        },
        ivory: {
          DEFAULT: '#F7F1E5',
          dark: '#EDE4CF',
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #DFAF24 0%, #B8860B 50%, #DFAF24 100%)',
        'emerald-gradient': 'linear-gradient(135deg, #042a1c 0%, #063926 50%, #0a5438 100%)',
        'hero-gradient': 'linear-gradient(180deg, #042a1c 0%, #063926 60%, #0a5438 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.7s ease-out',
        'shimmer': 'shimmer 2.5s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      boxShadow: {
        'gold': '0 4px 24px rgba(223, 175, 36, 0.25)',
        'gold-lg': '0 8px 40px rgba(223, 175, 36, 0.35)',
        'emerald': '0 4px 24px rgba(6, 57, 38, 0.3)',
        'card': '0 2px 20px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 8px 40px rgba(0, 0, 0, 0.14)',
      },
    },
  },
  plugins: [],
};
