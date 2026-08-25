"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var toaster_exports = {};
__export(toaster_exports, {
  Toaster: () => Toaster
});
module.exports = __toCommonJS(toaster_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_use_toast = require("../../hooks/use-toast");
var import_toast = require("./toast");
function Toaster() {
  const { toasts } = (0, import_use_toast.useToast)();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_toast.ToastProvider, { children: [
    toasts.map(function({ id, title, description, action, ...props }) {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_toast.Toast, { ...props, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "grid gap-1", children: [
          title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_toast.ToastTitle, { children: title }),
          description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_toast.ToastDescription, { children: description })
        ] }),
        action,
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_toast.ToastClose, {})
      ] }, id);
    }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_toast.ToastViewport, {})
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Toaster
});
//# sourceMappingURL=toaster.cjs.map