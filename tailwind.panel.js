module.exports = {
  mode: 'jit',
  purge: [
    './resources/assets/js/panel/**/*.vue',
    './resources/assets/js/panel/**/*.js',
  ],
  theme: {
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      white: '#fff',
      black: '#000',
      primary: {
        50: '#f4f8fc',
        100: '#e9f1f8',
        200: '#c9dbee',
        300: '#a8c5e4',
        400: '#679ad0',
        500: '#266ebc',
        600: '#2263a9',
        700: '#174271',
        800: '#113255',
        900: '#0b2138',
      },
      gray: {
        50: '#f9fafb',
        100: '#f4f5f7',
        200: '#e5e7eb',
        300: '#d2d6dc',
        400: '#9fa6b2',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#252f3f',
        900: '#161e2e',
      },
      red: {
        50: '#fdf2f2',
        100: '#fde8e8',
        200: '#fbd5d5',
        300: '#f8b4b4',
        400: '#f98080',
        500: '#f05252',
        600: '#e02424',
        700: '#c81e1e',
        800: '#9b1c1c',
        900: '#771d1d',
      },
      orange: {
        50: '#fff8f1',
        100: '#feecdc',
        200: '#fcd9bd',
        300: '#fdba8c',
        400: '#ff8a4c',
        500: '#ff5a1f',
        600: '#d03801',
        700: '#b43403',
        800: '#8a2c0d',
        900: '#73230d',
      },
      yellow: {
        50: '#fdfdea',
        100: '#fdf6b2',
        200: '#fce96a',
        300: '#faca15',
        400: '#e3a008',
        500: '#c27803',
        600: '#9f580a',
        700: '#8e4b10',
        800: '#723b13',
        900: '#633112',
      },
      green: {
        50: '#f3faf7',
        100: '#def7ec',
        200: '#bcf0da',
        300: '#84e1bc',
        400: '#31c48d',
        500: '#0e9f6e',
        600: '#057a55',
        700: '#046c4e',
        800: '#03543f',
        900: '#014737',
      },
      blue: {
        50: '#ebf5ff',
        100: '#e1effe',
        200: '#c3ddfd',
        300: '#a4cafe',
        400: '#76a9fa',
        500: '#3f83f8',
        600: '#1c64f2',
        700: '#1a56db',
        800: '#1e429f',
        900: '#233876',
      },
    },
    extend: {
      fontFamily: {
        sans: 'Inter',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}