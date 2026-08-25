// O tsup só cuida de JS/TS. A folha de estilo é copiada como está: ela é
// consumida pelo PostCSS do app, não pelo bundler da biblioteca.
import { copyFileSync, mkdirSync } from "node:fs";

mkdirSync("dist", { recursive: true });
copyFileSync("src/styles/pomin-ui.css", "dist/styles.css");
console.log("dist/styles.css copiado");
