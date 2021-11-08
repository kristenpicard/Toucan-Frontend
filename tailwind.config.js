module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        base: "'Work Sans', sans-serif",
        assistant: "'Assistant', sans-serif",
      },
      colors: {
        ivory: "#fdfff2",
        dark: "#000000",
        blue: "#05a9b7",
        orange: "#f76f00",
        red: "#831d2b",
        green: "#c7e700",
        mustard: "#d7d000",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
