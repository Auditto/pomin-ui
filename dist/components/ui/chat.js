import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Send, User, Bot } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "./button";
import { Textarea } from "./textarea";
const ChatContainer = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex h-full flex-col gap-4 p-4 animate-in fade-in duration-500", className),
    ...props
  }
));
ChatContainer.displayName = "ChatContainer";
const ChatMessages = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex-1 overflow-y-auto space-y-4 pr-2", className),
    ...props
  }
));
ChatMessages.displayName = "ChatMessages";
const ChatBubble = React.forwardRef(
  ({ className, variant = "received", sender, timestamp, avatar, children, ...props }, ref) => {
    const isSent = variant === "sent";
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: cn(
          "flex w-full items-end gap-2 animate-in slide-in-from-bottom-2 duration-300",
          isSent ? "flex-row-reverse" : "flex-row",
          className
        ),
        ...props,
        children: [
          /* @__PURE__ */ jsx("div", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted overflow-hidden", children: avatar || (isSent ? /* @__PURE__ */ jsx(User, { size: 16 }) : /* @__PURE__ */ jsx(Bot, { size: 16 })) }),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: cn(
                "flex max-w-[80%] flex-col gap-1",
                isSent ? "items-end" : "items-start"
              ),
              children: [
                sender && /* @__PURE__ */ jsx("span", { className: "text-[10px] font-medium text-muted-foreground px-1", children: sender }),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: cn(
                      "rounded-2xl px-4 py-2 text-sm shadow-sm",
                      isSent ? "bg-primary text-primary-foreground rounded-br-none" : "bg-muted text-foreground rounded-bl-none"
                    ),
                    children
                  }
                ),
                timestamp && /* @__PURE__ */ jsx("span", { className: "text-[10px] text-muted-foreground px-1", children: timestamp })
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
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      className: cn("flex items-end gap-2 border-t pt-4", className),
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          Textarea,
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
        /* @__PURE__ */ jsx(
          Button,
          {
            size: "icon",
            className: "rounded-full shrink-0",
            onClick: onSend,
            disabled: !value?.trim(),
            children: /* @__PURE__ */ jsx(Send, { size: 18 })
          }
        )
      ]
    }
  );
});
ChatInput.displayName = "ChatInput";
export {
  ChatBubble,
  ChatContainer,
  ChatInput,
  ChatMessages
};
//# sourceMappingURL=chat.js.map