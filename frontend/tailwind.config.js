module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    gradientColorStops: theme => ({
      ...theme('colors'),
      'start': '#65dfc9',
      'end':'#6cdbeb'
    }),
    fill: theme => ({
      'red': theme('colors.red.500'),
      'green': theme('colors.green.500'),
      'blue': theme('colors.blue.500'),
    }),
    extend: {
     
    },
  },
  variants: {
    extend: {backgroundColor: ['active'],},
  },
  plugins: [],
  important:true,
}
