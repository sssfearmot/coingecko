/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    colors: {
      '0.6': 'rgba(255,255,255, 0.6)',
      '0.24': 'rgba(255,255,255, 0.24)',
      '0.87': 'rgba(255,255,255, 0.87)',
      '0.05': 'rgba(255,255,255, 0.05)',
      '1': 'rgba(255,255,255, 1)',
      '121212': '#121212',
      '181818': '#181818',
      '4a4a4a': '#4a4a4a',
      '3f3f3f': '#3f3f3f',
      '7ab52b': '#7ab52b',
      'eee': '#eee',
      'e15241': '#e15241',
      'a71d2a': '#a71d2a',
      '8dc647': '#8dc647',
      'hsla-gray': 'rgba(107,114,128, 1)',
      'hsla-blue': 'rgba(59,130,246, 1)',
      'hsla-dark': 'hsla(0,0%,100%,.6)',
      'footer-dark': 'rgba(24,24,24, 1)',
      'boder-hsla-fff': 'hsla(0,0%,100%,.1)',
      'ddd': '#ddd',
      'white': '#fff',
      'slate-100': 'rgb(241 245 249)',
      'slate-200': 'rgb(203 213 225)',
      'slate-300': 'rgb(203 213 225)',
      'slate-600': 'rgb(71 85 105)',
      'slate-700': 'rgb(51 65 85)',
      'slate-800': 'rgb(15 23 42)',
      'black': 'rgb(0 0 0)',
      'blue-200': 'rgb(191 219 254)',
      'blue-300': 'rgb(147 197 253)',
      'blue-900': 'rgb(30 58 138)',
      'blue-400': 'rgb(96 165 250)',
      'blue-700': 'rgb(29 78 216)',
      'red-600': 'rgb(220 38 38)',
      'green-hover': '#8dc647',
      'green-500': 'rgb(34 197 94)',
      'green-600': 'rgb(22 163 74)',
      'gray-100': 'rgb(243 244 246)',
      'gray-300': 'rgb(209 213 219)',
      'gray-400': 'rgb(156 163 175)',
      'gray-500': 'rgb(107 114 128)',
      'gray-600': 'rgb(75 85 99)',
      'gray-700': ' rgb(55 65 81)',
      'gray-900': 'rgba(17,24,39, 1)',
      'sign-green': 'rgba(141,198,71, 1)',
      'inherit': 'inherit',
      'transparent': 'transparent',
      'primary-500': 'rgba(141,198,71, 1)',
      'opacity-12': '.12',
      'opacity-87': '.87',

    },

    screens: {
      'md': '768px',
      '1md': { 'max': '768px' },
      '1sm': '640px',
      'sm': { 'max': '992px' },
      '1lg': '992px',
      'lg': '1024px',
      'xl': { 'max': '1330px' },
      '1xl': '1280px',

    },


    extend: {
      width: {
        '17': '70px',
        '128': '1300px',
        '114': '1140px',
        '140': '1400px',
        '90': '90vw',
      },

      boxShadow: {
        'trand': '0 0 transparent, 0 0 transparent, 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%)',
      }
    },

    borderRadius: {
      '50': '50%',
      'xl': '0.75rem',
      'full': '9999px',
      'md': '0.375rem',
      'lg': '0.5rem',
      '2xl': '1rem',
    },

    animation: {
      'animation': 'animate 2s infinite linear',
    }
  },

  variants: {
    display: ['active']
  },

  plugins: [],
}
