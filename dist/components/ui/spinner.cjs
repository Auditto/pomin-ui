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
var spinner_exports = {};
__export(spinner_exports, {
  Spinner: () => Spinner
});
module.exports = __toCommonJS(spinner_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var React = __toESM(require("react"), 1);
var import_lucide_react = require("lucide-react");
var import_utils = require("../../lib/utils");
const sizeClass = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8"
};
const Spinner = React.forwardRef(
  ({ className, size = "md", label = "Carregando", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { ref, role: "status", className: (0, import_utils.cn)("inline-flex items-center gap-2 text-primary", className), ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Loader2, { className: (0, import_utils.cn)("animate-spin stroke-[1.75]", sizeClass[size]) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "sr-only", children: label })
  ] })
);
Spinner.displayName = "Spinner";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Spinner
});
//# sourceMappingURL=spinner.cjs.map