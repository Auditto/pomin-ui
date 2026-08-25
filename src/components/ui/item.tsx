import * as React from "react";
import { cn } from "../../lib/utils";

const Item = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("hub-row flex items-start gap-3 rounded-2xl p-4", className)}
      {...props}
    />
  ),
);
Item.displayName = "Item";

const ItemMedia = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-[3px] bg-primary/10 text-primary [&_svg]:stroke-[1.75]", className)}
      {...props}
    />
  ),
);
ItemMedia.displayName = "ItemMedia";

const ItemContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("min-w-0 flex-1 space-y-1", className)} {...props} />
  ),
);
ItemContent.displayName = "ItemContent";

const ItemTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-sm font-semibold leading-none tracking-tight", className)} {...props} />
  ),
);
ItemTitle.displayName = "ItemTitle";

const ItemDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-xs leading-relaxed text-muted-foreground", className)} {...props} />
  ),
);
ItemDescription.displayName = "ItemDescription";

const ItemActions = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("ml-auto flex shrink-0 items-center gap-2", className)} {...props} />
  ),
);
ItemActions.displayName = "ItemActions";

export { Item, ItemMedia, ItemContent, ItemTitle, ItemDescription, ItemActions };
