/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f4f5f7',
          100: '#e3e6eb',
          200: '#c8cdd7',
          300: '#a1abbc',
          400: '#75839b',
          500: '#54637d',
          600: '#424f66',
          700: '#354054',
          800: '#2d3546',
          900: '#282e3c',
          950: '#1a1d26',
        },
        accent: {
          50: '#f4f7f4',
          100: '#e5ece4',
          200: '#cbdac9',
          300: '#a5c0a3',
          400: '#7ba078',
          500: '#668761',
          600: '#476844',
          700: '#395337',
          800: '#2e432c',
          900: '#273826',
          950: '#131e13',
        },
        neutral: {
          50: '#f9f9fb',
          100: '#f3f4f6',
          200: '#e9eaef',
          300: '#d7d9e3',
          400: '#bec1cf',
          500: '#9ca0b8',
          600: '#7c809c',
          700: '#696c85',
          800: '#4d505f',
          900: '#3b3d49',
          950: '#25262e',
        },
      },
      fontFamily: {
        heading: ['Arial', 'Helvetica', 'sans-serif'],
        sans: ['Arial', 'Helvetica', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'hero-pattern': "url('/hero.webp')",
      },
    },
  },
  plugins: [],
};