import type { HTMLAttributes } from "react";
import { LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Sidebar, useSidebar } from "../ui/sidebar";
import { cn } from "../../lib/utils";
import type { MarcaShell, SecaoNav, UsuarioShell } from "./types";

export type AppSidebarProps = HTMLAttributes<HTMLDivElement> & {
  brand: MarcaShell;
  sections: SecaoNav[];
  user?: UsuarioShell;
};

/** Iniciais do usuário para o avatar do rodapé. */
function iniciais(nome: string) {
  return nome
    .split(/\s+/)
    .filter(Boolean)
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

/**
 * A barra lateral do padrão Pomin: marca no topo, navegação no meio, usuário
 * no rodapé. Recolhida mostra só os ícones e expande no hover — quem controla
 * isso é o `AppShell`, que é quem sabe se está fixada.
 */
export function AppSidebar({ brand, sections, user, ...props }: AppSidebarProps) {
  const { state, isMobile } = useSidebar();
  const open = isMobile || state === "expanded";
  const location = useLocation();

  const visiveis = sections.filter((s) => !s.hidden && s.items.length > 0);
  const nome = user?.name || user?.email?.split("@")[0] || "Usuário";
  const Icone = brand.icon;

  return (
    <Sidebar
      collapsible="icon"
      className="!z-40 !border-r-0 bg-white dark:bg-[#070707] [&_svg]:stroke-[1.75]"
      {...props}
    >
      <div className="flex h-full min-w-0 flex-col overflow-hidden bg-white dark:bg-[#070707]">
        {/* Marca */}
        <div className="flex items-center gap-2.5 pb-4 pl-5 pr-3 pt-5">
          <div className="hub-gradient flex h-10 w-10 shrink-0 items-center justify-center rounded-[5px] shadow-sm">
            <Icone className="h-5 w-5 text-primary-foreground" />
          </div>
          <div
            className={cn(
              "min-w-0 flex-1 whitespace-nowrap transition-opacity duration-300",
              open ? "delay-200 opacity-100" : "pointer-events-none opacity-0",
            )}
          >
            <p className="whitespace-nowrap font-display text-[15px] font-semibold leading-5 2xl:text-[16px]">
              {brand.name}
            </p>
            {brand.subtitle && (
              <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-muted-foreground">
                {brand.subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Navegação */}
        <nav className="hub-scroll mt-1 flex-1 overflow-y-auto overflow-x-hidden pl-3 pr-3 2xl:pl-4 2xl:pr-4">
          {visiveis.map((secao, si) => (
            <div key={secao.label ?? si} className={cn(si > 0 && "mt-4")}>
              {secao.label &&
                (open ? (
                  <p className="mb-1 px-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                    {secao.label}
                  </p>
                ) : (
                  // Fechada, o título viraria três letras cortadas — vira um divisor.
                  <div className="mx-2 my-2 border-t border-border/60" />
                ))}
              <ul className="space-y-1">
                {secao.items.map((item) => {
                  const ativo =
                    location.pathname === item.url || location.pathname.startsWith(`${item.url}/`);
                  const ItemIcone = item.icon;
                  return (
                    <li key={item.url}>
                      <Link
                        to={item.url}
                        title={open ? undefined : item.title}
                        className={cn(
                          "group duration-sidebar relative flex h-11 items-center gap-3 overflow-hidden rounded-[5px] pl-2.5 text-[15px] transition-[width,background-color,color,padding,transform] ease-hub 2xl:h-12 2xl:pl-3 2xl:text-[16px]",
                          open ? "w-full pr-3.5" : "w-10 pr-2.5 2xl:w-11",
                          ativo
                            ? "nav-active-bg nav-active-border font-medium text-foreground"
                            : "font-normal text-foreground/70 hover:bg-black/[0.04] hover:text-foreground dark:text-white/55 dark:hover:bg-white/[0.04] dark:hover:text-white",
                        )}
                      >
                        <ItemIcone
                          className={cn(
                            "h-6 w-6 shrink-0 transition-[color,transform] duration-200 group-hover:scale-105",
                            ativo ? "text-primary" : "text-muted-foreground",
                          )}
                        />
                        <span
                          className={cn(
                            "truncate whitespace-nowrap transition-opacity duration-300",
                            open ? "delay-200 opacity-100" : "pointer-events-none opacity-0",
                          )}
                        >
                          {item.title}
                        </span>
                        {item.badge && open && <span className="ml-auto shrink-0">{item.badge}</span>}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        {/* Usuário */}
        {user && (
          <div className="pb-3 pl-3 pr-3 pt-2 2xl:pl-4 2xl:pr-4">
            <div
              className={cn(
                "duration-sidebar flex h-[50px] items-center gap-2.5 overflow-hidden rounded-[5px] border py-1 pl-1 transition-[width,padding,background-color,border-color] ease-hub",
                open
                  ? "w-full border-black/[0.06] bg-black/[0.04] pr-2.5 dark:border-white/[0.10] dark:bg-white/[0.04]"
                  : "w-10 border-transparent bg-transparent pr-1 2xl:w-11",
              )}
            >
              <div className="hub-gradient relative flex h-10 w-10 shrink-0 items-center justify-center rounded-[3px]">
                <span className="text-[14px] font-bold text-primary-foreground">{iniciais(nome)}</span>
              </div>
              <div
                className={cn(
                  "min-w-0 flex-1 transition-opacity duration-300",
                  open ? "delay-200 opacity-100" : "pointer-events-none opacity-0",
                )}
              >
                <p className="truncate text-[15px] font-semibold leading-none">{nome}</p>
                {user.email && <p className="truncate text-[11px] text-muted-foreground">{user.email}</p>}
              </div>
              {user.onLogout && (
                <button
                  type="button"
                  onClick={user.onLogout}
                  className={cn(
                    "shrink-0 rounded-[5px] p-2 text-muted-foreground transition-[opacity,background-color,color] duration-300 hover:bg-destructive/10 hover:text-destructive",
                    open ? "delay-200 opacity-100" : "pointer-events-none opacity-0",
                  )}
                  title="Sair"
                  aria-label="Sair"
                >
                  <LogOut className="h-[18px] w-[18px]" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </Sidebar>
  );
}
