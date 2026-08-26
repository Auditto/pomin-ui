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
var app_sidebar_exports = {};
__export(app_sidebar_exports, {
  AppSidebar: () => AppSidebar
});
module.exports = __toCommonJS(app_sidebar_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_lucide_react = require("lucide-react");
var import_react_router_dom = require("react-router-dom");
var import_sidebar = require("../ui/sidebar");
var import_utils = require("../../lib/utils");
function iniciais(nome) {
  return nome.split(/\s+/).filter(Boolean).map((p) => p[0]).slice(0, 2).join("").toUpperCase();
}
function AppSidebar({ brand, sections, user, ...props }) {
  const { state, isMobile } = (0, import_sidebar.useSidebar)();
  const open = isMobile || state === "expanded";
  const location = (0, import_react_router_dom.useLocation)();
  const visiveis = sections.filter((s) => !s.hidden && s.items.length > 0);
  const nome = user?.name || user?.email?.split("@")[0] || "Usu\xE1rio";
  const Icone = brand.icon;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_sidebar.Sidebar,
    {
      collapsible: "icon",
      className: "!z-40 !border-r-0 bg-white dark:bg-[#070707] [&_svg]:stroke-[1.75]",
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex h-full min-w-0 flex-col overflow-hidden bg-white dark:bg-[#070707]", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-2.5 pb-4 pl-5 pr-3 pt-5", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hub-gradient flex h-10 w-10 shrink-0 items-center justify-center rounded-[5px] shadow-sm", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icone, { className: "h-5 w-5 text-primary-foreground" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            "div",
            {
              className: (0, import_utils.cn)(
                "min-w-0 flex-1 whitespace-nowrap transition-opacity duration-300",
                open ? "delay-200 opacity-100" : "pointer-events-none opacity-0"
              ),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "whitespace-nowrap font-display text-[15px] font-semibold leading-5 2xl:text-[16px]", children: brand.name }),
                brand.subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-[10px] font-medium uppercase tracking-[0.1em] text-muted-foreground", children: brand.subtitle })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", { className: "hub-scroll mt-1 flex-1 overflow-y-auto overflow-x-hidden pl-3 pr-3 2xl:pl-4 2xl:pr-4", children: visiveis.map((secao, si) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: (0, import_utils.cn)(si > 0 && "mt-4"), children: [
          secao.label && (open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "mb-1 px-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-foreground", children: secao.label }) : (
            // Fechada, o título viraria três letras cortadas — vira um divisor.
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-2 my-2 border-t border-border/60" })
          )),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { className: "space-y-1", children: secao.items.map((item) => {
            const ativo = location.pathname === item.url || location.pathname.startsWith(`${item.url}/`);
            const ItemIcone = item.icon;
            return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
              import_react_router_dom.Link,
              {
                to: item.url,
                title: open ? void 0 : item.title,
                className: (0, import_utils.cn)(
                  "group duration-sidebar relative flex h-11 items-center gap-3 overflow-hidden rounded-[5px] pl-2.5 text-[15px] transition-[width,background-color,color,padding,transform] ease-hub 2xl:h-12 2xl:pl-3 2xl:text-[16px]",
                  open ? "w-full pr-3.5" : "w-10 pr-2.5 2xl:w-11",
                  ativo ? "nav-active-bg nav-active-border font-medium text-foreground" : "font-normal text-foreground/70 hover:bg-black/[0.04] hover:text-foreground dark:text-white/55 dark:hover:bg-white/[0.04] dark:hover:text-white"
                ),
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    ItemIcone,
                    {
                      className: (0, import_utils.cn)(
                        "h-6 w-6 shrink-0 transition-[color,transform] duration-200 group-hover:scale-105",
                        ativo ? "text-primary" : "text-muted-foreground"
                      )
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    "span",
                    {
                      className: (0, import_utils.cn)(
                        "truncate whitespace-nowrap transition-opacity duration-300",
                        open ? "delay-200 opacity-100" : "pointer-events-none opacity-0"
                      ),
                      children: item.title
                    }
                  ),
                  item.badge && open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ml-auto shrink-0", children: item.badge })
                ]
              }
            ) }, item.url);
          }) })
        ] }, secao.label ?? si)) }),
        user && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pb-3 pl-3 pr-3 pt-2 2xl:pl-4 2xl:pr-4", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "div",
          {
            className: (0, import_utils.cn)(
              "duration-sidebar flex h-[50px] items-center gap-2.5 overflow-hidden rounded-[5px] border py-1 pl-1 transition-[width,padding,background-color,border-color] ease-hub",
              open ? "w-full border-black/[0.06] bg-black/[0.04] pr-2.5 dark:border-white/[0.10] dark:bg-white/[0.04]" : "w-10 border-transparent bg-transparent pr-1 2xl:w-11"
            ),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hub-gradient relative flex h-10 w-10 shrink-0 items-center justify-center rounded-[3px]", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-[14px] font-bold text-primary-foreground", children: iniciais(nome) }) }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                "div",
                {
                  className: (0, import_utils.cn)(
                    "min-w-0 flex-1 transition-opacity duration-300",
                    open ? "delay-200 opacity-100" : "pointer-events-none opacity-0"
                  ),
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "truncate text-[15px] font-semibold leading-none", children: nome }),
                    user.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "truncate text-[11px] text-muted-foreground", children: user.email })
                  ]
                }
              ),
              user.onLogout && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "button",
                {
                  type: "button",
                  onClick: user.onLogout,
                  className: (0, import_utils.cn)(
                    "shrink-0 rounded-[5px] p-2 text-muted-foreground transition-[opacity,background-color,color] duration-300 hover:bg-destructive/10 hover:text-destructive",
                    open ? "delay-200 opacity-100" : "pointer-events-none opacity-0"
                  ),
                  title: "Sair",
                  "aria-label": "Sair",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.LogOut, { className: "h-[18px] w-[18px]" })
                }
              )
            ]
          }
        ) })
      ] })
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AppSidebar
});
//# sourceMappingURL=app-sidebar.cjs.map