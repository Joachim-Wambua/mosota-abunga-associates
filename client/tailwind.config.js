/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'maroon_base': "#AC2333",
        'maroon_dark': "accent",
      },
    },
  },
  plugins: [],
};
