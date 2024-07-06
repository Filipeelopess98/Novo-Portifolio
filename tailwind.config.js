/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#164686',
        'custom-purple': '#160b3f',
        'custom-black': '#010005',
      },
      boxShadow: {
        'custom-purple': '0 4px 6px rgba(108, 58, 224, 0.5)',
      },
      fontFamily: {
        'great-vibes': ['"Great Vibes"', 'cursive'],
        'bangers': ['"Bangers"', 'system-ui'],
        'poppins': ['"Poppins"', 'sans-serif'],
      },
      fontSize: {
        '10px': '10px',
        '12px': '12px',
        '14px': '14px',
        '16px': '16px',
        '18px': '18px',
        '20px': '20px',
        '24px': '24px',
        '28px': '28px',
        '32px': '32px',
        '36px': '36px',
        '40px': '40px',
        '48px': '48px',
        '56px': '56px',
        '64px': '64px',
        '72px': '72px',
      },
    },
  },
  plugins: [],
}
