import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8b5cf6', // violet-500
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(40px, -30px) scale(1.08)' },
          '66%': { transform: 'translate(-30px, 25px) scale(0.94)' },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '50.01%, 100%': { opacity: '0' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        dash: {
          to: { strokeDashoffset: '-16' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2s infinite',
        drift: 'drift 20s ease-in-out infinite',
        'drift-slow': 'drift 28s ease-in-out infinite reverse',
        blink: 'blink 1s step-end infinite',
        marquee: 'marquee 40s linear infinite',
        'gradient-x': 'gradient-x 6s ease infinite',
        dash: 'dash 0.8s linear infinite',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'spin-slow': 'spin 6s linear infinite',
        'pulse-slow': 'pulse 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
