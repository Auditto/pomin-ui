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
var pagination_exports = {};
__export(pagination_exports, {
  Pagination: () => Pagination,
  PaginationContent: () => PaginationContent,
  PaginationEllipsis: () => PaginationEllipsis,
  PaginationItem: () => PaginationItem,
  PaginationLink: () => PaginationLink,
  PaginationNext: () => PaginationNext,
  PaginationPrevious: () => PaginationPrevious
});
module.exports = __toCommonJS(pagination_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var React = __toESM(require("react"), 1);
var import_lucide_react = require("lucide-react");
var import_utils = require("../../lib/utils");
var import_button = require("./button");
const Pagination = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: (0, import_utils.cn)("mx-auto flex w-full justify-center", className),
    ...props
  }
);
Pagination.displayName = "Pagination";
const PaginationContent = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { ref, className: (0, import_utils.cn)("flex flex-row items-center gap-1", className), ...props })
);
PaginationContent.displayName = "PaginationContent";
const PaginationItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { ref, className: (0, import_utils.cn)("", className), ...props }));
PaginationItem.displayName = "PaginationItem";
const PaginationLink = ({ className, isActive, size = "icon", ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "a",
  {
    "aria-current": isActive ? "page" : void 0,
    className: (0, import_utils.cn)(
      (0, import_button.buttonVariants)({
        variant: isActive ? "outline" : "ghost",
        size
      }),
      className
    ),
    ...props
  }
);
PaginationLink.displayName = "PaginationLink";
const PaginationPrevious = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PaginationLink, { "aria-label": "Go to previous page", size: "default", className: (0, import_utils.cn)("gap-1 pl-2.5", className), ...props, children: [
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronLeft, { className: "h-4 w-4" }),
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Previous" })
] });
PaginationPrevious.displayName = "PaginationPrevious";
const PaginationNext = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PaginationLink, { "aria-label": "Go to next page", size: "default", className: (0, import_utils.cn)("gap-1 pr-2.5", className), ...props, children: [
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Next" }),
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronRight, { className: "h-4 w-4" })
] });
PaginationNext.displayName = "PaginationNext";
const PaginationEllipsis = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { "aria-hidden": true, className: (0, import_utils.cn)("flex h-9 w-9 items-center justify-center", className), ...props, children: [
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.MoreHorizontal, { className: "h-4 w-4" }),
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "sr-only", children: "More pages" })
] });
PaginationEllipsis.displayName = "PaginationEllipsis";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
});
//# sourceMappingURL=pagination.cjs.map