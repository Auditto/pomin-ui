import { defineConfig } from "tsup";

/**
 * `bundle: false` de propósito: cada arquivo-fonte vira um arquivo em dist,
 * preservando a estrutura. É isso que faz `@pomin/ui/button` resolver para
 * um módulo só — e o bundler do app continua enxergando cada componente
 * separadamente, então quem importa dois componentes não leva os 73.
 */
export default defineConfig({
  entry: ["src/**/*.ts", "src/**/*.tsx"],
  format: ["esm"],
  bundle: false,
  dts: true,
  sourcemap: true,
  clean: true,
  outDir: "dist",
  target: "es2020",
  external: ["react", "react-dom", "tailwindcss"],
});
