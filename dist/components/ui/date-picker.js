import { jsx, jsxs } from "react/jsx-runtime";
import { CalendarIcon } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "./button";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
function DatePicker({ date, onDateChange, placeholder = "Selecionar data", className }) {
  return /* @__PURE__ */ jsxs(Popover, { children: [
    /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
      Button,
      {
        variant: "outline",
        className: cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground", className),
        children: [
          /* @__PURE__ */ jsx(CalendarIcon, { className: "mr-2 h-4 w-4" }),
          date ? date.toLocaleDateString("pt-BR") : placeholder
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(PopoverContent, { className: "w-auto p-0", align: "start", children: /* @__PURE__ */ jsx(Calendar, { mode: "single", selected: date, onSelect: onDateChange, initialFocus: true }) })
  ] });
}
export {
  DatePicker
};
//# sourceMappingURL=date-picker.js.map