#!/usr/bin/env node
/**
 * Migra um app do Grupo Pomin da cópia local do kit para o pacote @pomin/ui.
 *
 * Faz só a parte mecânica e segura — a que é idêntica em todo app:
 *   1. instala github:Auditto/pomin-ui#<tag>
 *   2. troca o prefixo dos imports (@/components/ui/x -> @pomin/ui/x)
 *   3. faz src/lib/utils.ts reexportar o `cn` do kit
 *   4. apaga src/components/ui e o hook use-mobile
 *
 * NÃO mexe em index.css nem em tailwind.config.ts de propósito: nesses dois
 * cada app costuma ter coisa própria misturada com os tokens, e um replace
 * automático apagaria trabalho de alguém. O script diz o que fazer neles e
 * deixa a decisão para quem está olhando.
 *
 *   node scripts/migrar-app.mjs ../pominchurch          # migra
 *   node scripts/migrar-app.mjs ../pominchurch --dry    # só mostra o que faria
 */
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";

const TAG = process.env.POMIN_UI_TAG ?? "v0.1.1";
const [alvo, ...flags] = process.argv.slice(2);
const dry = flags.includes("--dry");

if (!alvo) {
  console.error("uso: node scripts/migrar-app.mjs <caminho-do-app> [--dry]");
  process.exit(1);
}

/** Acha a raiz do front: onde há package.json com react E uma pasta components/ui. */
function acharRaizWeb(base) {
  const candidatos = [base, join(base, "web"), join(base, "apps/web")];
  for (const c of candidatos) {
    const pj = join(c, "package.json");
    if (!existsSync(pj)) continue;
    const dep = JSON.parse(readFileSync(pj, "utf8"));
    const todas = { ...dep.dependencies, ...dep.devDependencies };
    if (todas.react && existsSync(join(c, "src/components/ui"))) return c;
  }
  return null;
}

const raiz = acharRaizWeb(alvo);
if (!raiz) {
  console.error(`não achei um front com src/components/ui em ${alvo}`);
  process.exit(1);
}

// Uma árvore suja esconde o que a migração fez — e a revisão é o que torna
// isso seguro num app em produção.
try {
  const sujo = execFileSync("git", ["-C", alvo, "status", "--porcelain"], { encoding: "utf8" }).trim();
  if (sujo && !dry) {
    console.error(`${alvo} tem alterações não commitadas. Commite ou guarde antes — a revisão do diff é o que torna isso seguro.`);
    process.exit(1);
  }
} catch { /* fora de um repo git: segue */ }

console.log(`app: ${raiz}${dry ? "  (simulação)" : ""}`);

// 1. dependência
if (!dry) {
  console.log(`instalando @pomin/ui#${TAG}…`);
  execFileSync("npm", ["i", `github:Auditto/pomin-ui#${TAG}`, "--no-audit", "--no-fund"], {
    cwd: raiz, stdio: "inherit",
  });
}

// 2. imports
const src = join(raiz, "src");
const arquivos = [];
(function varrer(dir) {
  for (const nome of readdirSync(dir)) {
    const p = join(dir, nome);
    if (statSync(p).isDirectory()) {
      if (nome === "node_modules" || nome === "ui") continue;
      varrer(p);
    } else if (/\.tsx?$/.test(nome)) arquivos.push(p);
  }
})(src);

let tocados = 0;
for (const f of arquivos) {
  const antes = readFileSync(f, "utf8");
  const depois = antes
    .replace(/from "@\/components\/ui\/([^"]+)"/g, 'from "@pomin/ui/$1"')
    .replace(/from "@\/hooks\/use-mobile"/g, 'from "@pomin/ui/hooks/use-mobile"');
  if (depois !== antes) {
    if (!dry) writeFileSync(f, depois);
    tocados++;
  }
}
console.log(`imports reescritos: ${tocados} arquivo(s)`);

// 3. cn vindo do kit — trocando SÓ a definição do cn.
//
// Sobrescrever o arquivo inteiro parecia inofensivo (todo utils.ts começa igual)
// até apagar o formatBytes do pomindrive e o sha256Hex do pominchurch, que
// moram no mesmo arquivo. O build só reclamou depois. Agora é cirúrgico: se a
// definição não for exatamente a esperada, o arquivo fica intacto e o script avisa.
const DEF_CN = /import\s*\{\s*clsx\s*,\s*type ClassValue\s*\}\s*from\s*"clsx";\s*\nimport\s*\{\s*twMerge\s*\}\s*from\s*"tailwind-merge";\s*\n+export function cn\(\.\.\.inputs: ClassValue\[\]\)\s*\{\s*\n\s*return twMerge\(clsx\(inputs\)\);\s*\n\}\s*\n/;

const utils = join(src, "lib/utils.ts");
if (existsSync(utils)) {
  const atual = readFileSync(utils, "utf8");
  if (DEF_CN.test(atual)) {
    const novo = atual.replace(
      DEF_CN,
      '// O `cn` mora no kit: uma implementação só para todos os apps.\nexport { cn } from "@pomin/ui/lib/utils";\n\n',
    );
    if (!dry) writeFileSync(utils, `${novo.trimEnd()}\n`);
    const proprios = novo.split("\n").filter((l) => l.startsWith("export ") && !l.includes("@pomin/ui")).length;
    console.log(`src/lib/utils.ts: cn vem do kit${proprios ? `, ${proprios} export(s) do app preservados` : ""}`);
  } else {
    console.log("src/lib/utils.ts: não reconheci a definição do cn — deixei intacto, confira à mão");
  }
}

// 4. remove a cópia local
const kitLocal = join(src, "components/ui");
const quantos = readdirSync(kitLocal).length;
if (!dry) {
  rmSync(kitLocal, { recursive: true, force: true });
  rmSync(join(src, "hooks/use-mobile.tsx"), { force: true });
}
console.log(`cópia local removida: ${quantos} arquivo(s) em ${relative(alvo, kitLocal)}`);

console.log(`
falta a parte que exige olho (não automatizo porque cada app tem coisa sua aí):

  1. src/index.css — trocar o bloco de tokens por:
         @import "@pomin/ui/styles.css";
     e MANTER o que for específico deste app, abaixo do import.

  2. tailwind.config.ts — passar a usar o preset:
         import pominPreset from "@pomin/ui/preset";
         export default {
           presets: [pominPreset],
           content: ["./index.html", "./src/**/*.{ts,tsx}", "./node_modules/@pomin/ui/dist/**/*.js"],
         } satisfies Config;
     Se o app estende o tema, o theme.extend dele continua valendo — vence o preset.

  3. rodar o build e comparar as telas antes/depois.`);
