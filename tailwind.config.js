/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
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
      colors: {
        theme: "#A7D2CB",
        fontText: "#874C62",
      },
      width: {
        "20px": "20px",
      },
      maxWidth: {
        "2xl": "30px",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
