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
var timeline_exports = {};
__export(timeline_exports, {
  Timeline: () => Timeline,
  TimelineItem: () => TimelineItem
});
module.exports = __toCommonJS(timeline_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var React = __toESM(require("react"), 1);
var import_utils = require("../../lib/utils");
const Timeline = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "div",
  {
    ref,
    className: (0, import_utils.cn)("space-y-4 animate-in fade-in duration-500", className),
    ...props
  }
));
Timeline.displayName = "Timeline";
const TimelineItem = React.forwardRef(
  ({ className, title, time, icon, isActive, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      ref,
      className: (0, import_utils.cn)(
        "relative pl-8 pb-4 last:pb-0 animate-in slide-in-from-left-2 duration-300",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-[11px] top-2 h-full w-px bg-muted group-last:hidden" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "div",
          {
            className: (0, import_utils.cn)(
              "absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border bg-background shadow-sm",
              isActive ? "border-primary text-primary" : "border-muted text-muted-foreground"
            ),
            children: icon || /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: (0, import_utils.cn)("h-2 w-2 rounded-full", isActive ? "bg-primary" : "bg-muted-foreground/30") })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { className: "text-sm font-semibold leading-none", children: title }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-xs text-muted-foreground whitespace-nowrap", children: time })
          ] }),
          children && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-sm text-muted-foreground mt-1", children })
        ] })
      ]
    }
  )
);
TimelineItem.displayName = "TimelineItem";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Timeline,
  TimelineItem
});
//# sourceMappingURL=timeline.cjs.map