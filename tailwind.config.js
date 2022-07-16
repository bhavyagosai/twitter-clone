/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        zero: '0px',
      },
      fontSize: {
        xtrasmall: '0.7rem',
        xsbase: '0.8rem',
        smbase: '0.93rem',
      },
      fontFamily: {
        SegoeUI: ['Segoe UI', 'sans-serif'],
        Chirp: ['Chirp', 'sans-serif'],
      },
      spacing: {
        15: '3.75rem',
        17: '4.75rem',
        18: '5rem',
        66: '16.5rem',
        68: '17rem',
        88: '22rem',
        92: '23rem',
        96: '24rem',
        100: '25rem',
        104: '26rem',
        112: '28rem',
        120: '30rem',
        128: '32rem',
        136: '34rem',
        144: '36rem',
        152: '38rem',
        160: '40rem',
        248: '62rem',
        252: '63rem',
        256: '64rem',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    },
    require('daisyui'),
    require('tailwind-scrollbar-hide'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#1D9BF0',
          'primary-content': '#FFFFFF',
          secondary: '#EF9FBC',
          'secondary-content': '#71767B',
          accent: '#202327',
          'accent-content': '#16181C',
          neutral: '#291334',
          // 'neutral-content': '#FF0000',
          'base-100': '#000000',
          'base-content': '#E7E9EA',
          info: '#3ABFF8',
          error: '#F91880',
          success: '#00BA7C',
          warning: '#FBBD23',
          like: '#F91880',
          retweet: '#00BA7C',
        },
      },
    ],
  },
};
