/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        charm: {
          '50': '#fcf4f5',
          '100': '#f9eaec',
          '200': '#f4d7de',
          '300': '#ebb6c2',
          '400': '#df8da1',
          '500': '#d16b86',
          '600': '#b9456a',
          '700': '#9b3558',
          '800': '#822f4e',
          '900': '#702b46',
          '950': '#3d1423',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

