import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Source Sans 3"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        tractors: {
          primary: '#2d5a3d',
          'primary-content': '#f5faf6',
          secondary: '#b45309',
          'secondary-content': '#fffbeb',
          accent: '#128c7e',
          'accent-content': '#ffffff',
          neutral: '#292524',
          'neutral-content': '#e7e5e4',
          'base-100': '#faf8f5',
          'base-200': '#f0ebe3',
          'base-300': '#ddd5c9',
          'base-content': '#1c1917',
          info: '#1d4ed8',
          success: '#166534',
          warning: '#b45309',
          error: '#b91c1c',
        },
      },
    ],
    logs: false,
  },
}
