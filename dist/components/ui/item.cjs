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
var item_exports = {};
__export(item_exports, {
  Item: () => Item,
  ItemActions: () => ItemActions,
  ItemContent: () => ItemContent,
  ItemDescription: () => ItemDescription,
  ItemMedia: () => ItemMedia,
  ItemTitle: () => ItemTitle
});
module.exports = __toCommonJS(item_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var React = __toESM(require("react"), 1);
var import_utils = require("../../lib/utils");
const Item = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      ref,
      className: (0, import_utils.cn)("hub-row flex items-start gap-3 rounded-2xl p-4", className),
      ...props
    }
  )
);
Item.displayName = "Item";
const ItemMedia = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      ref,
      className: (0, import_utils.cn)("flex h-10 w-10 shrink-0 items-center justify-center rounded-[3px] bg-primary/10 text-primary [&_svg]:stroke-[1.75]", className),
      ...props
    }
  )
);
ItemMedia.displayName = "ItemMedia";
const ItemContent = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref, className: (0, import_utils.cn)("min-w-0 flex-1 space-y-1", className), ...props })
);
ItemContent.displayName = "ItemContent";
const ItemTitle = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { ref, className: (0, import_utils.cn)("text-sm font-semibold leading-none tracking-tight", className), ...props })
);
ItemTitle.displayName = "ItemTitle";
const ItemDescription = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { ref, className: (0, import_utils.cn)("text-xs leading-relaxed text-muted-foreground", className), ...props })
);
ItemDescription.displayName = "ItemDescription";
const ItemActions = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref, className: (0, import_utils.cn)("ml-auto flex shrink-0 items-center gap-2", className), ...props })
);
ItemActions.displayName = "ItemActions";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle
});
//# sourceMappingURL=item.cjs.map