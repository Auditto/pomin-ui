import * as React from "react";
import { FolderOpen } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "./button";

interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  action?: {
    label: string;
    onClick: () => void;
  };
}

const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ className, title, description, icon, action, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col items-center justify-center rounded-lg border border-dashed p-12 text-center animate-in fade-in zoom-in-95 duration-500",
          className
        )}
        {...props}
      >
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
          {icon || <FolderOpen className="h-10 w-10 text-muted-foreground/60" />}
        </div>
        <h3 className="mt-4 text-lg font-semibold">{title}</h3>
        {description && (
          <p className="mt-2 text-sm text-muted-foreground max-w-xs">
            {description}
          </p>
        )}
        {action && (
          <Button
            variant="outline"
            className="mt-6"
            onClick={action.onClick}
          >
            {action.label}
          </Button>
        )}
      </div>
    );
  }
);
EmptyState.displayName = "EmptyState";

export { EmptyState };
