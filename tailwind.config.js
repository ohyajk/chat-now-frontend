/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'prime-bg': '#242424',
        'sec-bg': '#181818',
      }
    },
  },
  plugins: [],
}

