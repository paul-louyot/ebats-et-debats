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
      colors: {
        green: {
          dark: '#7EBC89',
          light: '#C1DBB3',
        },
        lemon: {
          DEFAULT: '#FAEDCA'
        },
        blue: '#009DDC',
        black: '#000505',
        byzantium: '#7A3B69'
      },
    },
    fontFamily: {
      'serif': ['Lora', 'ui-serif', 'Georgia', 'Cambria'],
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
