import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bellefair: ["var(--font-bellefair)", "serif"],
        barlow: ["var(--font-barlow-condensed)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
