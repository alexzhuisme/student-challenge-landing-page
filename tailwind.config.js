module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: {
          light: '#ffa400',
          dark: '#ff6f00',
          base: '#FF6F00',
          card: '#F98410'
        },
        blue: {
          discord: '#5865F2',
          background: '#D4EDF2',
          title: '#25383F',
          card: '#7C9498'
        }

      },
      fontFamily: {
        'open-sans': ['Open Sans', 'Arial', 'sans-serif']
      },
      spacing: {
        '18': '4.5rem',
        '50': '12.5rem',
        '70': '17.5rem',
        '108': '30rem',
        '120': '33rem',
        '128':'34rem',
        '132': '36rem',
        '560px': '35rem',
        '1040px': '65rem',
        '1440px': '90rem'
      },
      backgroundImage: theme => ({
        'right-arrow': "url('./img/arrow-right.svg')",
        'right-arrow-black': "url('./img/arrow-right-black.svg')"
      }),
      backgroundPosition: {
        'right-4': 'right 1.5rem center',
        'right-2': 'right 1rem center',
      },
      fill: theme => ({
        'red': theme('colors.red.500'),
        'green': theme('colors.green.500'),
        'blue': theme('colors.blue.500'),
        'black': theme('colors.black')
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
