import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        // Primary
        grayishBlue: "#8486a9",
        softRed: "#fb6087",

        // Neutral
        darkDesaturatedBlue: "#343650",
        darkPurple: "#2d2236",
        darkBlue: "#1e1f29",
        veryDarkBlue: "#191a24",
      },
    },
  },
  plugins: [],
} satisfies Config;
