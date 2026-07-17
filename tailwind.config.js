/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef9ff',
          100: '#d9f1ff',
          200: '#bce7ff',
          300: '#8ed8ff',
          400: '#59c0ff',
          500: '#33a4f7',
          600: '#1d84e6',
          700: '#176bc3',
          800: '#19589e',
          900: '#1b4b7e',
          950: '#142f50',
        },
        accent: {
          50: '#e7fbf4',
          100: '#c5f5e7',
          200: '#90e9d2',
          300: '#50d6b8',
          400: '#25bd9c',
          500: '#12a284',
          600: '#08826b',
          700: '#066856',
          800: '#075347',
          900: '#06453c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
