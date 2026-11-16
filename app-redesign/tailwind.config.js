/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        fap: {
          bg: '#F8F9FA',
          surface: '#FFFFFF',
          text: '#17191C',
          subtext: '#5E646F',
          border: '#EAECF0',
          orange: '#F36A21',
          orangeLight: '#FFF2EB',
          // Dark tokens
          darkBg: '#121316',
          darkSurface: '#1E2025',
          darkBorder: '#2A2D35',
          darkText: '#F3F4F6',
          darkSubtext: '#8E95A2',
          darkAlert: '#261C18',
        }
      },
      borderRadius: {
        'card': '16px',
        'subcard': '12px',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
