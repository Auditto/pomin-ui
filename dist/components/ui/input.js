import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";
const inputVariants = cva(
  "flex w-full rounded-md border border-input bg-card px-3 py-2 text-sm ring-offset-background transition-all duration-200 ease-hub file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "focus:border-primary/50",
        filled: "bg-secondary/50 focus:bg-card",
        glass: "border-border/60 bg-card/80 focus:bg-card",
        error: "border-destructive focus-visible:ring-destructive",
        success: "border-success focus-visible:ring-success"
      },
      density: {
        compact: "h-8 px-2 text-xs",
        default: "h-10",
        spacious: "h-12 px-4 text-base"
      }
    },
    defaultVariants: {
      variant: "default",
      density: "default"
    }
  }
);
const Input = React.forwardRef(
  ({ className, variant, density, type, leftIcon, rightIcon, ...props }, ref) => /* @__PURE__ */ jsxs("div", { className: "group relative w-full", children: [
    leftIcon && /* @__PURE__ */ jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary [&_svg]:stroke-[1.75]", children: leftIcon }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn(
          inputVariants({ variant, density }),
          leftIcon && "pl-10",
          rightIcon && "pr-10",
          className
        ),
        ref,
        ...props
      }
    ),
    rightIcon && /* @__PURE__ */ jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary [&_svg]:stroke-[1.75]", children: rightIcon })
  ] })
);
Input.displayName = "Input";
export {
  Input,
  inputVariants
};
//# sourceMappingURL=input.js.map