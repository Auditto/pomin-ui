# @pomin/ui

O padrão visual do **PominStart** empacotado como biblioteca, para os apps do
Grupo Pomin pararem de copiar 73 componentes de um repositório para o outro.

## O que tem aqui

O kit são **três peças que só funcionam juntas**:

| Peça | O que é | Por que não dá para separar |
|---|---|---|
| `@pomin/ui` | 73 componentes React (shadcn + os nossos) | usam classes como `hub-btn-primary` e `ease-hub` |
| `@pomin/ui/styles.css` | 101 tokens de cor/raio/sombra + a camada `hub-*` | define essas classes e as variáveis CSS |
| `@pomin/ui/preset` | preset do Tailwind com o tema | liga `bg-primary`, `shadow-premium-md`, `ease-hub` aos tokens |

Sem a folha, o `<Button>` perde o gradiente e o `<Skeleton>` perde o brilho.
Sem o preset, as classes do Tailwind apontam para variáveis que não existem.

## Instalando num app

```bash
npm i github:Auditto/pomin-ui#v0.1.0
```

O `dist/` vai versionado no repositório de propósito: assim o `npm install`
dentro do Docker não precisa de token, de build nem de devDependencies.

**1. CSS** — em `src/index.css`, troque todo o bloco de tokens por uma linha:

```css
@import "@pomin/ui/styles.css";

/* daqui para baixo, o que for específico deste app */
```

**2. Tailwind** — em `tailwind.config.ts`:

```ts
import pominPreset from "@pomin/ui/preset";

export default {
  presets: [pominPreset],
  // o `content` é do app, e precisa varrer também os fontes do kit —
  // senão o Tailwind não gera as classes que só aparecem lá dentro
  content: ["./src/**/*.{ts,tsx}", "./node_modules/@pomin/ui/dist/**/*.js"],
} satisfies Config;
```

**3. Componentes** — a migração é troca de prefixo:

```diff
-import { Button } from "@/components/ui/button";
+import { Button } from "@pomin/ui/button";
```

Os dois formatos funcionam:

```ts
import { Button, Card } from "@pomin/ui";        // barril
import { Button } from "@pomin/ui/button";       // subcaminho (recomendado)
```

O subcaminho é o recomendado porque carrega só aquele módulo — quem importa
dois componentes não leva os 73 — e porque torna a migração um find/replace.

## Quando o app precisa fugir do padrão

Sobrescrever **um token**: redeclare a variável depois do import.

```css
@import "@pomin/ui/styles.css";
:root { --primary: 160 84% 32%; }   /* este app é verde */
```

Sobrescrever **um componente**: crie o seu em `src/components/ui/` e importe
de lá. O kit não impede — ele é o padrão, não uma cerca. O que não vale é
copiar o kit inteiro de volta para dentro do app: aí voltamos ao problema.

## Mexendo no kit

```bash
npm install
npm run build        # tsup -> dist/ (ESM + .d.ts) e copia o CSS
npm run typecheck
```

`src/index.ts` é gerado — ao adicionar um componente, rode
`node scripts/gerar-barril.mjs`.

Uma mudança aqui afeta todos os apps, então: mudança de comportamento ou de
API sobe a **minor** e ganha nota no CHANGELOG; correção visual sobe a
**patch**. Os apps ficam presos a uma tag (`#v0.1.0`), então ninguém é
atualizado sem querer — a atualização é um passo explícito no app.
