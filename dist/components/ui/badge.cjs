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
var badge_exports = {};
__export(badge_exports, {
  Badge: () => Badge,
  badgeVariants: () => badgeVariants
});
module.exports = __toCommonJS(badge_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_class_variance_authority = require("class-variance-authority");
var import_utils = require("../../lib/utils");
const badgeVariants = (0, import_class_variance_authority.cva)(
  "inline-flex items-center rounded border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.08em] transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-primary/30 bg-primary/15 text-primary hover:bg-primary/20",
        secondary: "border-border/60 bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-destructive/30 bg-destructive/15 text-destructive hover:bg-destructive/20",
        outline: "border-border/70 text-foreground",
        success: "border-success/30 bg-success/15 text-success",
        warning: "border-warning/30 bg-warning/15 text-warning",
        shiny: "hub-gradient border-transparent text-primary-foreground shadow-sm"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: (0, import_utils.cn)(badgeVariants({ variant }), className), ...props });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Badge,
  badgeVariants
});
//# sourceMappingURL=badge.cjs.map