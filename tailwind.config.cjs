/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primaryRed: 'hsl(0, 100%, 68%)',
        darkBlue: 'hsl(230, 29%, 20%)',
        grayBlue: {
          100: 'hsl(207, 33%, 95%)',
          500: 'hsl(231, 7%, 65%)',
          900: 'hsl(230, 11%, 40%)',
        }
      },
      fontFamily: {
        'sans': ['Barlow', ...defaultTheme.fontFamily.sans],
      }
    },
    fontSize: {
      base: '18px',
    },
  },
  plugins: [],
}
