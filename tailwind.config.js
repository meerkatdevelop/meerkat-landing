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
    },
    cursor: {
      meerkat: "url('/src/assets/cursor/Vector 1.svg'), default",
    },
    //Screen Over the design 1440px - shorthand od
    screens: {
      od: '1440px',
    },
  },
  plugins: [],
}
