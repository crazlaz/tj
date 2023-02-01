/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    // Some useful comment
    fontFamily: {
      'nunito': ['Gorditas', 'sans-serif'],
      'MyFont': ['"My Font"', 'Gorditas'] // Ensure fonts with spaces have " " surrounding it.
    },
  },
  variants: {
    // Some useful comment
  },
  plugins: [
    // Some useful comment
  ]
}