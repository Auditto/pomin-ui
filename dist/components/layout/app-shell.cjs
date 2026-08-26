"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var app_shell_exports = {};
__export(app_shell_exports, {
  AppShell: () => AppShell
});
module.exports = __toCommonJS(app_shell_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
var import_lucide_react = require("lucide-react");
var import_react_router_dom = require("react-router-dom");
var import_sidebar = require("../ui/sidebar");
var import_use_mobile = require("../../hooks/use-mobile");
var import_utils = require("../../lib/utils");
var import_app_sidebar = require("./app-sidebar");
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const MOVIMENTO = "650ms cubic-bezier(0.32, 0.72, 0, 1)";
function AppShell({ storageKey = "pomin", ...props }) {
  const chave = `${storageKey}:sidebar-pinned`;
  const [fixada, setFixada] = (0, import_react.useState)(
    () => typeof window !== "undefined" && window.localStorage.getItem(chave) === "true"
  );
  const [aberta, setAberta] = (0, import_react.useState)(fixada);
  (0, import_react.useEffect)(() => {
    window.localStorage.setItem(chave, String(fixada));
  }, [chave, fixada]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_sidebar.SidebarProvider, { open: aberta, onOpenChange: (open) => setAberta(fixada || open), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Interno, { ...props, fixada, setFixada }) });
}
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
  setFixada
}) {
  const { open, setOpen } = (0, import_sidebar.useSidebar)();
  const isMobile = (0, import_use_mobile.useIsMobile)();
  const { pathname } = (0, import_react_router_dom.useLocation)();
  const borda = open ? "var(--sb-open)" : "var(--sb-closed)";
  const conteudoEsquerda = isMobile ? "0.5rem" : borda;
  const segmentos = pathname.split("/").filter(Boolean);
  const trilha = segmentos.map((segmento, i) => ({
    // Id na URL vira "Detalhe" — ninguém lê UUID no caminho.
    label: UUID.test(segmento) ? "Detalhe" : routeLabels[segmento] ?? segmento.charAt(0).toUpperCase() + segmento.slice(1),
    to: `/${segmentos.slice(0, i + 1).join("/")}`
  }));
  const alternarPin = () => setFixada((atual) => {
    const proximo = !atual;
    if (proximo) setOpen(true);
    return proximo;
  });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "ambient-bg min-h-screen overflow-hidden bg-white text-foreground dark:bg-[#070707]", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_app_sidebar.AppSidebar,
      {
        brand,
        sections,
        user,
        onMouseEnter: () => !isMobile && setOpen(true),
        onMouseLeave: () => !isMobile && !fixada && setOpen(false)
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "button",
      {
        type: "button",
        onClick: alternarPin,
        className: "fixed top-[1.125rem] z-50 hidden h-7 w-7 -translate-x-1/2 items-center justify-center rounded-[5px] border border-border/80 bg-white text-muted-foreground shadow-sm transition-[left,background-color,color,transform] hover:scale-105 hover:bg-accent hover:text-primary dark:bg-[#0e0f12] md:flex",
        style: {
          left: `calc(${borda} + 1.75rem)`,
          transitionDuration: "650ms",
          transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)"
        },
        title: fixada ? "Desafixar menu lateral" : "Fixar menu lateral",
        "aria-label": fixada ? "Desafixar menu lateral" : "Fixar menu lateral",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Columns2, { className: (0, import_utils.cn)("h-4 w-4 transition-transform", fixada && "text-primary") })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "header",
      {
        className: "glass fixed left-0 right-0 top-0 z-30 flex h-16 items-center gap-2 border-b border-border/50 px-3 sm:gap-3 sm:px-4",
        style: {
          paddingLeft: isMobile ? "0.75rem" : `calc(${borda} + 3rem)`,
          transition: `padding-left ${MOVIMENTO}`
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_sidebar.SidebarTrigger, { className: "shrink-0 rounded-md text-muted-foreground hover:bg-black/[0.04] hover:text-foreground dark:hover:bg-white/[0.04] md:hidden" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            "nav",
            {
              className: "flex min-w-0 flex-1 items-center gap-2 overflow-hidden font-mono text-[12px] sm:text-[13px]",
              "aria-label": "Breadcrumb",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  import_react_router_dom.Link,
                  {
                    to: homeUrl,
                    className: "hidden shrink-0 font-semibold uppercase tracking-[0.12em] text-primary transition-colors hover:text-primary/75 sm:inline",
                    children: brandShort
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hidden text-muted-foreground/40 sm:inline", children: "/" }),
                trilha.map((passo, i) => {
                  const ultimo = i === trilha.length - 1;
                  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex min-w-0 items-center gap-2", children: [
                    ultimo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "truncate font-semibold text-foreground", children: passo.label }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      import_react_router_dom.Link,
                      {
                        to: passo.to,
                        className: "truncate text-muted-foreground transition-colors hover:text-foreground",
                        children: passo.label
                      }
                    ),
                    !ultimo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-muted-foreground/50", children: "/" })
                  ] }, passo.to);
                })
              ]
            }
          ),
          headerActions
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        className: "fixed bottom-2 right-2 top-16 sm:bottom-3 sm:right-3",
        style: { left: conteudoEsquerda, transition: `left ${MOVIMENTO}` },
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "premium-scroll h-full overflow-y-auto rounded-[5px] border border-border/50 bg-white dark:bg-[#070707]", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { className: "start-content route-enter", children }, pathname) })
      }
    ),
    overlays
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AppShell
});
//# sourceMappingURL=app-shell.cjs.map