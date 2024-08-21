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
    fontSize: {
      '10-atom': ['10px', {
        lineHeight: '14px',
        fontWeight: '600'
      }],
      '12-omega': ['12px', {
        lineHeight: '18px',
        fontWeight: '600'
      }],
      '14-sigma': ['14px', {
        lineHeight: '20px',
        fontWeight: '600'
      }],
      '16-omicron': ['16px', {
        lineHeight: '24px',
        fontWeight: '600'
      }],
      '18-lambda': ['18px', {
        lineHeight: '26px',
        fontWeight: '600'
      }],
      '20-kappa': ['20px', {
        lineHeight: '30px',
        fontWeight: '600'
      }],
      '24-zeta': ['24px', {
        lineHeight: '36px',
        fontWeight: '600'
      }],
      '30-epsilon': ['30px', {
        lineHeight: '44px',
        fontWeight: '600'
      }],
      '36-delta': ['36px', {
        lineHeight: '54px',
        fontWeight: '600'
      }],
      '48-gamma': ['48px', {
        lineHeight: '72px',
        fontWeight: '600'
      }],
      '60-beta': ['60px', {
        lineHeight: '90px',
        fontWeight: '600'
      }],
      '72-alpha': ['72px', {
        lineHeight: '108px',
        fontWeight: '600'
      }],
    },
    extend: {},
  },
  plugins: [],
}

