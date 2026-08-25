import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Loader2 } from "lucide-react";
import { cn } from "../../lib/utils";
const sizeClass = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8"
};
const Spinner = React.forwardRef(
  ({ className, size = "md", label = "Carregando", ...props }, ref) => /* @__PURE__ */ jsxs("div", { ref, role: "status", className: cn("inline-flex items-center gap-2 text-primary", className), ...props, children: [
    /* @__PURE__ */ jsx(Loader2, { className: cn("animate-spin stroke-[1.75]", sizeClass[size]) }),
    /* @__PURE__ */ jsx("span", { className: "sr-only", children: label })
  ] })
);
Spinner.displayName = "Spinner";
export {
  Spinner
};
//# sourceMappingURL=spinner.js.map