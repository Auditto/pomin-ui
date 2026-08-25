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
var empty_state_exports = {};
__export(empty_state_exports, {
  EmptyState: () => EmptyState
});
module.exports = __toCommonJS(empty_state_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var React = __toESM(require("react"), 1);
var import_lucide_react = require("lucide-react");
var import_utils = require("../../lib/utils");
var import_button = require("./button");
const EmptyState = React.forwardRef(
  ({ className, title, description, icon, action, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        ref,
        className: (0, import_utils.cn)(
          "flex flex-col items-center justify-center rounded-lg border border-dashed p-12 text-center animate-in fade-in zoom-in-95 duration-500",
          className
        ),
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex h-20 w-20 items-center justify-center rounded-full bg-muted", children: icon || /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.FolderOpen, { className: "h-10 w-10 text-muted-foreground/60" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: "mt-4 text-lg font-semibold", children: title }),
          description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "mt-2 text-sm text-muted-foreground max-w-xs", children: description }),
          action && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_button.Button,
            {
              variant: "outline",
              className: "mt-6",
              onClick: action.onClick,
              children: action.label
            }
          )
        ]
      }
    );
  }
);
EmptyState.displayName = "EmptyState";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  EmptyState
});
//# sourceMappingURL=empty-state.cjs.map