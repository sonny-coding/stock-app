/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cinder: "#141417",
        night: "#0b0b0b",
        blackgreen: "#121913",
        green: "#73ff92",
        yellow: "#ffb400",
        gray: "#7d7d7d",
      },
      fontFamily: {
        sourcecode: ["Source Code Pro"],
      },
    },
  },
  plugins: [],
};
