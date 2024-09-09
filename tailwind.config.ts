import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffc202",
        white: "#f6f6f6",
        tertiary:"#000b35"
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
export default config;
