/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html, js}'],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'background': "url(/assets/loginpage-bg.jpeg)",
      })
    },
  },
  plugins: [],
}

