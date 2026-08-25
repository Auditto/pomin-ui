import * as React from "react";
import { cn } from "../../lib/utils";

const ButtonGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      role="group"
      className={cn(
        "inline-flex items-center overflow-hidden rounded-md border border-border bg-card [&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l [&>*:not(:last-child)]:rounded-r-none",
        className,
      )}
      {...props}
    />
  ),
);
ButtonGroup.displayName = "ButtonGroup";

export { ButtonGroup };
