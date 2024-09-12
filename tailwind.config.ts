import type { Config } from "tailwindcss";
import daisyui from 'daisyui';

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'tablet' : '640px',
        // => @media (min-width:640) { ... }
        'laptop' : '1024px',
        // => @media (min-width:1024) { ... }
        'desktop' : '1280px',
        // => @media (min-width:1280) { ... }
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [daisyui],//This is a plugin that adds a lot of utility classes to Tailwind CSS.
};
export default config;
