import * as React from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { cn } from "../../lib/utils";
import { Card, CardContent } from "./card";

type StatTone = "blue" | "emerald" | "amber" | "rose" | "indigo" | "neutral";

interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  value: string | number;
  description?: string;
  icon?: React.ReactNode;
  tone?: StatTone;
  trend?: {
    value: number;
    label: string;
    direction: "up" | "down" | "neutral";
  };
}

const toneClass: Record<StatTone, string> = {
  blue: "bg-hub-blue text-hub-blue",
  emerald: "bg-hub-emerald text-hub-emerald",
  amber: "bg-hub-amber text-hub-amber",
  rose: "bg-hub-rose text-hub-rose",
  indigo: "bg-hub-indigo text-hub-indigo",
  neutral: "bg-muted-foreground text-muted-foreground",
};

const StatCard = React.forwardRef<HTMLDivElement, StatCardProps>(
  ({ className, title, value, description, icon, tone = "blue", trend, ...props }, ref) => (
    <Card
      ref={ref}
      className={cn("hub-card cine-card overflow-hidden animate-in zoom-in-95 duration-500", className)}
      {...props}
    >
      <CardContent className="p-5 sm:p-6">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2">
            <span className={cn("h-1.5 w-1.5 rounded-full", toneClass[tone].split(" ")[0])} />
            <p className="kpi-label truncate">{title}</p>
          </div>
          {icon && (
            <div className={cn("shrink-0 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:stroke-[1.75]", toneClass[tone].split(" ")[1])}>
              {icon}
            </div>
          )}
        </div>

        <div className="kpi-value text-2xl tabular-nums sm:text-3xl">{value}</div>

        {(description || trend) && (
          <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground">
            {trend && (
              <div
                className={cn(
                  "flex items-center font-medium tabular-nums",
                  trend.direction === "up" && "text-success",
                  trend.direction === "down" && "text-destructive",
                  trend.direction === "neutral" && "text-muted-foreground",
                )}
              >
                {trend.direction === "up" && <ArrowUpRight className="mr-1 h-3 w-3 stroke-[1.75]" />}
                {trend.direction === "down" && <ArrowDownRight className="mr-1 h-3 w-3 stroke-[1.75]" />}
                {trend.value}%
              </div>
            )}
            <p>{description || trend?.label}</p>
          </div>
        )}
      </CardContent>
    </Card>
  ),
);
StatCard.displayName = "StatCard";

export { StatCard };
