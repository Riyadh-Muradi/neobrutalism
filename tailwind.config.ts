import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        bg: "#dfe5f2",
        main: "#88aaee",
        mainAccent: "#4d80e6", // not needed for shadcn
      },
      borderRadius: {
        base: "4px",
      },
      boxShadow: {
        base: "1px 1px 0px 0px rgba(0,0,0,1)",
      },
      translate: {
        boxShadowX: "1px",
        boxShadowY: "1px",
        reverseBoxShadowX: "-1px",
        reverseBoxShadowY: "-1px",
      },
      fontWeight: {
        base: "600",
        heading: "700",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
