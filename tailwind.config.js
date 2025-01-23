/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: 'rgb(0, 64, 122)', 
        magenta: 'rgb(246, 1, 255)'
      },
    },
  },
  plugins: [],
};
