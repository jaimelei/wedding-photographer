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
      keyframes: {
        'scroll-vertical': {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-50%)' }, // adjust based on content height
        },
      },
      animation: {
        'scroll-vertical': 'scroll-vertical 10s linear infinite',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
