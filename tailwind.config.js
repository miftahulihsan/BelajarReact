/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'lime': { 
        10: '#E6F6EA',
        20: '#99DCAB',
        40: '#40BD63',
        50: '#00AB4E',
        60: '#00883E',
        80: '#00662E',
        90: '#00441F',
      },
      'neutral': { 
        10: '#F8F8F8',
        20: '#EEEEEF',
        40: '#BBBDC0',
        50: '#939597',
        60: '#58585B',
        80: '#252528',
      },
      'red': { 
        10: '#F9E7E8',
        20: '#E89FA1',
        40: '#D44C50',
        50: '#AE1E22',
        60: '#8B181B',
        80: '#681214',
        90: '#450C0D'
      },
    },
    extend: {},
  },
  plugins: [],
}

