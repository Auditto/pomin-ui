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
var navbar_exports = {};
__export(navbar_exports, {
  Navbar: () => Navbar,
  NavbarActions: () => NavbarActions,
  NavbarBrand: () => NavbarBrand,
  NavbarContent: () => NavbarContent
});
module.exports = __toCommonJS(navbar_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var React = __toESM(require("react"), 1);
var import_utils = require("../../lib/utils");
const Navbar = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "header",
  {
    ref,
    className: (0, import_utils.cn)(
      "sticky top-0 z-30 flex h-16 w-full items-center border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 animate-in fade-in slide-in-from-top-2 duration-500",
      className
    ),
    ...props
  }
));
Navbar.displayName = "Navbar";
const NavbarBrand = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "div",
  {
    ref,
    className: (0, import_utils.cn)("flex items-center gap-2 font-semibold", className),
    ...props
  }
));
NavbarBrand.displayName = "NavbarBrand";
const NavbarContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "div",
  {
    ref,
    className: (0, import_utils.cn)("flex flex-1 items-center gap-4 px-4", className),
    ...props
  }
));
NavbarContent.displayName = "NavbarContent";
const NavbarActions = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "div",
  {
    ref,
    className: (0, import_utils.cn)("flex items-center gap-2", className),
    ...props
  }
));
NavbarActions.displayName = "NavbarActions";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Navbar,
  NavbarActions,
  NavbarBrand,
  NavbarContent
});
//# sourceMappingURL=navbar.cjs.map