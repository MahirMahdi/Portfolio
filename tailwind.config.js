/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./fonts/CalibreLight.otf",
  ],
  theme: {
    extend: {
      fontFamily: {
        calibre: [
          "Calibre",
          "Inter",
          "San Francisco",
          "SF Pro Text",
          "-apple-system",
          "system-ui",
          "sans-serif",
        ],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        darkBlack: "#323130",
      },
    },
  },
  plugins: [
    // plugin(function ({ addBase, theme }) {
    //   addBase({
    //     h1: { fontSize: theme("fontSize.5xl") },
    //     h2: { fontSize: theme("fontSize.4xl") },
    //     h3: { fontSize: theme("fontSize.3xl") },
    //     h4: { fontSize: theme("fontSize.2xl") },
    //   });
    // }),
  ],
};
