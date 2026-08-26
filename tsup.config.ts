import { defineConfig } from "tsup";

/**
 * Dois formatos de propósito: o app consome ESM pelo bundler, mas ferramentas
 * de build (o jiti que lê o tailwind.config.ts, o PostCSS) resolvem em CJS e
 * simplesmente não enxergam um pacote só-ESM.
 *
 * `bundle: false` de propósito: cada arquivo-fonte vira um arquivo em dist,
 * preservando a estrutura. É isso que faz `@pomin/ui/button` resolver para
 * um módulo só — e o bundler do app continua enxergando cada componente
 * separadamente, então quem importa dois componentes não leva os 73.
 */
export default defineConfig({
  // os stories documentam o kit, não fazem parte dele
  entry: ["src/**/*.ts", "src/**/*.tsx", "!src/stories/**"],
  format: ["esm", "cjs"],
  bundle: false,
  dts: true,
  sourcemap: true,
  clean: true,
  outDir: "dist",
  target: "es2020",
  external: ["react", "react-dom", "tailwindcss"],
});
