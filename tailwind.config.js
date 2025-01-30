/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 10s linear infinite',
        fadeIn: "fadeIn 0.5s ease-in-out",
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          "50%": { transform: "translateX(100%)" },
          '100%': { transform: 'translateX(-100%)' },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    }
  },
  plugins: [],
}