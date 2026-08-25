"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stat_card_exports = {};
__export(stat_card_exports, {
  StatCard: () => StatCard
});
module.exports = __toCommonJS(stat_card_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var React = __toESM(require("react"), 1);
var import_lucide_react = require("lucide-react");
var import_utils = require("../../lib/utils");
var import_card = require("./card");
const toneClass = {
  blue: "bg-hub-blue text-hub-blue",
  emerald: "bg-hub-emerald text-hub-emerald",
  amber: "bg-hub-amber text-hub-amber",
  rose: "bg-hub-rose text-hub-rose",
  indigo: "bg-hub-indigo text-hub-indigo",
  neutral: "bg-muted-foreground text-muted-foreground"
};
const StatCard = React.forwardRef(
  ({ className, title, value, description, icon, tone = "blue", trend, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_card.Card,
    {
      ref,
      className: (0, import_utils.cn)("hub-card cine-card overflow-hidden animate-in zoom-in-95 duration-500", className),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_card.CardContent, { className: "p-5 sm:p-6", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "mb-4 flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex min-w-0 items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: (0, import_utils.cn)("h-1.5 w-1.5 rounded-full", toneClass[tone].split(" ")[0]) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "kpi-label truncate", children: title })
          ] }),
          icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: (0, import_utils.cn)("shrink-0 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:stroke-[1.75]", toneClass[tone].split(" ")[1]), children: icon })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "kpi-value text-2xl tabular-nums sm:text-3xl", children: value }),
        (description || trend) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground", children: [
          trend && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            "div",
            {
              className: (0, import_utils.cn)(
                "flex items-center font-medium tabular-nums",
                trend.direction === "up" && "text-success",
                trend.direction === "down" && "text-destructive",
                trend.direction === "neutral" && "text-muted-foreground"
              ),
              children: [
                trend.direction === "up" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ArrowUpRight, { className: "mr-1 h-3 w-3 stroke-[1.75]" }),
                trend.direction === "down" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ArrowDownRight, { className: "mr-1 h-3 w-3 stroke-[1.75]" }),
                trend.value,
                "%"
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: description || trend?.label })
        ] })
      ] })
    }
  )
);
StatCard.displayName = "StatCard";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  StatCard
});
//# sourceMappingURL=stat-card.cjs.map