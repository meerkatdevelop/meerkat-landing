/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          // '25%': { transform: 'scale(0.9, 1,1)' },
          '50%': { transform: 'translateY(5px)' },
          // '75%': { transform: 'scale(0.95, 1,05)' },
        },
      },
      animation: {
        cbounce: 'cbounce 1s ease-in-out 1',
      },
      fontFamily: {
        neueMontreal: ['neue'],
        newTitle: ['new'],
      },
    },
    cursor: {
      meerkat: "url('/src/assets/cursor/Vector 1.svg'), default",
    },
  },
  plugins: [],
}
