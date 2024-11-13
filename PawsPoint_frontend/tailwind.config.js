/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
          fontFamily:{
       poppins:['Poppins','sans-serif']
      },
      cursor: {
        'custom': 'url("cursor.cur"),pointer', // Use a custom cursor image if desired
      },
      colors:{
        'primary':'#faf0e6',
        'secondary':'#8c764f',
        'night':'#231e23'
      }
    },
  },
  plugins: [],
}

