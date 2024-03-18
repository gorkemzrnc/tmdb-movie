/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        headerColor: 'rgb(38, 50, 56)',
        secondaryHeaderColor: 'rgb(55, 71, 79)'
      },
    },
  },
  plugins: [],
}