/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './common/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        's-gray': {
          100: '#131619',
          80: '#353A3E',
          40: '#A3A9AF',
          20: '#DEE1E5',
          10: '#F2F4F8',
        },
        's-purple': {
          80: '#442086',
          60: '#8143F3',
        },
        's-blue': {
          60: '#2C61F5',
          40: '#5BAFF8',
        },
      },
    },
  },
  plugins: [],
};
