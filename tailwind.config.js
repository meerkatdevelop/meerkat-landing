import { circle } from 'motion/react-client'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        neueMontreal: ['neue'],
        newTitle: ['new'],
      },
      backgroundImage: {
        presalecover: 'linear-gradient(180deg, #FFEFBD 32.89%, #FFF 100%)',
      },
    },
    cursor: {
      meerkat: "url('/src/assets/cursor/Vector 1.svg'), default",
    },
    //Screen Over the design 1440px - shorthand od
    screens: {
      od: '1440px',
      cutcover: '1190px',
    },
  },
  plugins: [],
}
