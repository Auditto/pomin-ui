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
var typography_exports = {};
__export(typography_exports, {
  TypographyH1: () => TypographyH1,
  TypographyH2: () => TypographyH2,
  TypographyLabel: () => TypographyLabel,
  TypographyMuted: () => TypographyMuted,
  TypographyP: () => TypographyP
});
module.exports = __toCommonJS(typography_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var React = __toESM(require("react"), 1);
var import_utils = require("../../lib/utils");
const TypographyH1 = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { ref, className: (0, import_utils.cn)("font-display text-3xl font-semibold tracking-tight", className), ...props })
);
TypographyH1.displayName = "TypographyH1";
const TypographyH2 = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { ref, className: (0, import_utils.cn)("font-display text-xl font-semibold tracking-tight", className), ...props })
);
TypographyH2.displayName = "TypographyH2";
const TypographyP = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { ref, className: (0, import_utils.cn)("text-sm leading-relaxed text-foreground", className), ...props })
);
TypographyP.displayName = "TypographyP";
const TypographyMuted = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { ref, className: (0, import_utils.cn)("text-sm leading-relaxed text-muted-foreground", className), ...props })
);
TypographyMuted.displayName = "TypographyMuted";
const TypographyLabel = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "span",
    {
      ref,
      className: (0, import_utils.cn)("text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground", className),
      ...props
    }
  )
);
TypographyLabel.displayName = "TypographyLabel";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  TypographyH1,
  TypographyH2,
  TypographyLabel,
  TypographyMuted,
  TypographyP
});
//# sourceMappingURL=typography.cjs.map