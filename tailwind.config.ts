import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: { colors: { ink: "#161616", mist: "#f5f5f2", lime: "#c8f135" } } },
  plugins: [],
};
export default config;
