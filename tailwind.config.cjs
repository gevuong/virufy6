const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '400px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)', ...fontFamily.sans],
      },
      backgroundImage: {
        'publications-header':
          'url(../assets/static/images/OurPublications/phone_header.png)',
        // 'publications-header':
        //   'url(../assets/static/images/OurPublications/phone_header.png), linear-gradient(to bottom, black, #162b4c)',
        'publications-body':
          'url(../assets/static/images/OurPublications/hexagon_dotted_background.png)',
        // 'publications-body':
        //   'url(../assets/static/images/OurPublications/hexagon_dotted_background.png), linear-gradient(to bottom, #162b4c, #3468b2)',
      },
    },
  },
  plugins: [],
}
