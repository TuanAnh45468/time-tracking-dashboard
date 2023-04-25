/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    colors:{
      blue: "hsl(246, 80%, 60%)",
      "soft-blue": "hsl(195, 74%, 62%)",
      "deep-blue": "hsl(226, 43%, 10%)",
      "dark-blue": "hsl(235, 46%, 20%)",
      "desaturated-blue": "hsl(235, 45%, 61%)",
      "pale-blue": "hsl(236, 100%, 87%)",
      "light-red-work": "hsl(15, 100%, 70%)",
      "light-red-study": "hsl(348, 100%, 68%)",
      "lime-green": "hsl(145, 58%, 55%)",
      "violet": "hsl(264, 64%, 52%)",
      "soft-orange": "hsl(43, 84%, 65%)",
    },
    screens:{
      mobile: "375px",
      laptop: "1440px"
    },

    extend: {
      fontFamily:{
        "rubik": ['Rubik', 'sans-serif']
      },

      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500
      }
    },
  },
  plugins: [],
}

