import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../../lib/utils";
import { cva } from "class-variance-authority";
const stepperVariants = cva(
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
    return /* @__PURE__ */ jsx("div", { ref, className: cn(stepperVariants({ orientation, className })), ...props, children: steps.map((step, index) => {
      const isActive = index === currentStep;
      const isCompleted = index < currentStep;
      return /* @__PURE__ */ jsxs("div", { className: cn(
        "flex items-center gap-3",
        orientation === "horizontal" && "flex-1 last:flex-none"
      ), children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsx("div", { className: cn(
            "flex h-8 w-8 items-center justify-center rounded-[3px] border text-xs font-bold transition-all duration-300",
            isActive && "scale-105 border-primary bg-primary text-primary-foreground shadow-sm",
            isCompleted && "border-primary bg-primary text-primary-foreground",
            !isActive && !isCompleted && "border-muted bg-background text-muted-foreground"
          ), children: isCompleted ? "\u2713" : index + 1 }),
          orientation === "vertical" && index !== steps.length - 1 && /* @__PURE__ */ jsx("div", { className: cn(
            "my-1 h-12 w-0.5 transition-colors duration-300",
            isCompleted ? "bg-primary" : "bg-muted"
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col text-left", children: [
          /* @__PURE__ */ jsx("span", { className: cn(
            "text-sm font-semibold leading-none",
            isActive ? "text-foreground" : "text-muted-foreground"
          ), children: step.title }),
          step.description && /* @__PURE__ */ jsx("span", { className: "mt-1 text-xs text-muted-foreground line-clamp-1", children: step.description })
        ] }),
        orientation === "horizontal" && index !== steps.length - 1 && /* @__PURE__ */ jsx("div", { className: cn(
          "mx-4 h-0.5 flex-1 transition-colors duration-300",
          isCompleted ? "bg-primary" : "bg-muted"
        ) })
      ] }, index);
    }) });
  }
);
Stepper.displayName = "Stepper";
export {
  Stepper
};
//# sourceMappingURL=stepper.js.map