/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F4F0FB',
          100: '#E6DCF6',
          200: '#D0B9EE',
          300: '#B996E5',
          400: '#9E6FD9',
          500: '#7C4CCB',
          600: '#5A31AE',
          700: '#3A1B75',
          800: '#2E155E',
          900: '#1F0E3F',
        },
        secondary: {
          50: '#FBF8FD',
          100: '#F3ECF9',
          200: '#E6DCF6',
          300: '#D7C6EF',
          400: '#C6A7E2',
          500: '#B28BD6',
          600: '#9A6BC6',
          700: '#7C4FA8',
          800: '#5E3A7D',
          900: '#3F2654',
        },
        accent: '#D6B4E8',
        'bg-main': '#FFFCFF',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
