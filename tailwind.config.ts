import type { Config } from 'tailwindcss'

export default <Partial<Config>> {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './content/**/*.md'
  ],
  theme: {
    fontFamily: {
      nunito: ['Nunito', 'Nunito fallback']
    },
    extend: {
      fontSize: {
        'parent': 'inherit'
      },
      keyframes: {
        'wave': {
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(-14deg)' },
          '20%': { transform: 'rotate(8deg)' },
          '30%': { transform: 'rotate(-14deg)' },
          '40%': { transform: 'rotate(4deg)' },
          '50%': { transform: 'rotate(-10deg)' },
          '60%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' }
        }
      },
      animation: {
        'waving-hand': 'wave 2.5s 2.5s infinite'
      },
      minHeight: {
        'screen-16': 'calc(100vh - 4rem)',
        'screen-svh': '100svh',
        'screen-svh-16': 'calc(100svh - 4rem)'
      }
    }
  },
  darkMode: 'class',
  plugins: [],
}