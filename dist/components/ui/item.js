import { jsx } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../../lib/utils";
const Item = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn("hub-row flex items-start gap-3 rounded-2xl p-4", className),
      ...props
    }
  )
);
Item.displayName = "Item";
const ItemMedia = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-[3px] bg-primary/10 text-primary [&_svg]:stroke-[1.75]", className),
      ...props
    }
  )
);
ItemMedia.displayName = "ItemMedia";
const ItemContent = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("min-w-0 flex-1 space-y-1", className), ...props })
);
ItemContent.displayName = "ItemContent";
const ItemTitle = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("h3", { ref, className: cn("text-sm font-semibold leading-none tracking-tight", className), ...props })
);
ItemTitle.displayName = "ItemTitle";
const ItemDescription = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("p", { ref, className: cn("text-xs leading-relaxed text-muted-foreground", className), ...props })
);
ItemDescription.displayName = "ItemDescription";
const ItemActions = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("ml-auto flex shrink-0 items-center gap-2", className), ...props })
);
ItemActions.displayName = "ItemActions";
export {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle
};
//# sourceMappingURL=item.js.map