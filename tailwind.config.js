/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "zsmbk-draco": ["ZSMBK Draco", "Arial", "Helvetica", "sans-serif"],
        "dm-sans-regular": [
          "DM Sans Regular",
          "Arial",
          "Helvetica",
          "sans-serif",
        ],
        "dm-sans-bold": ["DM Sans Bold", "Arial", "Helvetica", "sans-serif"],
        "dm-sans-black": ["DM Sans Black", "Arial", "Helvetica", "sans-serif"],
        "dm-sans-italic": [
          "DM Sans Italic",
          "Arial",
          "Helvetica",
          "sans-serif",
        ],
      },
      colors: {
        "zsmbk-blue": "#54C1E6",
        "zsmbk-golden": "#FEBB01",
        "zsmbk-green": "#52BE00",
      },
    },
  },
  plugins: [],
};
