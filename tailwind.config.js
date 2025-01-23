/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          to: { transform: 'translate(calc(-100% - 9.5rem))' },
        },
      },
      animation: {
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
