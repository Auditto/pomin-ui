import * as React from "react";
import { Send, User, Bot } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "./button";
import { Textarea } from "./textarea";

const ChatContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex h-full flex-col gap-4 p-4 animate-in fade-in duration-500", className)}
    {...props}
  />
));
ChatContainer.displayName = "ChatContainer";

const ChatMessages = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex-1 overflow-y-auto space-y-4 pr-2", className)}
    {...props}
  />
));
ChatMessages.displayName = "ChatMessages";

interface ChatBubbleProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "sent" | "received";
  sender?: string;
  timestamp?: string;
  avatar?: React.ReactNode;
}

const ChatBubble = React.forwardRef<HTMLDivElement, ChatBubbleProps>(
  ({ className, variant = "received", sender, timestamp, avatar, children, ...props }, ref) => {
    const isSent = variant === "sent";

    return (
      <div
        ref={ref}
        className={cn(
          "flex w-full items-end gap-2 animate-in slide-in-from-bottom-2 duration-300",
          isSent ? "flex-row-reverse" : "flex-row",
          className
        )}
        {...props}
      >
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted overflow-hidden">
          {avatar || (isSent ? <User size={16} /> : <Bot size={16} />)}
        </div>
        <div
          className={cn(
            "flex max-w-[80%] flex-col gap-1",
            isSent ? "items-end" : "items-start"
          )}
        >
          {sender && (
            <span className="text-[10px] font-medium text-muted-foreground px-1">
              {sender}
            </span>
          )}
          <div
            className={cn(
              "rounded-2xl px-4 py-2 text-sm shadow-sm",
              isSent
                ? "bg-primary text-primary-foreground rounded-br-none"
                : "bg-muted text-foreground rounded-bl-none"
            )}
          >
            {children}
          </div>
          {timestamp && (
            <span className="text-[10px] text-muted-foreground px-1">
              {timestamp}
            </span>
          )}
        </div>
      </div>
    );
  }
);
ChatBubble.displayName = "ChatBubble";

const ChatInput = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    value?: string;
    onValueChange?: (value: string) => void;
    onSend?: () => void;
    placeholder?: string;
  }
>(({ className, value, onValueChange, onSend, placeholder = "Digite uma mensagem...", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex items-end gap-2 border-t pt-4", className)}
      {...props}
    >
      <Textarea
        value={value}
        onChange={(e) => onValueChange?.(e.target.value)}
        placeholder={placeholder}
        className="min-h-[44px] max-h-32 resize-none rounded-xl"
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            onSend?.();
          }
        }}
      />
      <Button
        size="icon"
        className="rounded-full shrink-0"
        onClick={onSend}
        disabled={!value?.trim()}
      >
        <Send size={18} />
      </Button>
    </div>
  );
});
ChatInput.displayName = "ChatInput";

export { ChatContainer, ChatMessages, ChatBubble, ChatInput };
