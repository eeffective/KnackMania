const { chdir } = require("process");

module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        shark: "#1c1d21",
        "shark-lighter": "#24272e",
        "shark-nav": "#2e3034",
        "sunset-orange": "#fe584a", // red gradient 1/2
        froly: "#f1867d", // red gradient 2/2
        "purple-heart": "#791ec0", // purple gradient 1/2
        heliotrope: "#b75dfe", // purple gradient 1/2
        "egg-blue": "#02bcba", // blue/green gradient 1/2
        "spring-green": "#37f087", // blue/green gradient 2/2
      },
      linearGradientDirections: {
        t: "to-top",
      },
      linearGradientColors: {
        "sunset-froly": ["#fe584a", "#f1867d"],
      },
      stroke: {
        "sunset-orange": "#fe584a",
        white: "#fff",
      },
      strokeWidth: {
        "8": "8",
      },
      fontFamily: {
        serif: "Montserrat",
      },
      fontSize: {
        xxs: ".4em",
      },
      width: {},
      letterSpacing: {
        "wide-title": "0.15em",
      },
      spacing: {
        "2rem": "2rem",
        "point6": "0.6em"
      },
      minHeight: {
        screen: "100vh",
      },
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        "4/5": "80%",
      },
      borderRadius: {
        "1": "1rem",
      },
      fill: {
        none: "none",
        white: "#fff",
      },
      inset: { "50": "50" },
    },
  },
  variants: {},
  plugins: [require("tailwindcss-gradients")],
};
