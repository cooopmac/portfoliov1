/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-grey": "#9CA3AF",
      },
      backgroundImage: {
        background: "url('/src/assets/background.png')",
      },
    },
  },
  plugins: [],
};
