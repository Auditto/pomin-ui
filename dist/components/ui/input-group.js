import { jsx } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../../lib/utils";
const InputGroup = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn(
        "flex min-h-10 w-full items-center overflow-hidden rounded-md border border-input bg-card transition-all focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
        className
      ),
      ...props
    }
  )
);
InputGroup.displayName = "InputGroup";
const InputGroupAddon = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn("flex h-full items-center gap-2 bg-muted/60 px-3 text-sm text-muted-foreground", className),
      ...props
    }
  )
);
InputGroupAddon.displayName = "InputGroupAddon";
const InputGroupInput = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    "input",
    {
      ref,
      className: cn(
        "h-10 min-w-0 flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props
    }
  )
);
InputGroupInput.displayName = "InputGroupInput";
const InputGroupButton = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    "button",
    {
      ref,
      className: cn(
        "h-10 border-l border-border px-3 text-xs font-medium text-primary transition-colors hover:bg-black/[0.04] dark:hover:bg-white/[0.04]",
        className
      ),
      ...props
    }
  )
);
InputGroupButton.displayName = "InputGroupButton";
export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput
};
//# sourceMappingURL=input-group.js.map