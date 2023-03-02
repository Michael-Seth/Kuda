/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ["Muli", "sans-serif"],
    },
    fontSize: {
      base: "80%",
    },
    extend: {
      colors: {
        // Set default color to blue
        primary: "#40196d",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
