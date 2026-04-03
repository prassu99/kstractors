import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        /** Poppins — clean retail sans common on Mahindra digital properties */
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        /** Dark retail shell: light text + Mahindra red — white logo assets stay readable */
        tractors: {
          primary: '#e31837',
          'primary-content': '#ffffff',
          secondary: '#f5f5f5',
          'secondary-content': '#171717',
          accent: '#128c7e',
          'accent-content': '#ffffff',
          neutral: '#0a0a0a',
          'neutral-content': '#e5e5e5',
          'base-100': '#161616',
          'base-200': '#1f1f1f',
          'base-300': '#2e2e2e',
          'base-content': '#ececec',
          info: '#38bdf8',
          success: '#22c55e',
          warning: '#f59e0b',
          error: '#ef4444',
        },
      },
    ],
    logs: false,
  },
}
