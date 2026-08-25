import { jsx } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../../lib/utils";
const TypographyH1 = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("h1", { ref, className: cn("font-display text-3xl font-semibold tracking-tight", className), ...props })
);
TypographyH1.displayName = "TypographyH1";
const TypographyH2 = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("h2", { ref, className: cn("font-display text-xl font-semibold tracking-tight", className), ...props })
);
TypographyH2.displayName = "TypographyH2";
const TypographyP = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("p", { ref, className: cn("text-sm leading-relaxed text-foreground", className), ...props })
);
TypographyP.displayName = "TypographyP";
const TypographyMuted = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("p", { ref, className: cn("text-sm leading-relaxed text-muted-foreground", className), ...props })
);
TypographyMuted.displayName = "TypographyMuted";
const TypographyLabel = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    "span",
    {
      ref,
      className: cn("text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground", className),
      ...props
    }
  )
);
TypographyLabel.displayName = "TypographyLabel";
export {
  TypographyH1,
  TypographyH2,
  TypographyLabel,
  TypographyMuted,
  TypographyP
};
//# sourceMappingURL=typography.js.map