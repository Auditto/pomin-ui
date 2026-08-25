import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../../lib/utils";
const Timeline = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("space-y-4 animate-in fade-in duration-500", className),
    ...props
  }
));
Timeline.displayName = "Timeline";
const TimelineItem = React.forwardRef(
  ({ className, title, time, icon, isActive, children, ...props }, ref) => /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      className: cn(
        "relative pl-8 pb-4 last:pb-0 animate-in slide-in-from-left-2 duration-300",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute left-[11px] top-2 h-full w-px bg-muted group-last:hidden" }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              "absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border bg-background shadow-sm",
              isActive ? "border-primary text-primary" : "border-muted text-muted-foreground"
            ),
            children: icon || /* @__PURE__ */ jsx("div", { className: cn("h-2 w-2 rounded-full", isActive ? "bg-primary" : "bg-muted-foreground/30") })
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold leading-none", children: title }),
            /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground whitespace-nowrap", children: time })
          ] }),
          children && /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground mt-1", children })
        ] })
      ]
    }
  )
);
TimelineItem.displayName = "TimelineItem";
export {
  Timeline,
  TimelineItem
};
//# sourceMappingURL=timeline.js.map