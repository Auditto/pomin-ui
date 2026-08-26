import type { Config } from "tailwindcss";
import preset from "./src/preset";

// Config só do Storybook: usa o próprio preset do kit e varre os fontes daqui.
// Os apps não leem este arquivo.
export default {
  presets: [preset],
  content: ["./src/**/*.{ts,tsx}", "./.storybook/**/*.{ts,tsx}"],
} satisfies Config;
