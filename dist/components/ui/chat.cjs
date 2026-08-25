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
var chat_exports = {};
__export(chat_exports, {
  ChatBubble: () => ChatBubble,
  ChatContainer: () => ChatContainer,
  ChatInput: () => ChatInput,
  ChatMessages: () => ChatMessages
});
module.exports = __toCommonJS(chat_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var React = __toESM(require("react"), 1);
var import_lucide_react = require("lucide-react");
var import_utils = require("../../lib/utils");
var import_button = require("./button");
var import_textarea = require("./textarea");
const ChatContainer = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "div",
  {
    ref,
    className: (0, import_utils.cn)("flex h-full flex-col gap-4 p-4 animate-in fade-in duration-500", className),
    ...props
  }
));
ChatContainer.displayName = "ChatContainer";
const ChatMessages = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "div",
  {
    ref,
    className: (0, import_utils.cn)("flex-1 overflow-y-auto space-y-4 pr-2", className),
    ...props
  }
));
ChatMessages.displayName = "ChatMessages";
const ChatBubble = React.forwardRef(
  ({ className, variant = "received", sender, timestamp, avatar, children, ...props }, ref) => {
    const isSent = variant === "sent";
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        ref,
        className: (0, import_utils.cn)(
          "flex w-full items-end gap-2 animate-in slide-in-from-bottom-2 duration-300",
          isSent ? "flex-row-reverse" : "flex-row",
          className
        ),
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted overflow-hidden", children: avatar || (isSent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.User, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Bot, { size: 16 })) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            "div",
            {
              className: (0, import_utils.cn)(
                "flex max-w-[80%] flex-col gap-1",
                isSent ? "items-end" : "items-start"
              ),
              children: [
                sender && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-[10px] font-medium text-muted-foreground px-1", children: sender }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "div",
                  {
                    className: (0, import_utils.cn)(
                      "rounded-2xl px-4 py-2 text-sm shadow-sm",
                      isSent ? "bg-primary text-primary-foreground rounded-br-none" : "bg-muted text-foreground rounded-bl-none"
                    ),
                    children
                  }
                ),
                timestamp && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-[10px] text-muted-foreground px-1", children: timestamp })
              ]
            }
          )
        ]
      }
    );
  }
);
ChatBubble.displayName = "ChatBubble";
const ChatInput = React.forwardRef(({ className, value, onValueChange, onSend, placeholder = "Digite uma mensagem...", ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      ref,
      className: (0, import_utils.cn)("flex items-end gap-2 border-t pt-4", className),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_textarea.Textarea,
          {
            value,
            onChange: (e) => onValueChange?.(e.target.value),
            placeholder,
            className: "min-h-[44px] max-h-32 resize-none rounded-xl",
            onKeyDown: (e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                onSend?.();
              }
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_button.Button,
          {
            size: "icon",
            className: "rounded-full shrink-0",
            onClick: onSend,
            disabled: !value?.trim(),
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Send, { size: 18 })
          }
        )
      ]
    }
  );
});
ChatInput.displayName = "ChatInput";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ChatBubble,
  ChatContainer,
  ChatInput,
  ChatMessages
});
//# sourceMappingURL=chat.cjs.map