/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "page-title": ['Rancho', 'cursive'],
        "other-font": ['Raleway', 'sans-serif']
      }
    },
  },
  plugins: [require("daisyui")],
}

