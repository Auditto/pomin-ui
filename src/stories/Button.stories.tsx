import type { Meta, StoryObj } from "@storybook/react";
import { Download, Plus } from "lucide-react";
import { Button } from "../components/ui/button";

const meta = {
  title: "Base/Button",
  component: Button,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Padrao: Story = {
  args: { children: "Salvar" },
};

/**
 * As variantes do padrão Pomin. `default` e `shiny` usam o gradiente da marca
 * (`hub-btn-primary`) — é aqui que se vê a diferença para o shadcn puro, que
 * pinta um `bg-primary` chapado.
 */
export const Variantes: Story = {
  args: { children: "Botão" },
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      {(["default", "shiny", "secondary", "outline", "glass", "ghost", "link", "destructive"] as const).map(
        (v) => (
          <Button key={v} {...args} variant={v}>
            {v}
          </Button>
        ),
      )}
    </div>
  ),
};

export const Tamanhos: Story = {
  args: { children: "Botão" },
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      {(["xs", "sm", "default", "lg", "xl"] as const).map((s) => (
        <Button key={s} {...args} size={s}>
          {s}
        </Button>
      ))}
    </div>
  ),
};

/** Ícone antes do texto é o uso mais comum nas telas de cadastro. */
export const ComIcone: Story = {
  args: { children: "Novo" },
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      <Button {...args}>
        <Plus />
        Novo
      </Button>
      <Button variant="outline">
        <Download />
        Exportar CSV
      </Button>
      <Button size="icon" variant="ghost" aria-label="Adicionar">
        <Plus />
      </Button>
    </div>
  ),
};

export const Estados: Story = {
  args: { children: "Botão" },
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      <Button {...args}>normal</Button>
      <Button {...args} disabled>
        desabilitado
      </Button>
    </div>
  ),
};
