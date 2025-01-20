/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-111': '#f9fafb'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], 
      },
    },
    animation: {
      'infinite-scroll': 'infinite-scroll 8s linear infinite',
    },
    keyframes: {
      'infinite-scroll': {
        from: { transform: 'translateX(0)' },
        to: { transform: 'translateX(-100%)' },
      }
    },
    
  },
  plugins: [],
}