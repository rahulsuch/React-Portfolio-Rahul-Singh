/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      zIndex: {
        '-10': '-10',
        '-20': '-20', // allows layering behind everything
      },
      transitionDuration: {
        700: '700ms', // for smoother background transitions
      },
      colors: {
        // optional custom palette for future UI tweaks
        lightBase: '#f7f5f2',
        lightLayer: '#e7e5e4',
        darkBase: '#0f0f0f',
        darkLayer: '#1c1917',
      },
    },
  },
  plugins: [],
};
