/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './pricing.html',
    './about.html',
    './websites.html',
    './grid.html',
    './kontakt.html',
    './typo.html',
    './src/**/*.{vue,js,ts,jsx,tsx,html}',
  ],
  theme: {
    colors: {
      light: '#F9F2E5',
      dark: '#323232',
      dark2: '#9F9F9F',
      dark3: '#262626', //footer
      darkMain: '#1E1E1E',
      gray: '#777777',
      red: '#EF4123',
      black: '#000',
      white: '#fff',
      green: '#00CE7B',
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1736px',
      // => @media (min-width: 1736px) { ... }
      '3xl': '2400px',
    },
    extend: {
      fontSize: {
        '1-75rem': '1.75rem',
        '2-75rem': '2.75rem',
      },
    },
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
        '3rem': 3,
        '4-717rem': 4.717, // 38px on 2xl
        '3xl': [4, 1.4],
        '5xl': [6, 1.4],
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
