/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: { DEFAULT: '#FAF8F5', dark: '#F0EBE3' },
        warm: { DEFAULT: '#C08552', dark: '#9A6B3D', light: '#D4A574' },
        charcoal: '#1A1A1A',
        muted: '#6B6B6B',
        border: '#E8E0D8',
        card: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
