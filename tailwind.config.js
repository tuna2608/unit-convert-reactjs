/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'img1': "url('img/img1.png')",
      }
    },
  },
  plugins: [],
}
