/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
          fontFamily:{
       poppins:['Poppins','sans-serif'],
       title_font:["Sriracha",'cursive']
      },
      cursor: {
        'custom': 'url("cursor2.cur"),pointer', // Use a custom cursor image if desired
      },
      colors:{
        'primary':'#faf0e6',
        'secondary':'#8AB0AB',
        'night':'#231e23'
      }
    },
  },
  plugins: [],
}

