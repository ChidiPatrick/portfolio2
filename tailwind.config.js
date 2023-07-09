/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "port-gray": "#c4c4c4",
        "port-pink": "#8000ff",
        "port-light-pink": "#cf59e6",
        "port-light-blue": "#6bc5f8",
        "card-grad-from": "#232531",
        "card-grad-to": "#0f0f18",
      },
    },
  },
  plugins: [],
};
