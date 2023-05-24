/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      colors: {
        mainBgColor: '#FCF7E6',
        singUpColor: '#ED5E21'
      },
      screens: {
        sm: '390px',
        md: '768px',
        lg: '1028px',
        xl: '1440px'
      }
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
  ],
}

