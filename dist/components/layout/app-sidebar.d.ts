import * as React from 'react';
import { HTMLAttributes } from 'react';
import { MarcaShell, SecaoNav, UsuarioShell } from './types.js';

type AppSidebarProps = HTMLAttributes<HTMLDivElement> & {
    brand: MarcaShell;
    sections: SecaoNav[];
    user?: UsuarioShell;
};
/**
 * A barra lateral do padrão Pomin: marca no topo, navegação no meio, usuário
 * no rodapé. Recolhida mostra só os ícones e expande no hover — quem controla
 * isso é o `AppShell`, que é quem sabe se está fixada.
 */
declare function AppSidebar({ brand, sections, user, ...props }: AppSidebarProps): React.JSX.Element;

export { AppSidebar, type AppSidebarProps };
