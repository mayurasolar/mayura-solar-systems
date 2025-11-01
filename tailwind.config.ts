import type { Config } from "tailwindcss";
const { heroui } = require("@heroui/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0087d3", // Mayura brand blue
          blue: "#0072f5",
          lightBlue: "#5EA2FF",
          darkBlue: "#004699",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#0072f5",
              foreground: "#ffffff",
            },
            focus: "#0072f5",
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#5EA2FF",
              foreground: "#ffffff",
            },
            focus: "#5EA2FF",
          },
        },
      },
    }),
  ],
};

export default config;
