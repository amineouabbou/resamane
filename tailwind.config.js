/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#023141',
        secondary: '#FBCD33',
        lightblue: '#00B1B7',
        textcolor: '#084C64',
      },
      clipPath: {
        left: 'polygon(0 0, 100% 0, 100% 100%, 5% 100%)',
      },

      container: {
        padding: {
          DEFAULT: '1rem',
        },
      },

      fontFamily: {
        'proxima-nova': ['proxima-nova'],
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1280px',
          },
          '@screen xl': {
            maxWidth: '1420px',
          },
        },
      })
    },
  ],
}
