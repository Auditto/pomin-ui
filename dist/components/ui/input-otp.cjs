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
var input_otp_exports = {};
__export(input_otp_exports, {
  InputOTP: () => InputOTP,
  InputOTPGroup: () => InputOTPGroup,
  InputOTPSeparator: () => InputOTPSeparator,
  InputOTPSlot: () => InputOTPSlot
});
module.exports = __toCommonJS(input_otp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var React = __toESM(require("react"), 1);
var import_input_otp = require("input-otp");
var import_lucide_react = require("lucide-react");
var import_utils = require("../../lib/utils");
const InputOTP = React.forwardRef(
  ({ className, containerClassName, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_input_otp.OTPInput,
    {
      ref,
      containerClassName: (0, import_utils.cn)("flex items-center gap-2 has-[:disabled]:opacity-50", containerClassName),
      className: (0, import_utils.cn)("disabled:cursor-not-allowed", className),
      ...props
    }
  )
);
InputOTP.displayName = "InputOTP";
const InputOTPGroup = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref, className: (0, import_utils.cn)("flex items-center", className), ...props })
);
InputOTPGroup.displayName = "InputOTPGroup";
const InputOTPSlot = React.forwardRef(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(import_input_otp.OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      ref,
      className: (0, import_utils.cn)(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "z-10 ring-2 ring-ring ring-offset-background",
        className
      ),
      ...props,
      children: [
        char,
        hasFakeCaret && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-caret-blink h-4 w-px bg-foreground duration-1000" }) })
      ]
    }
  );
});
InputOTPSlot.displayName = "InputOTPSlot";
const InputOTPSeparator = React.forwardRef(
  ({ ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref, role: "separator", ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Dot, {}) })
);
InputOTPSeparator.displayName = "InputOTPSeparator";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot
});
//# sourceMappingURL=input-otp.cjs.map