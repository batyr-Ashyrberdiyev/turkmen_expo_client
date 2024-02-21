import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#202A33",
        blue: "#303F4D",
        darkBlue: "#202A33",
        whiteFont: "#F2F9FF",
        blackFont: "#0C0C0D",
        redFont: "#BC213A",
        purpleFont: "#61378A",
        bgWhite: "#F2F9FF",
      },
      fontSize: {
        extraSm: "13px",
      },
    },
  },
  plugins: [],
};
export default config;
