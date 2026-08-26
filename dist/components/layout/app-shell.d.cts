import * as React from 'react';
import { ReactNode } from 'react';
import { MarcaShell, SecaoNav, UsuarioShell } from './types.cjs';

type AppShellProps = {
    children: ReactNode;
    brand: MarcaShell;
    sections: SecaoNav[];
    user?: UsuarioShell;
    /** Sigla à esquerda do breadcrumb: START, PDV, BANK. */
    brandShort: string;
    /** Para onde a sigla leva. */
    homeUrl?: string;
    /** Rótulo bonito por segmento de URL. Sem entrada, capitaliza o segmento. */
    routeLabels?: Record<string, string>;
    /**
     * Prefixo da chave de localStorage do pin da sidebar. Apps diferentes no
     * mesmo domínio (ou no mesmo navegador em dev) não podem brigar pela chave.
     */
    storageKey?: string;
    /** Slot à direita do header: tema, notificações, perfil, chat. */
    headerActions?: ReactNode;
    /** Fica fora da área de conteúdo — paleta de comandos, modais globais. */
    overlays?: ReactNode;
};
/**
 * O shell do padrão Pomin: sidebar que expande no hover (e fixa no alfinete),
 * header de vidro com breadcrumb e a área de conteúdo em cartão com rolagem
 * própria.
 *
 * O que é padrão mora aqui; o que é de cada app entra por prop — o menu, a
 * marca, os botões do header. Regra de permissão o kit não conhece: quem monta
 * o menu marca `hidden` na seção.
 *
 *     <AppShell
 *       brandShort="PDV"
 *       brand={{ name: <>Pomin<span className="text-primary">PDV</span></>, icon: Store }}
 *       sections={secoes}
 *       user={{ name, email, onLogout }}
 *       headerActions={<ThemeToggle />}
 *     >
 *       {children}
 *     </AppShell>
 */
declare function AppShell({ storageKey, ...props }: AppShellProps): React.JSX.Element;

export { AppShell, type AppShellProps };
