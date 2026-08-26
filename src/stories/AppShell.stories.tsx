import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import {
  BarChart3,
  Building2,
  FileInput,
  LayoutDashboard,
  Package,
  Receipt,
  Settings,
  ShieldCheck,
  ShoppingCart,
  Store,
  Truck,
  Users,
} from "lucide-react";
import { AppShell } from "../components/layout/app-shell";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";

const secoes = [
  { items: [{ title: "Dashboard", url: "/dashboard", icon: LayoutDashboard }] },
  {
    label: "Cadastros",
    items: [
      { title: "Produtos", url: "/produtos", icon: Package },
      { title: "Fornecedores", url: "/fornecedores", icon: Truck },
      { title: "Clientes", url: "/clientes", icon: Users },
    ],
  },
  {
    label: "Movimento",
    items: [
      { title: "Vendas", url: "/vendas", icon: Receipt, badge: <Badge variant="secondary">12</Badge> },
      { title: "Pedidos de compra", url: "/pedidos", icon: ShoppingCart },
      { title: "Entrada de notas", url: "/notas", icon: FileInput },
    ],
  },
  { items: [{ title: "Relatórios", url: "/relatorios", icon: BarChart3 }] },
  {
    label: "Administração",
    items: [
      { title: "Estabelecimentos", url: "/estabelecimentos", icon: Building2 },
      { title: "Usuários", url: "/usuarios", icon: ShieldCheck },
      { title: "Configurações", url: "/configuracoes", icon: Settings },
    ],
  },
];

const meta = {
  title: "Padrão/AppShell",
  component: AppShell,
  parameters: { layout: "fullscreen" },
  // O shell usa <Link> e a rota atual; no Storybook quem fornece isso é o
  // MemoryRouter — no app é o BrowserRouter de verdade.
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/produtos"]}>
        <Routes>
          <Route path="*" element={<Story />} />
        </Routes>
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof AppShell>;

export default meta;
type Story = StoryObj<typeof meta>;

function ConteudoDeExemplo() {
  return (
    <div className="p-6">
      <h1 className="font-display text-2xl font-semibold tracking-tight">Produtos</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Cadastro mestre. Esta área rola sozinha, dentro do cartão.
      </p>
      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        {["Ativos", "Fora de linha", "Abaixo do mínimo"].map((t, i) => (
          <Card key={t} className="p-4">
            <p className="kpi-label">{t}</p>
            <p className="kpi-value text-2xl tabular-nums">{[128, 14, 7][i]}</p>
          </Card>
        ))}
      </div>
      <Button className="mt-5">Novo produto</Button>
    </div>
  );
}

/**
 * O shell completo. A sidebar abre no hover e fixa no alfinete (o estado fica
 * no localStorage, por app). O breadcrumb sai da URL, e um UUID no caminho
 * vira "Detalhe" — ninguém lê UUID.
 */
export const Completo: Story = {
  args: {
    brandShort: "PDV",
    brand: {
      name: (
        <>
          Pomin<span className="text-primary">PDV</span>
        </>
      ),
      subtitle: "retaguarda",
      icon: Store,
    },
    sections: secoes,
    user: { name: "Robson Silva", email: "robson@solutta.com", onLogout: () => {} },
    routeLabels: { produtos: "Produtos", dashboard: "Dashboard" },
    storageKey: "storybook",
    children: <ConteudoDeExemplo />,
  },
};

/**
 * Sem `user` o rodapé some — serve para app que põe o perfil no header.
 * E uma seção com `hidden` desaparece inteira: é assim que o app aplica
 * permissão, porque o kit não sabe o que é "admin".
 */
export const SemUsuarioESemAdmin: Story = {
  args: {
    ...Completo.args,
    user: undefined,
    sections: secoes.map((s) => (s.label === "Administração" ? { ...s, hidden: true } : s)),
  },
};
