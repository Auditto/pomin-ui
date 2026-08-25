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
var button_exports = {};
__export(button_exports, {
  Button: () => Button,
  buttonVariants: () => buttonVariants
});
module.exports = __toCommonJS(button_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var React = __toESM(require("react"), 1);
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority = require("class-variance-authority");
var import_lucide_react = require("lucide-react");
var import_utils = require("../../lib/utils");
const buttonVariants = (0, import_class_variance_authority.cva)(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-200 ease-hub focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:stroke-[1.75] active:scale-[0.99]",
  {
    variants: {
      variant: {
        default: "hub-btn-primary hover:-translate-y-px active:translate-y-0",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm",
        outline: "border border-input bg-card hover:bg-black/[0.04] hover:text-foreground dark:hover:bg-white/[0.04]",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-black/[0.04] hover:text-foreground dark:hover:bg-white/[0.04]",
        link: "text-primary underline-offset-4 hover:underline",
        glass: "border border-border/60 bg-card/80 text-foreground hover:bg-black/[0.04] dark:hover:bg-white/[0.04]",
        shiny: "hub-btn-primary relative overflow-hidden hover:-translate-y-px active:translate-y-0"
      },
      size: {
        default: "h-10 px-4 py-2",
        xs: "h-7 px-2 text-[10px]",
        sm: "h-9 px-3 text-xs",
        lg: "h-11 px-6 text-base",
        xl: "h-12 px-8 text-base",
        icon: "h-10 w-10"
      },
      density: {
        compact: "h-8 px-2 text-xs",
        default: "",
        spacious: "h-12 px-6 text-base"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      density: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, density, asChild = false, loading = false, children, disabled, ...props }, ref) => {
    const Comp = asChild ? import_react_slot.Slot : "button";
    const content = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Loader2, { className: "mr-2 h-4 w-4 animate-spin" }),
      children,
      variant === "shiny" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 block h-full w-full -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent" })
    ] });
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Comp,
      {
        className: (0, import_utils.cn)(buttonVariants({ variant, size, density }), className),
        ref,
        disabled: disabled || loading,
        ...props,
        children: asChild ? children : content
      }
    );
  }
);
Button.displayName = "Button";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  buttonVariants
});
//# sourceMappingURL=button.cjs.map