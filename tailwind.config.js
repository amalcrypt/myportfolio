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
        secondary: '#9333ea', // purple-600
        dark: '#ffffff', // white
      }
    },
  },
  plugins: [],
}
