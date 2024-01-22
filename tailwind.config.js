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
    },
    extend: {},
  },
  plugins: [],
};
