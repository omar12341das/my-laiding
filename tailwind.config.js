/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dev: {
          bg: '#0B0E14',
          surface: '#161B22',
          surfaceHover: '#1F242C',
          card: '#12171F',
          border: '#30363D',
          borderLight: '#484F58',
          text: '#F0F6FC',
          muted: '#8B949E',
          cyan: '#00F0FF',
          cyanGlow: 'rgba(0, 240, 255, 0.25)',
          violet: '#6C5CE7',
          violetGlow: 'rgba(108, 92, 231, 0.25)',
          emerald: '#10B981',
          amber: '#F59E0B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(0, 240, 255, 0.4)',
        'glow-violet': '0 0 25px -5px rgba(108, 92, 231, 0.4)',
        'glow-cyan-sm': '0 0 12px -2px rgba(0, 240, 255, 0.3)',
        'glow-violet-sm': '0 0 12px -2px rgba(108, 92, 231, 0.3)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
}
