/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backdropBlur: {
        sm: '4px',
      },
      colors: {
        'deep-space': '#0B0F19',
        'charcoal-navy': '#121826',
        'electric-blue': '#2B6FFF',
        'neon-lime': '#DFFF00',
        'pure-white': '#FFFFFF',
        'light-gray': '#B0B8C5',
        'soft-red': '#FF5C5C',
      },
      fontFamily: {
        'sans': ['Inter', 'Poppins', 'Montserrat', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}