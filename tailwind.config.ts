import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      prime: {
        100: '#FAF5F2'
      },
      white: {
        100: '#FFFFFF',
        200: '#C1B6AB'
      },
      black: {
        100: '#000000'
      },
      grey: {
        100: '#484349',
        200: '#495159',
      },
      red: {
        100: '#DF2935'
      }
    },
    fontFamily: {
      title: ['var(--font-titleFont)', 'san-serif'],
      paragraph: ['var(--font-paragraphFont)', 'san-serif'],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
