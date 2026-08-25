"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var ai_prompt_box_exports = {};
__export(ai_prompt_box_exports, {
  AIPromptBox: () => AIPromptBox
});
module.exports = __toCommonJS(ai_prompt_box_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var React = __toESM(require("react"), 1);
var import_utils = require("../../lib/utils");
var import_lucide_react = require("lucide-react");
var import_button = require("./button");
const AIPromptBox = React.forwardRef(
  ({ className, onSend, isLoading, value, onChange, ...props }, ref) => {
    const internalRef = React.useRef(null);
    const handleKeyDown = (e) => {
      if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onSend?.(String(value || ""));
      }
    };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: (0, import_utils.cn)(
      "relative flex w-full flex-col rounded-2xl border bg-card/80 p-2 transition-all focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-primary/20",
      className
    ), children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-between px-2 py-1 border-t border-border/40", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-1 text-[10px] text-muted-foreground bg-muted/50 px-2 py-1 rounded-md", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Command, { size: 10 }),
            " + Enter para enviar"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-px bg-border/40" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Sparkles, { size: 14, className: "text-primary animate-pulse" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          import_button.Button,
          {
            size: "sm",
            variant: "shiny",
            className: "h-8 rounded-md px-4",
            onClick: () => onSend?.(String(value || "")),
            loading: isLoading,
            disabled: !String(value || "").trim(),
            children: [
              "Gerar ",
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Send, { size: 12, className: "ml-2" })
            ]
          }
        )
      ] })
    ] });
  }
);
AIPromptBox.displayName = "AIPromptBox";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AIPromptBox
});
//# sourceMappingURL=ai-prompt-box.cjs.map