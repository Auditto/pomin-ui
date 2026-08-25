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
var input_exports = {};
__export(input_exports, {
  Input: () => Input,
  inputVariants: () => inputVariants
});
module.exports = __toCommonJS(input_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var React = __toESM(require("react"), 1);
var import_class_variance_authority = require("class-variance-authority");
var import_utils = require("../../lib/utils");
const inputVariants = (0, import_class_variance_authority.cva)(
  "flex w-full rounded-md border border-input bg-card px-3 py-2 text-sm ring-offset-background transition-all duration-200 ease-hub file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "focus:border-primary/50",
        filled: "bg-secondary/50 focus:bg-card",
        glass: "border-border/60 bg-card/80 focus:bg-card",
        error: "border-destructive focus-visible:ring-destructive",
        success: "border-success focus-visible:ring-success"
      },
      density: {
        compact: "h-8 px-2 text-xs",
        default: "h-10",
        spacious: "h-12 px-4 text-base"
      }
    },
    defaultVariants: {
      variant: "default",
      density: "default"
    }
  }
);
const Input = React.forwardRef(
  ({ className, variant, density, type, leftIcon, rightIcon, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "group relative w-full", children: [
    leftIcon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary [&_svg]:stroke-[1.75]", children: leftIcon }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "input",
      {
        type,
        className: (0, import_utils.cn)(
          inputVariants({ variant, density }),
          leftIcon && "pl-10",
          rightIcon && "pr-10",
          className
        ),
        ref,
        ...props
      }
    ),
    rightIcon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary [&_svg]:stroke-[1.75]", children: rightIcon })
  ] })
);
Input.displayName = "Input";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Input,
  inputVariants
});
//# sourceMappingURL=input.cjs.map