/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      screens: {
        xs: '0', // mobile xs
        sm: '360px', // mobile
        md: '720px', // tablet
        lg: '1024px', // desktop s
        xl: '1440px', // desktop
        'down-xs': {max: '359.98px'},
        'down-sm': {max: '719.98px'},
        'down-md': {max: '1023.98px'},
        'down-lg': {max: '1439.98px'},

        portrait: {raw: '(max-width: 719.98px) and (max-aspect-ratio: 13/9) and (orientation: portrait)'},
        landscape: {raw: '(max-width: 1023.98px) and (min-aspect-ratio: 13/9)'},
        mobile: {
          raw: '(max-width: 719.98px) and (max-aspect-ratio: 13/9), (max-width: 1023.98px) and (min-aspect-ratio: 13/9)',
        },
        tablet: {
          raw: '(min-width: 719.98px) and (max-width: 1023.98px)',
        },
        'tablet-mobile': {
          raw: '(max-width: 719.98px) and (max-aspect-ratio: 13/9), (max-width: 1023.98px) and (min-aspect-ratio: 13/9), (max-aspect-ratio: 13/9) and (min-width: 719.98px) and (max-width: 1023.98px)',
        },
      },
    }
  },
  plugins: [],
}

