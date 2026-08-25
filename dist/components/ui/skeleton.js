import { jsx } from "react/jsx-runtime";
import { cn } from "../../lib/utils";
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "aria-hidden": "true",
      className: cn("skeleton-shimmer rounded-md", className),
      ...props
    }
  );
}
export {
  Skeleton
};
//# sourceMappingURL=skeleton.js.map