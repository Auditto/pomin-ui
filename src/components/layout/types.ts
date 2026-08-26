import type { ComponentType, ReactNode } from "react";

/** Ícone do menu — a assinatura do lucide-react, sem depender do tipo dele. */
export type IconeNav = ComponentType<{ className?: string }>;

export type ItemNav = {
  title: string;
  /** Rota. O item fica ativo nela e em tudo abaixo dela. */
  url: string;
  icon: IconeNav;
  /** Contador/pastilha à direita do título (só aparece com a sidebar aberta). */
  badge?: ReactNode;
};

export type SecaoNav = {
  /** Título da seção. Com a sidebar fechada vira um traço divisor. */
  label?: string;
  items: ItemNav[];
  /**
   * Some com a seção inteira. É onde entra a regra de permissão do app —
   * o kit não sabe o que é "admin", quem sabe é quem monta o menu.
   */
  hidden?: boolean;
};

export type MarcaShell = {
  /** Normalmente `Pomin<span className="text-primary">PDV</span>`. */
  name: ReactNode;
  /** Linha miúda embaixo do nome ("retaguarda", "gestão eclesiástica"). */
  subtitle?: ReactNode;
  icon: IconeNav;
};

export type UsuarioShell = {
  name?: string | null;
  email?: string | null;
  onLogout?: () => void;
};
