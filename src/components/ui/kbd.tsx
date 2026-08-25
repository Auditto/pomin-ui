import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const kbdVariants = cva(
  "pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100",
  {
    variants: {
      size: {
        default: "h-5 px-1.5 text-[10px]",
        sm: "h-4 px-1 text-[9px]",
        lg: "h-6 px-2 text-[12px]",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

export interface KbdProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof kbdVariants> {}

const Kbd = React.forwardRef<HTMLSpanElement, KbdProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <kbd
        ref={ref}
        className={cn(kbdVariants({ size, className }))}
        {...props}
      />
    );
  }
);
Kbd.displayName = "Kbd";

export { Kbd, kbdVariants };
