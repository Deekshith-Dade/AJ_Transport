/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        'max-height': 'max-height',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

