/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        "custom-80": "500px",
        "custom-max": "1400px",
      },
      height: {
        "custom-80": "500px",
        "custom-max": "650px",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        amsterdam: ['"New Amsterdam"', "sans-serif"],
        lato: ["Lato", "sans-serif"],
        // system: ["Roboto", "system-ui"],
      },
    },
  },
  plugins: [],
};
