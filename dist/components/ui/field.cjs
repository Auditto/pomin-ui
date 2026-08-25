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
var field_exports = {};
__export(field_exports, {
  Field: () => Field,
  FieldDescription: () => FieldDescription,
  FieldError: () => FieldError,
  FieldGroup: () => FieldGroup,
  FieldLabel: () => FieldLabel
});
module.exports = __toCommonJS(field_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var React = __toESM(require("react"), 1);
var import_utils = require("../../lib/utils");
var import_label = require("./label");
const Field = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref, className: (0, import_utils.cn)("grid gap-2", className), ...props })
);
Field.displayName = "Field";
const FieldGroup = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref, className: (0, import_utils.cn)("grid gap-4", className), ...props })
);
FieldGroup.displayName = "FieldGroup";
const FieldLabel = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  import_label.Label,
  {
    ref,
    className: (0, import_utils.cn)("text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground", className),
    ...props
  }
));
FieldLabel.displayName = "FieldLabel";
const FieldDescription = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { ref, className: (0, import_utils.cn)("text-xs leading-relaxed text-muted-foreground", className), ...props })
);
FieldDescription.displayName = "FieldDescription";
const FieldError = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { ref, className: (0, import_utils.cn)("text-xs font-medium text-destructive", className), ...props })
);
FieldError.displayName = "FieldError";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel
});
//# sourceMappingURL=field.cjs.map