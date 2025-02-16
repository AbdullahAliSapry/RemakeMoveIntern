/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#ff2c1f",
        textColor: "#020307",
        bgColor: "#fff",
      },
    },
  },
  plugins: [],
};
