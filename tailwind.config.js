/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        aboutColor: '#FFCC8D',
      },
    },
    
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

