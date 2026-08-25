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
var input_group_exports = {};
__export(input_group_exports, {
  InputGroup: () => InputGroup,
  InputGroupAddon: () => InputGroupAddon,
  InputGroupButton: () => InputGroupButton,
  InputGroupInput: () => InputGroupInput
});
module.exports = __toCommonJS(input_group_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var React = __toESM(require("react"), 1);
var import_utils = require("../../lib/utils");
const InputGroup = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      ref,
      className: (0, import_utils.cn)(
        "flex min-h-10 w-full items-center overflow-hidden rounded-md border border-input bg-card transition-all focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
        className
      ),
      ...props
    }
  )
);
InputGroup.displayName = "InputGroup";
const InputGroupAddon = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      ref,
      className: (0, import_utils.cn)("flex h-full items-center gap-2 bg-muted/60 px-3 text-sm text-muted-foreground", className),
      ...props
    }
  )
);
InputGroupAddon.displayName = "InputGroupAddon";
const InputGroupInput = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "input",
    {
      ref,
      className: (0, import_utils.cn)(
        "h-10 min-w-0 flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props
    }
  )
);
InputGroupInput.displayName = "InputGroupInput";
const InputGroupButton = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "button",
    {
      ref,
      className: (0, import_utils.cn)(
        "h-10 border-l border-border px-3 text-xs font-medium text-primary transition-colors hover:bg-black/[0.04] dark:hover:bg-white/[0.04]",
        className
      ),
      ...props
    }
  )
);
InputGroupButton.displayName = "InputGroupButton";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput
});
//# sourceMappingURL=input-group.cjs.map