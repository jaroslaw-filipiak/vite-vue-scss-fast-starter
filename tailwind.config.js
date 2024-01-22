/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './typo.html',
    './src/**/*.{vue,js,ts,jsx,tsx,html}',
  ],
  theme: {
    colors: {
      light: '#F9F2E5',
      dark: '#323232',
      dark2: '#9F9F9F',
      darkMain: '#1E1E1E',
      gray: '#777777',
      red: '#EF4123',
      black: '#000',
      white: '#fff',
    },
    extend: {},
  },
  plugins: [
    require('tailwindcss-fluid-type')({
      settings: {
        fontSizeMin: 1,
        fontSizeMax: 1.34,
        ratioMin: 1.125,
        ratioMax: 1.2,
        screenMin: 20,
        screenMax: 96,
        unit: 'rem',
        prefix: 'fluid-',
      },
      values: {
        // ...
        base: 0,
        // ...
      },
    }),
  ],
  variants: {
    fluidType: ['responsive'],
  },
};
