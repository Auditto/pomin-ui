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
var stepper_exports = {};
__export(stepper_exports, {
  Stepper: () => Stepper
});
module.exports = __toCommonJS(stepper_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var React = __toESM(require("react"), 1);
var import_utils = require("../../lib/utils");
var import_class_variance_authority = require("class-variance-authority");
const stepperVariants = (0, import_class_variance_authority.cva)(
  "flex w-full items-start gap-4",
  {
    variants: {
      orientation: {
        horizontal: "flex-row items-center",
        vertical: "flex-col"
      }
    },
    defaultVariants: {
      orientation: "horizontal"
    }
  }
);
const Stepper = React.forwardRef(
  ({ className, steps, currentStep, orientation, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref, className: (0, import_utils.cn)(stepperVariants({ orientation, className })), ...props, children: steps.map((step, index) => {
      const isActive = index === currentStep;
      const isCompleted = index < currentStep;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: (0, import_utils.cn)(
        "flex items-center gap-3",
        orientation === "horizontal" && "flex-1 last:flex-none"
      ), children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: (0, import_utils.cn)(
            "flex h-8 w-8 items-center justify-center rounded-[3px] border text-xs font-bold transition-all duration-300",
            isActive && "scale-105 border-primary bg-primary text-primary-foreground shadow-sm",
            isCompleted && "border-primary bg-primary text-primary-foreground",
            !isActive && !isCompleted && "border-muted bg-background text-muted-foreground"
          ), children: isCompleted ? "\u2713" : index + 1 }),
          orientation === "vertical" && index !== steps.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: (0, import_utils.cn)(
            "my-1 h-12 w-0.5 transition-colors duration-300",
            isCompleted ? "bg-primary" : "bg-muted"
          ) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-col text-left", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: (0, import_utils.cn)(
            "text-sm font-semibold leading-none",
            isActive ? "text-foreground" : "text-muted-foreground"
          ), children: step.title }),
          step.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1 text-xs text-muted-foreground line-clamp-1", children: step.description })
        ] }),
        orientation === "horizontal" && index !== steps.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: (0, import_utils.cn)(
          "mx-4 h-0.5 flex-1 transition-colors duration-300",
          isCompleted ? "bg-primary" : "bg-muted"
        ) })
      ] }, index);
    }) });
  }
);
Stepper.displayName = "Stepper";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Stepper
});
//# sourceMappingURL=stepper.cjs.map