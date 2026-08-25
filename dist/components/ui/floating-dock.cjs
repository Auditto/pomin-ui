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
var floating_dock_exports = {};
__export(floating_dock_exports, {
  FloatingDock: () => FloatingDock
});
module.exports = __toCommonJS(floating_dock_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var React = __toESM(require("react"), 1);
var import_utils = require("../../lib/utils");
var import_framer_motion = require("framer-motion");
const FloatingDock = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      className: (0, import_utils.cn)(
        "fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 animate-in items-end gap-3 rounded-2xl border border-border/60 bg-card/95 p-3 shadow-md backdrop-blur-md duration-500 slide-in-from-bottom-4",
        className
      ),
      children: items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "div",
        {
          className: "relative flex flex-col items-center",
          onMouseEnter: () => setHoveredIndex(index),
          onMouseLeave: () => setHoveredIndex(null),
          onClick: item.onClick,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_framer_motion.AnimatePresence, { children: hoveredIndex === index && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_framer_motion.motion.div,
              {
                initial: { opacity: 0, y: 10, scale: 0.8 },
                animate: { opacity: 1, y: -40, scale: 1 },
                exit: { opacity: 0, y: 10, scale: 0.8 },
                className: "absolute whitespace-nowrap rounded-md border border-border bg-popover px-2 py-1 text-[10px] font-semibold text-popover-foreground shadow-md",
                children: item.label
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_framer_motion.motion.div,
              {
                animate: {
                  scale: hoveredIndex === index ? 1.4 : 1,
                  y: hoveredIndex === index ? -5 : 0
                },
                className: "flex h-10 w-10 items-center justify-center rounded-md bg-muted text-foreground transition-colors hover:bg-black/[0.04] dark:hover:bg-white/[0.04] [&_svg]:stroke-[1.75]",
                children: item.icon
              }
            )
          ]
        },
        index
      ))
    }
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FloatingDock
});
//# sourceMappingURL=floating-dock.cjs.map