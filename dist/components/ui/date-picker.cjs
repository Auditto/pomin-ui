"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var date_picker_exports = {};
__export(date_picker_exports, {
  DatePicker: () => DatePicker
});
module.exports = __toCommonJS(date_picker_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_lucide_react = require("lucide-react");
var import_utils = require("../../lib/utils");
var import_button = require("./button");
var import_calendar = require("./calendar");
var import_popover = require("./popover");
function DatePicker({ date, onDateChange, placeholder = "Selecionar data", className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_popover.Popover, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_popover.PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      import_button.Button,
      {
        variant: "outline",
        className: (0, import_utils.cn)("w-full justify-start text-left font-normal", !date && "text-muted-foreground", className),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.CalendarIcon, { className: "mr-2 h-4 w-4" }),
          date ? date.toLocaleDateString("pt-BR") : placeholder
        ]
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_popover.PopoverContent, { className: "w-auto p-0", align: "start", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_calendar.Calendar, { mode: "single", selected: date, onSelect: onDateChange, initialFocus: true }) })
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DatePicker
});
//# sourceMappingURL=date-picker.cjs.map