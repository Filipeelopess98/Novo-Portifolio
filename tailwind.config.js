/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#164686', 'custom-purple': '#221660', 'custom-black': '#010005',
      },
      boxShadow: {
        'custom-purple': '0 4px 6px rgba(108, 58, 224, 0.5)',

      },
    },
  },
  plugins: [],
}



