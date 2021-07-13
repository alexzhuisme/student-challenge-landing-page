module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: {
          light: '#ffa400',
          dark: '#ff6f00'
        },
        blue: {
          discord: '#5865F2'
        }
      },
      fontFamily: {
        'open-sans': ['Open Sans', 'Arial', 'sans-serif']
      },
      spacing: {
        '128':'34rem'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
