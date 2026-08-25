import * as React from "react";
import { cn } from "../../lib/utils";

const TypographyH1 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h1 ref={ref} className={cn("font-display text-3xl font-semibold tracking-tight", className)} {...props} />
  ),
);
TypographyH1.displayName = "TypographyH1";

const TypographyH2 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h2 ref={ref} className={cn("font-display text-xl font-semibold tracking-tight", className)} {...props} />
  ),
);
TypographyH2.displayName = "TypographyH2";

const TypographyP = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm leading-relaxed text-foreground", className)} {...props} />
  ),
);
TypographyP.displayName = "TypographyP";

const TypographyMuted = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm leading-relaxed text-muted-foreground", className)} {...props} />
  ),
);
TypographyMuted.displayName = "TypographyMuted";

const TypographyLabel = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn("text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground", className)}
      {...props}
    />
  ),
);
TypographyLabel.displayName = "TypographyLabel";

export { TypographyH1, TypographyH2, TypographyP, TypographyMuted, TypographyLabel };
