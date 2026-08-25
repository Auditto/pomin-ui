import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { cn } from "../../lib/utils";
import { Card, CardContent } from "./card";
const toneClass = {
  blue: "bg-hub-blue text-hub-blue",
  emerald: "bg-hub-emerald text-hub-emerald",
  amber: "bg-hub-amber text-hub-amber",
  rose: "bg-hub-rose text-hub-rose",
  indigo: "bg-hub-indigo text-hub-indigo",
  neutral: "bg-muted-foreground text-muted-foreground"
};
const StatCard = React.forwardRef(
  ({ className, title, value, description, icon, tone = "blue", trend, ...props }, ref) => /* @__PURE__ */ jsx(
    Card,
    {
      ref,
      className: cn("hub-card cine-card overflow-hidden animate-in zoom-in-95 duration-500", className),
      ...props,
      children: /* @__PURE__ */ jsxs(CardContent, { className: "p-5 sm:p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex min-w-0 items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: cn("h-1.5 w-1.5 rounded-full", toneClass[tone].split(" ")[0]) }),
            /* @__PURE__ */ jsx("p", { className: "kpi-label truncate", children: title })
          ] }),
          icon && /* @__PURE__ */ jsx("div", { className: cn("shrink-0 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:stroke-[1.75]", toneClass[tone].split(" ")[1]), children: icon })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "kpi-value text-2xl tabular-nums sm:text-3xl", children: value }),
        (description || trend) && /* @__PURE__ */ jsxs("div", { className: "mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground", children: [
          trend && /* @__PURE__ */ jsxs(
            "div",
            {
              className: cn(
                "flex items-center font-medium tabular-nums",
                trend.direction === "up" && "text-success",
                trend.direction === "down" && "text-destructive",
                trend.direction === "neutral" && "text-muted-foreground"
              ),
              children: [
                trend.direction === "up" && /* @__PURE__ */ jsx(ArrowUpRight, { className: "mr-1 h-3 w-3 stroke-[1.75]" }),
                trend.direction === "down" && /* @__PURE__ */ jsx(ArrowDownRight, { className: "mr-1 h-3 w-3 stroke-[1.75]" }),
                trend.value,
                "%"
              ]
            }
          ),
          /* @__PURE__ */ jsx("p", { children: description || trend?.label })
        ] })
      ] })
    }
  )
);
StatCard.displayName = "StatCard";
export {
  StatCard
};
//# sourceMappingURL=stat-card.js.map