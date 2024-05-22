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
        100: '#55014E'
      },
      white: {
        100: '#FFFFFF',
      },
      black: {
        100: '#000000'
      },
      grey: {
        100: '#B4B4A6',
        200: '#9C9C8A',
        300: '#F6F6F7'
      },
      red: {
        100: '#DF2935'
      }
    },
    fontFamily: {
      title: ['var(--font-titleFont)', 'Calibri', 'Candara', "Arial",'san-serif'],
      paragraph: ['var(--font-paragraphFont)', 'Calibri', 'Candara', "Arial",'san-serif'],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'bottom-only': '0 4px 6px -1px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
};
export default config;
