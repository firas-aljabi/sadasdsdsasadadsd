/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'Nico-Moji': ['NicoMoji'], // 'Nico-Moji' is the name you'll use  
        'jua': ['jua'], 
      },
    },
  },
  plugins: [],
};
