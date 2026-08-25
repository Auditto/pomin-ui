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
var search_bar_exports = {};
__export(search_bar_exports, {
  SearchBar: () => SearchBar
});
module.exports = __toCommonJS(search_bar_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var React = __toESM(require("react"), 1);
var import_lucide_react = require("lucide-react");
var import_utils = require("../../lib/utils");
var import_input = require("./input");
var import_button = require("./button");
const SearchBar = React.forwardRef(
  ({ className, onClear, showShortcut = true, value, onChange, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: (0, import_utils.cn)("relative flex w-full max-w-sm items-center animate-in fade-in duration-500", className), children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Search, { className: "absolute left-3 h-4 w-4 text-muted-foreground" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_input.Input,
        {
          ...props,
          ref,
          value,
          onChange,
          className: "pl-9 pr-12 h-10 rounded-full bg-muted/50 focus:bg-background transition-all"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "absolute right-3 flex items-center gap-1", children: [
        value && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_button.Button,
          {
            type: "button",
            variant: "ghost",
            size: "icon",
            className: "h-6 w-6 rounded-full",
            onClick: onClear,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.X, { className: "h-3 w-3" })
          }
        ),
        showShortcut && !value && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("kbd", { className: "pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-xs", children: "\u2318" }),
          "K"
        ] })
      ] })
    ] });
  }
);
SearchBar.displayName = "SearchBar";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SearchBar
});
//# sourceMappingURL=search-bar.cjs.map