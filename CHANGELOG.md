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
