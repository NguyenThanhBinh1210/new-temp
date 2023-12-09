/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        tada: 'tada 1.2s ease infinite',
        tada2: 'tada2 1.2s ease infinite'
      },
      keyframes: {
        tada: {
          '0%': { transform: 'scale(1) rotate(0deg)' },
          '10%': { transform: 'scale(1.1) rotate(-3deg)' },
          '20%': { transform: 'scale(1.2) rotate(-3deg)' },
          '30%': { transform: 'scale(1.2) rotate(3deg)' },
          '40%': { transform: 'scale(1.2) rotate(-3deg)' },
          '50%': { transform: 'scale(1.2) rotate(3deg)' },
          '60%': { transform: 'scale(1.2) rotate(-3deg)' },
          '70%': { transform: 'scale(1.2) rotate(3deg)' },
          '80%': { transform: 'scale(1.2) rotate(-3deg)' },
          '90%': { transform: 'scale(1.1) rotate(3deg)' },
          '100%': { transform: 'scale(1) rotate(0deg)' }
        },
        tada2: {
          '0%': { transform: 'scale(1)' },
          '10%': { transform: 'scale(1.1) ' },
          '20%': { transform: 'scale(1.2) ' },
          '30%': { transform: 'scale(1.3)' },
          '40%': { transform: 'scale(1.4) ' },
          '50%': { transform: 'scale(1.5)' },
          '60%': { transform: 'scale(1.6) ' },
          '70%': { transform: 'scale(1.7)' },
          '80%': { transform: 'scale(1.8) ' },
          '90%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1)' }
        }
      }
    }
  },
  plugins: []
}
