import * as React from "react";
import { cn } from "../../lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const stepperVariants = cva(
  "flex w-full items-start gap-4",
  {
    variants: {
      orientation: {
        horizontal: "flex-row items-center",
        vertical: "flex-col",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  }
);

interface StepperProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof stepperVariants> {
  steps: { title: string; description?: string }[];
  currentStep: number;
}

const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  ({ className, steps, currentStep, orientation, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(stepperVariants({ orientation, className }))} {...props}>
        {steps.map((step, index) => {
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;

          return (
            <div key={index} className={cn(
              "flex items-center gap-3",
              orientation === "horizontal" && "flex-1 last:flex-none"
            )}>
              <div className="flex flex-col items-center">
                <div className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-[3px] border text-xs font-bold transition-all duration-300",
                  isActive && "scale-105 border-primary bg-primary text-primary-foreground shadow-sm",
                  isCompleted && "border-primary bg-primary text-primary-foreground",
                  !isActive && !isCompleted && "border-muted bg-background text-muted-foreground"
                )}>
                  {isCompleted ? "✓" : index + 1}
                </div>
                {orientation === "vertical" && index !== steps.length - 1 && (
                  <div className={cn(
                    "my-1 h-12 w-0.5 transition-colors duration-300",
                    isCompleted ? "bg-primary" : "bg-muted"
                  )} />
                )}
              </div>
              <div className="flex flex-col text-left">
                <span className={cn(
                  "text-sm font-semibold leading-none",
                  isActive ? "text-foreground" : "text-muted-foreground"
                )}>
                  {step.title}
                </span>
                {step.description && (
                  <span className="mt-1 text-xs text-muted-foreground line-clamp-1">
                    {step.description}
                  </span>
                )}
              </div>
              {orientation === "horizontal" && index !== steps.length - 1 && (
                <div className={cn(
                  "mx-4 h-0.5 flex-1 transition-colors duration-300",
                  isCompleted ? "bg-primary" : "bg-muted"
                )} />
              )}
            </div>
          );
        })}
      </div>
    );
  }
);
Stepper.displayName = "Stepper";

export { Stepper };
