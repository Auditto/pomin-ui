import { jsx } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../../lib/utils";
import { Label } from "./label";
const Field = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("grid gap-2", className), ...props })
);
Field.displayName = "Field";
const FieldGroup = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("grid gap-4", className), ...props })
);
FieldGroup.displayName = "FieldGroup";
const FieldLabel = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Label,
  {
    ref,
    className: cn("text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground", className),
    ...props
  }
));
FieldLabel.displayName = "FieldLabel";
const FieldDescription = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("p", { ref, className: cn("text-xs leading-relaxed text-muted-foreground", className), ...props })
);
FieldDescription.displayName = "FieldDescription";
const FieldError = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("p", { ref, className: cn("text-xs font-medium text-destructive", className), ...props })
);
FieldError.displayName = "FieldError";
export {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel
};
//# sourceMappingURL=field.js.map