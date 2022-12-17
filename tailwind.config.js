/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  safelist: [
    "rc-pagination-item",
    "rc-pagination-item-active",
    "rc-pagination-prev",
    "rc-pagination-next",
    "rc-pagination-disabled",
    "swiper",
    "swiper-slide",
    "swiper-slide-active",
    "swiper-pagination",
    "swiper-pagination-bullet",
    "swiper-pagination-bullet-active",
  ],
  plugins: [require("@tailwindcss/line-clamp"), require("daisyui")],
};
