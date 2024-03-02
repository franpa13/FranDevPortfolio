/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      transitionDuration: {
        '2000': '2000ms',
      },

      translate: {
        '4.25': '17rem',
      },


    },
    
  },
  plugins: [animations],
}