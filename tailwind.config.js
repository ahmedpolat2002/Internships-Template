/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    extend: {
      spacing: {
        "12px": "12px",
        "24px": "24px",
      },
      boxShadow: {
        cardShadow: "0px 8px 36px 0px rgba(51, 51, 51, 0.08);",
        cardShadowDark: "0px 0px 25px rgba(255, 255, 255, 0.08);",
      },
    },
    colors: {
      white: "#FFF",
      whiteColor: "#ECF8FF",
      primaryColor: "#323232",
      yellowColor: "#F9B013",
      yellowAltColor: "#FFF1D380",
      blueColor: "#3795CF",
      blueAltColor: "#A3DCFF",
      blueBoldColor: "#1813F9",
      blueAltBoldColor: "#D9D3FF80",
      purpleColor: "#7813F9",
      purpleAltColor: "#ECD3FF80",
      pinkColor: "#F913C6",
      pinkAltColor: "#FFD3F080",
      redColor: "#F91313",
      redAltColor: "#FFD3D380",
      fillColor: "#BFE6FF;",
      grayText: "#909090;",
      gray: "#BBBBBB;",
      grayAlt: "#F1F1F1;",
      placeholderColor: "#A1B8C6",
      gradient1: "#2C88C1",
      gradient2: "#70C8FF",
    },
    fontFamily: {
      Rubik: ["Rubik", "sans-serif"],
    },
  },
  plugins: [],
};
