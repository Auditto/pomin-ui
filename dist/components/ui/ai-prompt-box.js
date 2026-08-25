import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../../lib/utils";
import { Sparkles, Send, Command as CmdIcon } from "lucide-react";
import { Button } from "./button";
const AIPromptBox = React.forwardRef(
  ({ className, onSend, isLoading, value, onChange, ...props }, ref) => {
    const internalRef = React.useRef(null);
    const handleKeyDown = (e) => {
      if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onSend?.(String(value || ""));
      }
    };
    return /* @__PURE__ */ jsxs("div", { className: cn(
      "relative flex w-full flex-col rounded-2xl border bg-card/80 p-2 transition-all focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-primary/20",
      className
    ), children: [
      /* @__PURE__ */ jsx(
        "textarea",
        {
          ref: (node) => {
            internalRef.current = node;
            if (typeof ref === "function") ref(node);
            else if (ref) ref.current = node;
          },
          className: "min-h-[100px] w-full resize-none bg-transparent p-3 text-sm focus:outline-none placeholder:text-muted-foreground/60",
          onKeyDown: handleKeyDown,
          value,
          onChange,
          ...props
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-2 py-1 border-t border-border/40", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 text-[10px] text-muted-foreground bg-muted/50 px-2 py-1 rounded-md", children: [
            /* @__PURE__ */ jsx(CmdIcon, { size: 10 }),
            " + Enter para enviar"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "h-4 w-px bg-border/40" }),
          /* @__PURE__ */ jsx(Sparkles, { size: 14, className: "text-primary animate-pulse" })
        ] }),
        /* @__PURE__ */ jsxs(
          Button,
          {
            size: "sm",
            variant: "shiny",
            className: "h-8 rounded-md px-4",
            onClick: () => onSend?.(String(value || "")),
            loading: isLoading,
            disabled: !String(value || "").trim(),
            children: [
              "Gerar ",
              /* @__PURE__ */ jsx(Send, { size: 12, className: "ml-2" })
            ]
          }
        )
      ] })
    ] });
  }
);
AIPromptBox.displayName = "AIPromptBox";
export {
  AIPromptBox
};
//# sourceMappingURL=ai-prompt-box.js.map