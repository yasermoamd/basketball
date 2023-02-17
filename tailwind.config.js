/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  
  theme: {
    extend: {
      backgroundImage: {
        mainCard: "url('/src/assets/image/main_card.jpg')"
      }
    },
    screens: {
      'sm': '380px',
      'tablet': '780px',
      // => @media (min-width: 640px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'laptop': '1280px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1920px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}