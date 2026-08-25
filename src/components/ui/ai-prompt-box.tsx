import * as React from "react";
import { cn } from "../../lib/utils";
import { Sparkles, Send, Command as CmdIcon } from "lucide-react";
import { Button } from "./button";

interface AIPromptBoxProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  onSend?: (value: string) => void;
  isLoading?: boolean;
}

const AIPromptBox = React.forwardRef<HTMLTextAreaElement, AIPromptBoxProps>(
  ({ className, onSend, isLoading, value, onChange, ...props }, ref) => {
    const internalRef = React.useRef<HTMLTextAreaElement>(null);

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onSend?.(String(value || ""));
      }
    };

    return (
      <div className={cn(
        "relative flex w-full flex-col rounded-2xl border bg-card/80 p-2 transition-all focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-primary/20",
        className
      )}>
        <textarea
          ref={(node) => {
            // O ref do forwardRef chega como RefObject (current somente-leitura
            // no tipo), mas encaminhar um ref é justamente escrever nele —
            // daí o cast. Vale para o interno também.
            (internalRef as React.MutableRefObject<HTMLTextAreaElement | null>).current = node;
            if (typeof ref === "function") ref(node);
            else if (ref) (ref as React.MutableRefObject<HTMLTextAreaElement | null>).current = node;
          }}
          className="min-h-[100px] w-full resize-none bg-transparent p-3 text-sm focus:outline-none placeholder:text-muted-foreground/60"
          onKeyDown={handleKeyDown}
          value={value}
          onChange={onChange}
          {...props}
        />
        
        <div className="flex items-center justify-between px-2 py-1 border-t border-border/40">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-[10px] text-muted-foreground bg-muted/50 px-2 py-1 rounded-md">
              <CmdIcon size={10} /> + Enter para enviar
            </div>
            <div className="h-4 w-px bg-border/40" />
            <Sparkles size={14} className="text-primary animate-pulse" />
          </div>
          
          <Button 
            size="sm" 
            variant="shiny" 
            className="h-8 rounded-md px-4"
            onClick={() => onSend?.(String(value || ""))}
            loading={isLoading}
            disabled={!String(value || "").trim()}
          >
            Gerar <Send size={12} className="ml-2" />
          </Button>
        </div>
      </div>
    );
  }
);
AIPromptBox.displayName = "AIPromptBox";

export { AIPromptBox };
