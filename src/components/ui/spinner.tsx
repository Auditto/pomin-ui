import * as React from "react";
import { Loader2 } from "lucide-react";
import { cn } from "../../lib/utils";

type SpinnerProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: "sm" | "md" | "lg";
  label?: string;
};

const sizeClass = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8",
};

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size = "md", label = "Carregando", ...props }, ref) => (
    <div ref={ref} role="status" className={cn("inline-flex items-center gap-2 text-primary", className)} {...props}>
      <Loader2 className={cn("animate-spin stroke-[1.75]", sizeClass[size])} />
      <span className="sr-only">{label}</span>
    </div>
  ),
);
Spinner.displayName = "Spinner";

export { Spinner };
