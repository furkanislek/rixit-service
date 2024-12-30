import type { Config } from "tailwindcss";
const plugin = require('tailwindcss/plugin');

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#171129",
        myTextColor: "#FBF8F3",
        foreground: "var(--foreground)",
        creativeTextColor : "#FBF8F3"
      },
      spacing:{
        'p20vw':'20vw',
        '10vw': '10vw'
      },
      container: {
        padding: '2rem',
      },
      backgroundImage: {
        'custom-radial': 'radial-gradient(50% 50% at 50% 50%, rgba(104, 53, 171, 0.42) 0%, rgba(100, 50, 166, 0.2) 67.5%, rgba(100, 50, 166, 0) 100%)',
        'linear-gradient': 'linear-gradient(289.91deg, #2F1862 0%, #251b40 100%);'
      },
      transform: {
        'rotate--90': 'rotate(-90deg)', 
      },
    },
  },
  plugins: [
     plugin(function({ addUtilities  } : any) {
      addUtilities({
        '.rotate--90': {
          transform: 'rotate(-90deg)',
        },
      });
    }),
  ],
} satisfies Config;