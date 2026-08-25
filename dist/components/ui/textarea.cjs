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
var textarea_exports = {};
__export(textarea_exports, {
  Textarea: () => Textarea
});
module.exports = __toCommonJS(textarea_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var React = __toESM(require("react"), 1);
var import_utils = require("../../lib/utils");
var import_class_variance_authority = require("class-variance-authority");
const textareaVariants = (0, import_class_variance_authority.cva)(
  "flex min-h-[80px] w-full rounded-md border border-input bg-card px-3 py-2 text-sm ring-offset-background transition-all duration-200 ease-hub placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
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
        compact: "py-1 text-xs min-h-[60px]",
        default: "py-2",
        spacious: "py-4 text-base min-h-[120px]"
      }
    },
    defaultVariants: {
      variant: "default",
      density: "default"
    }
  }
);
const Textarea = React.forwardRef(
  ({ className, variant, density, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "textarea",
      {
        className: (0, import_utils.cn)(textareaVariants({ variant, density, className })),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Textarea
});
//# sourceMappingURL=textarea.cjs.map