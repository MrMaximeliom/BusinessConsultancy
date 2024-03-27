/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        nile: {
          light: "#dce8f3",
          DEFAULT: "#346c9c",
          100: "#3976ab",
          200: "#2f628d",
          300: "#2a587f",
          400: "#254d70",
          500: "#204361",
          600: "#1b3952",
          700: "#172f44",
          800: "#122535",
        },
        night: {
          DEFAULT: "#24241c",
          700: "#191913",
          800: "#0E0E0B",
          900: "#030302",
        },
      },
    },
  },
  plugins: [],
};
