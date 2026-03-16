/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#ffffff",
        primary: {
          DEFAULT: "#0077ff",
          foreground: "#ffffff",
        },
        accent: {
          blue: "#0f93ff",
          purple: "#8f37ff",
        },
      },
      fontFamily: {
        sans: ["Clash Grotesk", "Inter", "sans-serif"],
      },
      backgroundImage: {
        'glass-gradient': 'radial-gradient(25% 50% at 50% 100%, rgb(15, 147, 255) 0%, rgba(255, 255, 255, 0) 100%)',
        'blue-gradient': 'linear-gradient(270deg, rgb(51, 194, 255) 0%, rgb(0, 119, 255) 100%)',
      },
    },
  },
  plugins: [],
}
