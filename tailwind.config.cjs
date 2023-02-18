/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        melody: ['"Hi Melody"', 'cursive'],
      },
    },
  },
  plugins: [],
};
