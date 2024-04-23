/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,tsx,ts}',
    './android/app/src/Component/**/*.{js,jsx,ts,tsx}',
    './android/app/src/Pages/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6B34BC',
        secondary: '#EFF1FA',
        subText: '#8389A8',
        dark: '#000000',
        accent: '#B4D5EE',
      },
    },
  },
  plugins: [],
};
