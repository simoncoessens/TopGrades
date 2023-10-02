const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./**/*.html"],
  safelist: ["active"],
  theme: {
    fontFamily: {
      header: ["Lobster Two", "cursive"],
      body: ["Montserrat", "sans-serif"],
    },

    screens: {
      xs: "375px",
      ...defaultTheme.screens,
    },

    colors: {
      transparent: "transparent",
      primary: "#09DCFB",
      secondary: "#0197F0",
      "blue-light": "#d7f5f6",
      blue: "#07CAFA",
      orange: "#ed8a19",
      yellow: "#ffd474",
      purple: "#560bad",
      neutrals: {
        l00: "#fafafa",
        l01: "#f5f5f5",
        l02: "#f3f3f3",
        l03: "#f1f1f1", //grey-lightest
        g01: "#d0d0d0", //grey-lighter
        g02: "#a2a2a2", //grey-light
        g03: "#5b5b5b", //grey
      },
      white: "#ffffff",
      black: "#000000",
    },

    container: {
      center: true,
      padding: "1rem",
    },

    minHeight: {
      0: "0px",
      full: "100%",
      screen: "100vh",
      "screen-30": "30vh",
      "screen-40": "40vh",
      "screen-45": "45vh",
      "screen-50": "50vh",
      "screen-60": "60vh",
      "screen-70": "70vh",
      "screen-80": "80vh",
      "screen-85": "85vh",
      "screen-90": "90vh",
    },

    extend: {
      spacing: {
        68: "17rem",
        76: "19rem",
        84: "21rem",
        100: "25rem",
        108: "27rem",
        120: "30rem",
        124: "31rem",
        128: "32rem",
        132: "33rem",
        140: "35rem",
        144: "36rem",
        160: "40rem",
        232: "58rem",
      },

      width: {
        "7/25": "28%",
      },

      zIndex: {
        "-1": "-1",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
