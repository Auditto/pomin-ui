// Gera src/index.ts a partir dos arquivos em src/components/ui.
// O barril é grande demais para manter na mão — e um export esquecido só
// aparece no app que tentou importar.
import { readdirSync, writeFileSync } from "node:fs";

const mods = readdirSync("src/components/ui")
  .filter((f) => f.endsWith(".tsx"))
  .map((f) => f.replace(/\.tsx$/, ""))
  .sort();

const cabecalho = `/* ==========================================================================
 * @pomin/ui — ponto de entrada.
 *
 * Há duas formas de importar, e as duas funcionam:
 *
 *   import { Button } from "@pomin/ui";            // barril
 *   import { Button } from "@pomin/ui/button";     // subcaminho
 *
 * O subcaminho é o que torna a migração de um app trivial: os componentes
 * viviam em "@/components/ui/button", então basta trocar o prefixo. E ele
 * carrega só o módulo pedido, sem depender de tree-shaking.
 *
 * Este arquivo é GERADO por scripts/gerar-barril.mjs — não edite à mão.
 * ========================================================================== */
`;

const linhas = mods.map((m) => {
  // sonner e toaster exportam ambos "Toaster". O padrão Pomin usa o do sonner
  // (é o que está no App.tsx dos apps), então ele fica com o nome limpo.
  if (m === "sonner") return `export { Toaster } from "./components/ui/sonner";`;
  if (m === "toaster") return `export { Toaster as RadixToaster } from "./components/ui/toaster";`;
  return `export * from "./components/ui/${m}";`;
});

linhas.push("", `export { cn } from "./lib/utils";`, `export { useIsMobile } from "./hooks/use-mobile";`);
writeFileSync("src/index.ts", `${cabecalho}\n${linhas.join("\n")}\n`);
console.log(`barril gerado com ${mods.length} componentes`);
