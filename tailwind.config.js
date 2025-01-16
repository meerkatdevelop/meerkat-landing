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
  },
  plugins: [],
}
