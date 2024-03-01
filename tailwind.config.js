/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["Pretendard", "sans-serif"],
      },
      padding: {
        "10p": "10%",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
      minWidth: {
        custom: "588px",
        slideWidth: "1070px",
      },
      minHeight: {
        custom: "426px",
      },
    },
  },
  plugins: [],
};
