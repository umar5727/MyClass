/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'rgba(6, 106, 201, 1)', //#066ac9
        'primarydark': '#222529',
        'primary-text-normal': '#747579',
        'primary-text-normal-dark': '#a1a1a8',
        'primary-text-heading': '#24292d',
        'primary-light': 'rgba(6, 106, 201, 0.1)',
        'primary-dark-hover': 'rgba(6, 106, 201, 0.2)',
        'primary-border-light': '#dde0e3',
        'primary-green': 'rgba(12, 188, 135, 1)',
        'primary-green-light': 'rgba(12, 188, 135, 0.1)',
        'primary-dark': 'rgba(36, 41, 45, 1)',
        'primary-yellow': 'rgba(247, 195, 46, 1)',
        'primary-yellow-light': 'rgba(247, 195, 46, 0.15)',
        'primary-purple': 'rgba(111, 66, 193, 1)',
        'primary-purple-light': 'rgba(111, 66, 193, 0.1)',
        'primary-info': 'rgba(23, 162, 184, 1)',
        'primary-info-light': 'rgba(23, 162, 184, 0.1)',
        'primary-grayText': '#747579',
        'light-line': '#dde0e3',
        'border-dark': 'rgba(255, 255, 255, 0.07)',
        'dark-nav': '#c5c6cc',
        'primary-odd': 'rgba(29, 59, 83, 1)',
        'primary-odd-light': 'rgba(29, 59, 83, 0.1)',
        'primary-danger': 'rgba(214, 41, 62, 1)',
        'card-dark-bg': '#1b1e21',
        'card-hover-bg': '#e3e3e3',
        'primary-orange': 'rgb(253, 126, 20)',
        'footer-light-bg': 'rgb(245, 247, 249)',
        'dark-bg-light': '#2a2c31',
        'primary-loading-bg': 'rgba(36, 41, 45, 0.4)'

      },
      transitionProperty: {
        'height': 'height',
      },
      flex: {
        '0': '0 0 auto',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'custom': '0 0 20px 0px rgba(29,58,83,0.15)',
        'more': '0 2 20px rgba(29,58,83,0.25)',
        'icon': '0px 0px 5px rgba(29,58,83,0.25)',
      },
    },
  },
  plugins: [],
}

