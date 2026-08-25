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
var kbd_exports = {};
__export(kbd_exports, {
  Kbd: () => Kbd,
  kbdVariants: () => kbdVariants
});
module.exports = __toCommonJS(kbd_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var React = __toESM(require("react"), 1);
var import_class_variance_authority = require("class-variance-authority");
var import_utils = require("../../lib/utils");
const kbdVariants = (0, import_class_variance_authority.cva)(
  "pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100",
  {
    variants: {
      size: {
        default: "h-5 px-1.5 text-[10px]",
        sm: "h-4 px-1 text-[9px]",
        lg: "h-6 px-2 text-[12px]"
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
);
const Kbd = React.forwardRef(
  ({ className, size, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "kbd",
      {
        ref,
        className: (0, import_utils.cn)(kbdVariants({ size, className })),
        ...props
      }
    );
  }
);
Kbd.displayName = "Kbd";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Kbd,
  kbdVariants
});
//# sourceMappingURL=kbd.cjs.map