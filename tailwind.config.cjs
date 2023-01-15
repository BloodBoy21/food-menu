/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sofiaSerif: ['Sofia Pro', 'sans-serif'],
        bungee: ['Bungee', 'cursive'],
        righteous: ['Righteous', 'sans-serif'],
        secular: ['Secular One', 'sans-serif']
      },
      colors: {
        primary: 'hsl(0, 0%, 100%)'
      }
    }
  },
  plugins: []
}
