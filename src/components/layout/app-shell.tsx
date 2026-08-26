import { useEffect, useState, type ReactNode } from "react";
import { Columns2 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { SidebarProvider, SidebarTrigger, useSidebar } from "../ui/sidebar";
import { useIsMobile } from "../../hooks/use-mobile";
import { cn } from "../../lib/utils";
import { AppSidebar } from "./app-sidebar";
import type { MarcaShell, SecaoNav, UsuarioShell } from "./types";

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const MOVIMENTO = "650ms cubic-bezier(0.32, 0.72, 0, 1)";

export type AppShellProps = {
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
export function AppShell({ storageKey = "pomin", ...props }: AppShellProps) {
  const chave = `${storageKey}:sidebar-pinned`;
  const [fixada, setFixada] = useState(
    () => typeof window !== "undefined" && window.localStorage.getItem(chave) === "true",
  );
  const [aberta, setAberta] = useState(fixada);

  useEffect(() => {
    window.localStorage.setItem(chave, String(fixada));
  }, [chave, fixada]);

  return (
    <SidebarProvider open={aberta} onOpenChange={(open) => setAberta(fixada || open)}>
      <Interno {...props} fixada={fixada} setFixada={setFixada} />
    </SidebarProvider>
  );
}

/** Separado porque `useSidebar` só existe dentro do provider. */
function Interno({
  children,
  brand,
  sections,
  user,
  brandShort,
  homeUrl = "/dashboard",
  routeLabels = {},
  headerActions,
  overlays,
  fixada,
  setFixada,
}: Omit<AppShellProps, "storageKey"> & {
  fixada: boolean;
  setFixada: (atualiza: (atual: boolean) => boolean) => void;
}) {
  const { open, setOpen } = useSidebar();
  const isMobile = useIsMobile();
  const { pathname } = useLocation();

  const borda = open ? "var(--sb-open)" : "var(--sb-closed)";
  const conteudoEsquerda = isMobile ? "0.5rem" : borda;

  const segmentos = pathname.split("/").filter(Boolean);
  const trilha = segmentos.map((segmento, i) => ({
    // Id na URL vira "Detalhe" — ninguém lê UUID no caminho.
    label: UUID.test(segmento)
      ? "Detalhe"
      : (routeLabels[segmento] ?? segmento.charAt(0).toUpperCase() + segmento.slice(1)),
    to: `/${segmentos.slice(0, i + 1).join("/")}`,
  }));

  const alternarPin = () =>
    setFixada((atual) => {
      const proximo = !atual;
      if (proximo) setOpen(true);
      return proximo;
    });

  return (
    <div className="ambient-bg min-h-screen overflow-hidden bg-white text-foreground dark:bg-[#070707]">
      <AppSidebar
        brand={brand}
        sections={sections}
        user={user}
        onMouseEnter={() => !isMobile && setOpen(true)}
        onMouseLeave={() => !isMobile && !fixada && setOpen(false)}
      />

      {/* Alfinete: mantém a sidebar aberta. Segue a borda dela. */}
      <button
        type="button"
        onClick={alternarPin}
        className="fixed top-[1.125rem] z-50 hidden h-7 w-7 -translate-x-1/2 items-center justify-center rounded-[5px] border border-border/80 bg-white text-muted-foreground shadow-sm transition-[left,background-color,color,transform] hover:scale-105 hover:bg-accent hover:text-primary dark:bg-[#0e0f12] md:flex"
        style={{
          left: `calc(${borda} + 1.75rem)`,
          transitionDuration: "650ms",
          transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
        }}
        title={fixada ? "Desafixar menu lateral" : "Fixar menu lateral"}
        aria-label={fixada ? "Desafixar menu lateral" : "Fixar menu lateral"}
      >
        <Columns2 className={cn("h-4 w-4 transition-transform", fixada && "text-primary")} />
      </button>

      <header
        className="glass fixed left-0 right-0 top-0 z-30 flex h-16 items-center gap-2 border-b border-border/50 px-3 sm:gap-3 sm:px-4"
        style={{
          paddingLeft: isMobile ? "0.75rem" : `calc(${borda} + 3rem)`,
          transition: `padding-left ${MOVIMENTO}`,
        }}
      >
        <SidebarTrigger className="shrink-0 rounded-md text-muted-foreground hover:bg-black/[0.04] hover:text-foreground dark:hover:bg-white/[0.04] md:hidden" />

        <nav
          className="flex min-w-0 flex-1 items-center gap-2 overflow-hidden font-mono text-[12px] sm:text-[13px]"
          aria-label="Breadcrumb"
        >
          <Link
            to={homeUrl}
            className="hidden shrink-0 font-semibold uppercase tracking-[0.12em] text-primary transition-colors hover:text-primary/75 sm:inline"
          >
            {brandShort}
          </Link>
          <span className="hidden text-muted-foreground/40 sm:inline">/</span>
          {trilha.map((passo, i) => {
            const ultimo = i === trilha.length - 1;
            return (
              <div key={passo.to} className="flex min-w-0 items-center gap-2">
                {ultimo ? (
                  <span className="truncate font-semibold text-foreground">{passo.label}</span>
                ) : (
                  <Link
                    to={passo.to}
                    className="truncate text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {passo.label}
                  </Link>
                )}
                {!ultimo && <span className="text-muted-foreground/50">/</span>}
              </div>
            );
          })}
        </nav>

        {headerActions}
      </header>

      <div
        className="fixed bottom-2 right-2 top-16 sm:bottom-3 sm:right-3"
        style={{ left: conteudoEsquerda, transition: `left ${MOVIMENTO}` }}
      >
        <div className="premium-scroll h-full overflow-y-auto rounded-[5px] border border-border/50 bg-white dark:bg-[#070707]">
          {/* `key` no pathname redispara a animação de entrada a cada rota. */}
          <main key={pathname} className="start-content route-enter">
            {children}
          </main>
        </div>
      </div>

      {overlays}
    </div>
  );
}
