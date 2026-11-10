import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0fdf4",
          100: "#dcfce7",
          500: "#20B477",
          600: "#16a34a",
          700: "#2D8654",
          800: "#103D2B",
          900: "#09261a",
        },
      },
    },
  },
  plugins: [],
};

export default config;
