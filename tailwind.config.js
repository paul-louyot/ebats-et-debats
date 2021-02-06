module.exports = {
  purge: {
    mode: "all",
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {},
    },
    fontFamily: {
      'serif': ['Lora', 'ui-serif', 'Georgia', 'Cambria'],
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
