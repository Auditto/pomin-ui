import { jsx } from "react/jsx-runtime";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";
const badgeVariants = cva(
  "inline-flex items-center rounded border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.08em] transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-primary/30 bg-primary/15 text-primary hover:bg-primary/20",
        secondary: "border-border/60 bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-destructive/30 bg-destructive/15 text-destructive hover:bg-destructive/20",
        outline: "border-border/70 text-foreground",
        success: "border-success/30 bg-success/15 text-success",
        warning: "border-warning/30 bg-warning/15 text-warning",
        shiny: "hub-gradient border-transparent text-primary-foreground shadow-sm"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn(badgeVariants({ variant }), className), ...props });
}
export {
  Badge,
  badgeVariants
};
//# sourceMappingURL=badge.js.map