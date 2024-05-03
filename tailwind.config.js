/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f3f6ff",
        main: "#3cbaf7",
        dark: "#262d35",
      },
      boxShadow: {
        default: "4px 4px 10px -4px #1c64f24d"
      }
    },
  },
  plugins: [],
}