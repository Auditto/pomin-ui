import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "./button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "./command";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
function Combobox({
  options,
  value,
  onValueChange,
  placeholder = "Selecionar...",
  searchPlaceholder = "Buscar...",
  emptyText = "Nenhum resultado encontrado.",
  className
}) {
  const [open, setOpen] = React.useState(false);
  const selected = options.find((option) => option.value === value);
  return /* @__PURE__ */ jsxs(Popover, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
      Button,
      {
        variant: "outline",
        role: "combobox",
        "aria-expanded": open,
        className: cn("w-full justify-between", !selected && "text-muted-foreground", className),
        children: [
          selected ? selected.label : placeholder,
          /* @__PURE__ */ jsx(ChevronsUpDown, { className: "ml-2 h-4 w-4 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(PopoverContent, { className: "w-[--radix-popover-trigger-width] p-0", align: "start", children: /* @__PURE__ */ jsxs(Command, { children: [
      /* @__PURE__ */ jsx(CommandInput, { placeholder: searchPlaceholder }),
      /* @__PURE__ */ jsxs(CommandList, { children: [
        /* @__PURE__ */ jsx(CommandEmpty, { children: emptyText }),
        /* @__PURE__ */ jsx(CommandGroup, { children: options.map((option) => /* @__PURE__ */ jsxs(
          CommandItem,
          {
            value: option.label,
            onSelect: () => {
              onValueChange?.(option.value === value ? "" : option.value);
              setOpen(false);
            },
            children: [
              /* @__PURE__ */ jsx(Check, { className: cn("mr-2 h-4 w-4", value === option.value ? "opacity-100" : "opacity-0") }),
              option.label
            ]
          },
          option.value
        )) })
      ] })
    ] }) })
  ] });
}
export {
  Combobox
};
//# sourceMappingURL=combobox.js.map