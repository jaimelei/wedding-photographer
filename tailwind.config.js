/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter_regular: ["Inter-Regular", "sans-serif"],
        inter_bold: ["Inter-Bold", "sans-serif"],
        merriweather_regular: ["Merriweather-Regular", "sans-serif"],
        merriweather_bold: ["Merriweather-Bold", "sans-serif"],
        amoresa: ["Amoresa", "sans-serif"],
      },
      backgroundImage: {
        'hero': "url('../public/assets/images/hero-section.png')",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
