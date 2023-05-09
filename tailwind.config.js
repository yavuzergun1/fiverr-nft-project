/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(82.57% 82.57% at 50% 50%, rgba(0, 85, 255, 0.32) 0%, rgba(217, 217, 217, 0) 100%)",
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      dmSans: ["DM Sans", "sans-serif"],
    },
  },
  plugins: [],
};

