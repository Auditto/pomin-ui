import { jsx } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../../lib/utils";
const ButtonGroup = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      role: "group",
      className: cn(
        "inline-flex items-center overflow-hidden rounded-md border border-border bg-card [&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l [&>*:not(:last-child)]:rounded-r-none",
        className
      ),
      ...props
    }
  )
);
ButtonGroup.displayName = "ButtonGroup";
export {
  ButtonGroup
};
//# sourceMappingURL=button-group.js.map