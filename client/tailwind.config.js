/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cinder: "#141417",
        night: "#0b0b0b",
        blackgreen: "#121913",
        blackred: "#1b100f",
        blackjungle: "#1c1c20",
        blue: "#007cc3",
        green: "#36C190",
        red: "#ff4b4b",
        yellow: "#E09F1F",
        gray: "#7d7d7d",
      },
      fontFamily: {
        sourcecode: ["Source Code Pro"],
      },
    },
  },
  plugins: [],
};
