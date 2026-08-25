import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { FolderOpen } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "./button";
const EmptyState = React.forwardRef(
  ({ className, title, description, icon, action, ...props }, ref) => {
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: cn(
          "flex flex-col items-center justify-center rounded-lg border border-dashed p-12 text-center animate-in fade-in zoom-in-95 duration-500",
          className
        ),
        ...props,
        children: [
          /* @__PURE__ */ jsx("div", { className: "flex h-20 w-20 items-center justify-center rounded-full bg-muted", children: icon || /* @__PURE__ */ jsx(FolderOpen, { className: "h-10 w-10 text-muted-foreground/60" }) }),
          /* @__PURE__ */ jsx("h3", { className: "mt-4 text-lg font-semibold", children: title }),
          description && /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground max-w-xs", children: description }),
          action && /* @__PURE__ */ jsx(
            Button,
            {
              variant: "outline",
              className: "mt-6",
              onClick: action.onClick,
              children: action.label
            }
          )
        ]
      }
    );
  }
);
EmptyState.displayName = "EmptyState";
export {
  EmptyState
};
//# sourceMappingURL=empty-state.js.map