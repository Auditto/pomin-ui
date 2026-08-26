import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Padrão/Tokens",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

function Amostra({ nome, classe }: { nome: string; classe: string }) {
  return (
    <div className="min-w-0">
      <div className={`h-14 rounded-[5px] border border-border/60 ${classe}`} />
      <p className="mt-1.5 truncate font-mono text-[11px] text-muted-foreground">{nome}</p>
    </div>
  );
}

/**
 * As cores do padrão. Todas saem de variáveis CSS em `@pomin/ui/styles.css` —
 * um app que precise fugir do padrão redeclara a variável depois do import,
 * e tudo que usa a cor acompanha.
 */
export const Cores: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
      {[
        ["--background", "bg-background"],
        ["--foreground", "bg-foreground"],
        ["--card", "bg-card"],
        ["--primary", "bg-primary"],
        ["--primary-glow", "bg-primary-glow"],
        ["--secondary", "bg-secondary"],
        ["--muted", "bg-muted"],
        ["--accent", "bg-accent"],
        ["--destructive", "bg-destructive"],
        ["--success", "bg-success"],
        ["--warning", "bg-warning"],
        ["--border", "bg-border"],
      ].map(([nome, classe]) => (
        <Amostra key={nome} nome={nome} classe={classe} />
      ))}
    </div>
  ),
};

/** Os gradientes e superfícies que dão a cara do padrão. */
export const Superficies: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {[
        ["hub-gradient", "hub-gradient"],
        ["hub-card", "hub-card"],
        ["glass", "glass"],
        ["hub-row", "hub-row"],
        ["ambient-bg", "ambient-bg"],
        ["skeleton-shimmer", "skeleton-shimmer"],
      ].map(([nome, classe]) => (
        <div key={nome}>
          <div className={`flex h-20 items-center justify-center rounded-[5px] ${classe}`}>
            <span className="font-mono text-[11px] opacity-70">.{nome}</span>
          </div>
        </div>
      ))}
    </div>
  ),
};

/** A escala tipográfica: Oxanium para tudo, com `font-display` nos títulos. */
export const Tipografia: Story = {
  render: () => (
    <div className="space-y-3">
      <p className="font-display text-3xl font-semibold tracking-tight">Título de página</p>
      <p className="font-display text-xl font-semibold">Título de seção</p>
      <p className="text-sm">
        Corpo de texto — é o tamanho usado em tabela, formulário e descrição de tela.
      </p>
      <p className="text-xs text-muted-foreground">Auxiliar, para dica e legenda.</p>
      <p className="kpi-label">rótulo de indicador</p>
      <p className="kpi-value text-3xl tabular-nums">R$ 74,70</p>
    </div>
  ),
};
