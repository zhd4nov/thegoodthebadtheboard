module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    flexGrow: {
      10: 0.1,
      20: 0.2,
      DEFAULT: 1,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
