/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primarybg: "#fff",
        secondarybg: "#EC1B09",
      },
      fontFamily: {
        primary: ["Poppins"],
      },
    },
  },
  plugins: [],
};
