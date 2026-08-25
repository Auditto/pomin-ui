import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Search, X } from "lucide-react";
import { cn } from "../../lib/utils";
import { Input } from "./input";
import { Button } from "./button";
const SearchBar = React.forwardRef(
  ({ className, onClear, showShortcut = true, value, onChange, ...props }, ref) => {
    return /* @__PURE__ */ jsxs("div", { className: cn("relative flex w-full max-w-sm items-center animate-in fade-in duration-500", className), children: [
      /* @__PURE__ */ jsx(Search, { className: "absolute left-3 h-4 w-4 text-muted-foreground" }),
      /* @__PURE__ */ jsx(
        Input,
        {
          ...props,
          ref,
          value,
          onChange,
          className: "pl-9 pr-12 h-10 rounded-full bg-muted/50 focus:bg-background transition-all"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "absolute right-3 flex items-center gap-1", children: [
        value && /* @__PURE__ */ jsx(
          Button,
          {
            type: "button",
            variant: "ghost",
            size: "icon",
            className: "h-6 w-6 rounded-full",
            onClick: onClear,
            children: /* @__PURE__ */ jsx(X, { className: "h-3 w-3" })
          }
        ),
        showShortcut && !value && /* @__PURE__ */ jsxs("kbd", { className: "pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs", children: "\u2318" }),
          "K"
        ] })
      ] })
    ] });
  }
);
SearchBar.displayName = "SearchBar";
export {
  SearchBar
};
//# sourceMappingURL=search-bar.js.map