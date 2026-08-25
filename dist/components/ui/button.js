import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "../../lib/utils";
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-200 ease-hub focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:stroke-[1.75] active:scale-[0.99]",
  {
    variants: {
      variant: {
        default: "hub-btn-primary hover:-translate-y-px active:translate-y-0",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm",
        outline: "border border-input bg-card hover:bg-black/[0.04] hover:text-foreground dark:hover:bg-white/[0.04]",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-black/[0.04] hover:text-foreground dark:hover:bg-white/[0.04]",
        link: "text-primary underline-offset-4 hover:underline",
        glass: "border border-border/60 bg-card/80 text-foreground hover:bg-black/[0.04] dark:hover:bg-white/[0.04]",
        shiny: "hub-btn-primary relative overflow-hidden hover:-translate-y-px active:translate-y-0"
      },
      size: {
        default: "h-10 px-4 py-2",
        xs: "h-7 px-2 text-[10px]",
        sm: "h-9 px-3 text-xs",
        lg: "h-11 px-6 text-base",
        xl: "h-12 px-8 text-base",
        icon: "h-10 w-10"
      },
      density: {
        compact: "h-8 px-2 text-xs",
        default: "",
        spacious: "h-12 px-6 text-base"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      density: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, density, asChild = false, loading = false, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const content = /* @__PURE__ */ jsxs(Fragment, { children: [
      loading && /* @__PURE__ */ jsx(Loader2, { className: "mr-2 h-4 w-4 animate-spin" }),
      children,
      variant === "shiny" && /* @__PURE__ */ jsx("span", { className: "absolute inset-0 block h-full w-full -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent" })
    ] });
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, density }), className),
        ref,
        disabled: disabled || loading,
        ...props,
        children: asChild ? children : content
      }
    );
  }
);
Button.displayName = "Button";
export {
  Button,
  buttonVariants
};
//# sourceMappingURL=button.js.map