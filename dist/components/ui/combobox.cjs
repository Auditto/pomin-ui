"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var combobox_exports = {};
__export(combobox_exports, {
  Combobox: () => Combobox
});
module.exports = __toCommonJS(combobox_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var React = __toESM(require("react"), 1);
var import_lucide_react = require("lucide-react");
var import_utils = require("../../lib/utils");
var import_button = require("./button");
var import_command = require("./command");
var import_popover = require("./popover");
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_popover.Popover, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_popover.PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      import_button.Button,
      {
        variant: "outline",
        role: "combobox",
        "aria-expanded": open,
        className: (0, import_utils.cn)("w-full justify-between", !selected && "text-muted-foreground", className),
        children: [
          selected ? selected.label : placeholder,
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronsUpDown, { className: "ml-2 h-4 w-4 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_popover.PopoverContent, { className: "w-[--radix-popover-trigger-width] p-0", align: "start", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_command.Command, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_command.CommandInput, { placeholder: searchPlaceholder }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_command.CommandList, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_command.CommandEmpty, { children: emptyText }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_command.CommandGroup, { children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          import_command.CommandItem,
          {
            value: option.label,
            onSelect: () => {
              onValueChange?.(option.value === value ? "" : option.value);
              setOpen(false);
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Check, { className: (0, import_utils.cn)("mr-2 h-4 w-4", value === option.value ? "opacity-100" : "opacity-0") }),
              option.label
            ]
          },
          option.value
        )) })
      ] })
    ] }) })
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Combobox
});
//# sourceMappingURL=combobox.cjs.map