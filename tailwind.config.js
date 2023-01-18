/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#050303',
        'secondary': '#111111',
        'blue-01': '#2e51a2'
      }
    },
  },
  plugins: [],
}
