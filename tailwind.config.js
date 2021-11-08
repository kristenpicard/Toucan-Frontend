module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        base: "'Work Sans', sans-serif",
        assistant: "'Assistant', sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
