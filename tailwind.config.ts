import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        'background-elevated': '#141414',
        gold: '#c9a35c',
        'gold-light': '#d4af6a',
        'gold-muted': '#8a7245',
        'text-primary': '#f5f0e8',
        'text-secondary': '#a89f8f',
        'text-subtle': '#7a6d5a',
        surface: '#1c1917',
        border: {
          DEFAULT: '#27272a',
          gold: '#8a7245',
          goldLight: 'rgba(212, 175, 106, 0.3)',
          goldMuted: 'rgba(138, 114, 69, 0.4)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'Montserrat', 'system-ui', 'sans-serif'],
        script: ['var(--font-script)', 'cursive'],
      },
      letterSpacing: {
        'widest-wider': '0.25em',
        'wide-ultra': '0.15em',
      },
      boxShadow: {
        'gold': '0 25px 50px -12px rgba(201, 163, 92, 0.15), 0 0 80px rgba(201, 163, 92, 0.05)',
        'gold-lg': '0 50px 100px -20px rgba(201, 163, 92, 0.2), 0 0 120px rgba(201, 163, 92, 0.08)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-scale': 'fadeInScale 1s ease-out forwards',
        'vignette': 'vignette 1s ease-out forwards',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInScale: {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        vignette: {
          from: { opacity: '0', transform: 'scale(1.05)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%, 100%': { backgroundPosition: '-200% 0' },
          '50%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;