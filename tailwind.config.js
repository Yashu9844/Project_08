/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: [' font2', 'sans-serif'],
        custom1: [' font1', 'sans-serif'],
      },
      
    },
  },
  plugins: [
   
  ],
}

