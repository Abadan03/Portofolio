/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./views/home.ejs"],
  mode: "jit",
  theme: {
    extend: {
      padding: {
        "5px": "5px",
        "25px": "25px",
      },
      fontFamily: {
        Ramaraja: ["Ramaraja", "serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
