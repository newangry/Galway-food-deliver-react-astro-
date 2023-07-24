/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica Neue", ...defaultTheme.fontFamily.sans],
        righteous: ["Righteous", "Helvetica Neue", ...defaultTheme.fontFamily.sans],
      },
      dropShadow: {
        "light": [
              "-1px 0px 10px #afafaf",
              "1px 1px 1px #afafaf",
              "1px 2px 1px #adadad",
              "1px 3px 1px #acacac",
              "1px 4px 1px #9f9f9f",
              "1px 5px 1px #9f9f9f",
              "1px 6px 1px #9c9c9c",
              "rgba(16, 16, 16, 0.4) 1px 14px 6px",
              "rgba(16, 16, 16, 0.2) 1px 17px 10px",
              "rgba(16, 16, 16, 0.3) 1px 20px 20px",
              "rgba(16, 16, 16, 0.4) 1px 23px 10px",
              "-0.15em -0.1em 150px #ffffff",
        ]
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
