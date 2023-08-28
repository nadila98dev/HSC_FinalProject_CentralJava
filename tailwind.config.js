/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primarybg: "#fff",
        secondarybg: "#EC1B09",
        btn_color: "#1D764D", 
      },
      fontFamily: {
        secondary: ['Lora'],
        primary: ["Poppins"],
      },
    },
  },
  plugins: [],
};
