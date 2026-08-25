import * as React from "react";
import { cn } from "../../lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const textareaVariants = cva(
  "flex min-h-[80px] w-full rounded-md border border-input bg-card px-3 py-2 text-sm ring-offset-background transition-all duration-200 ease-hub placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "focus:border-primary/50",
        filled: "bg-secondary/50 focus:bg-card",
        glass: "border-border/60 bg-card/80 focus:bg-card",
        error: "border-destructive focus-visible:ring-destructive",
        success: "border-success focus-visible:ring-success",
      },
      density: {
        compact: "py-1 text-xs min-h-[60px]",
        default: "py-2",
        spacious: "py-4 text-base min-h-[120px]",
      },
    },
    defaultVariants: {
      variant: "default",
      density: "default",
    },
  }
);

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, density, ...props }, ref) => {
    return (
      <textarea
        className={cn(textareaVariants({ variant, density, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
