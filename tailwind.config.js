/** @type {import('tailwindcss').Config} */

export default {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],  // Add custom font family
      },
      scrollbar: {
        thumb: 'bg-gray-900 hover:bg-gray-700',
        track: 'bg-gray-200',
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.scrollbar-thin': {
          'scrollbar-width': 'thin',
        },
        '.scrollbar-none': {
          'scrollbar-width': 'none',
        },
        '.scrollbar-rounded': {
          'scrollbar-width': 'thin',
          '&::-webkit-scrollbar-thumb': {
            borderRadius: '9999px',
          },
        },
      })
    },
  ],
}

