/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins"],
        cormo: ["Cormorant"],
      },
      colors: {
        primary: "#DAE9FF",
        secondary: "#0066FF",
        accent: "#FFAA00",
      },
      backgroundImage: {
        hero: "url('/images/bg-hero.png')",
      },
    },
  },
  plugins: [],
};
