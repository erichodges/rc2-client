module.exports = {
  purge: ["./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ["IBM Plex Sans"],
    },
    corePlugins: {
      // ...
      borderWidth: true,
    },
    extend: {
      colors: {
        blue: {
          100: "#cce4f6",
          200: "#99c9ed",
          300: "#66afe5",
          400: "#3394dc",
          500: "#0079d3",
          600: "#0061a9",
          700: "#00497f",
          800: "#003054",
          900: "#00812a",
        },
      },
      spacing: {
        70: "17.5rem",
        160: "40rem",
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
