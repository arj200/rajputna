/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // <-- enable dark mode via a class
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          lighter: "#F9F7F7", // background
          light: "#DBE2EF",   // secondary
          primary: "#3F72AF", // accent
          dark: "#112D4E",    // text
        },
      },
    },
  },
  plugins: [],
}
