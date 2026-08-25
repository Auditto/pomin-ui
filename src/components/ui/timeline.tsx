import * as React from "react";
import { cn } from "../../lib/utils";

const Timeline = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("space-y-4 animate-in fade-in duration-500", className)}
    {...props}
  />
));
Timeline.displayName = "Timeline";

interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  time: string;
  icon?: React.ReactNode;
  isActive?: boolean;
}

const TimelineItem = React.forwardRef<HTMLDivElement, TimelineItemProps>(
  ({ className, title, time, icon, isActive, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative pl-8 pb-4 last:pb-0 animate-in slide-in-from-left-2 duration-300",
        className
      )}
      {...props}
    >
      {/* Line */}
      <div className="absolute left-[11px] top-2 h-full w-px bg-muted group-last:hidden" />
      
      {/* Dot/Icon */}
      <div
        className={cn(
          "absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border bg-background shadow-sm",
          isActive ? "border-primary text-primary" : "border-muted text-muted-foreground"
        )}
      >
        {icon || <div className={cn("h-2 w-2 rounded-full", isActive ? "bg-primary" : "bg-muted-foreground/30")} />}
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between gap-2">
          <h4 className="text-sm font-semibold leading-none">{title}</h4>
          <span className="text-xs text-muted-foreground whitespace-nowrap">{time}</span>
        </div>
        {children && <div className="text-sm text-muted-foreground mt-1">{children}</div>}
      </div>
    </div>
  )
);
TimelineItem.displayName = "TimelineItem";

export { Timeline, TimelineItem };
