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
        navyBlue: "#3C4F61",
        navyBlue2: "#3F464D",
        navyBlue3: "#486178",
        navyBlue4: "#5D6A77",
        navyBlue5: "#51606F",
        navyBlue6: "#6D7C8A",
        navyBlueBg: "#344350",
        green: "#059784",
        greenHover: "#A3CCC7",
        red: "#BC213A",
        black: "#0C0C0D",
        gray: "#8D9399",
        gray2: "#474A4D",
        gray3: "#8E9499",
        gray4: "#C2C7CC",
        grayGreen: "#50978E",
        lightGreen: "#06B29C",
        hoverGreen: "#B0E6A1",
        lightRed: "#F06C74",
        lightYellow: "#FFD288",
        darkBlue: "#202A33",
        primary: "#202A33",
        blueBg: "#303F4D",
        whiteFont: "#F2F9FF",
        blackFont: "#0C0C0D",
        redFont: "#BC213A",
        purpleFont: "#61378A",
        bgWhite: "#F2F9FF",
      },
      fontSize: {
        extraSm: "13px",
        extra: "34px",
      },
      screens: {
        mob: "380px",
      },
    },
  },
  plugins: [],
};
export default config;
