import { jsx } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../../lib/utils";
const NativeSelect = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    "select",
    {
      ref,
      className: cn(
        "flex h-10 w-full rounded-md border border-input bg-card px-3 py-2 text-sm ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props
    }
  )
);
NativeSelect.displayName = "NativeSelect";
export {
  NativeSelect
};
//# sourceMappingURL=native-select.js.map