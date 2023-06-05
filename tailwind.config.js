/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Kanit','Roboto'],
        body: ['Sarabun'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'purple': '#AA6DAB',
        'dimviolet': '#645CA7'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

