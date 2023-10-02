/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './content/**/*.md'
  ],
  theme: {
    extend: {
      colors: {
        'purple': '#5740CE',
        'white': '#FFFFFF',
        'dark': '#1E1E1E'
      }
    }
  },
  darkMode: 'class',
  plugins: [],
}
