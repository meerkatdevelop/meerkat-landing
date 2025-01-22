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
        marquee: {
          to: { transform: 'translate(calc(-100% - 7.5rem))' },
        },
      },
      animation: {
        cbounce: 'cbounce 1s ease-in-out 1',
        marquee: 'marquee 16s reverse linear infinite',
      },
      fontFamily: {
        neueMontreal: ['neue'],
        newTitle: ['new'],
      },
      backgroundImage: {
        'mini-app': 'linear-gradient(180deg, #f2d39b 0%, #df974a 100%)',
      },
    },
    cursor: {
      meerkat: "url('/src/assets/cursor/Vector 1.svg'), default",
    },
  },
  plugins: [],
}
