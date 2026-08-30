# Changelog

## v0.1.0

Primeira versão: o kit do PominStart extraído como biblioteca.

- 73 componentes, a folha de tokens e o preset do Tailwind.
- Corrigidos dois `ref.current` somente-leitura (`ai-prompt-box`, `file-upload`)
  que o `strict` do pacote pegou e o build dos apps não pegava.

## v0.1.1

- Pacote passa a sair em ESM **e** CJS: o `tailwind.config.ts` dos apps é lido
  pelo `jiti`, que resolve em CommonJS e não enxergava um pacote só-ESM
  (`Cannot find module @pomin/ui/preset` no build).

## v0.2.0

- `@pomin/ui/layout`: AppShell e AppSidebar saem dos apps e viram parte do kit.
  O menu, a marca e os botões do header entram por prop; permissão continua
  sendo do app (`hidden` na seção).
- Storybook: tokens, Button e o AppShell, com alternador de tema.
- CI com typecheck, build e dois guardas: `dist/` em dia com o `src` e barril
  gerado. Mais um workflow que compila os apps-piloto contra o branch.

## v0.2.1

- Corrige o respiro da área de conteúdo. A regra herdada do pominstart só dava
  padding a um filho com classe `max-w-*` — contrato implícito que nenhuma tela
  nova cumpria, e o conteúdo encostava nas bordas. Agora o padding é do
  container e sai quando a página traz o próprio wrapper (sem dobrar).
