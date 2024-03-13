/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        order: "url('/../public/order.png')",
      },
      fontFamily: {
        Helvetica: ["Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
