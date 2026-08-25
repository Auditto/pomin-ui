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
var user_list_exports = {};
__export(user_list_exports, {
  UserList: () => UserList,
  UserListItem: () => UserListItem
});
module.exports = __toCommonJS(user_list_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var React = __toESM(require("react"), 1);
var import_lucide_react = require("lucide-react");
var import_utils = require("../../lib/utils");
var import_avatar = require("./avatar");
var import_button = require("./button");
const UserList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "div",
  {
    ref,
    className: (0, import_utils.cn)("flex flex-col gap-1 w-full animate-in fade-in duration-500", className),
    ...props
  }
));
UserList.displayName = "UserList";
const UserListItem = React.forwardRef(
  ({ className, name, email, avatarUrl, fallback, status, actions, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        ref,
        className: (0, import_utils.cn)(
          "group flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors animate-in slide-in-from-left-2 duration-300",
          className
        ),
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "relative", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_avatar.Avatar, { className: "h-10 w-10", children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_avatar.AvatarImage, { src: avatarUrl, alt: name }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_avatar.AvatarFallback, { children: fallback || name.substring(0, 2).toUpperCase() })
              ] }),
              status && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "span",
                {
                  className: (0, import_utils.cn)(
                    "absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background",
                    status === "online" && "bg-success",
                    status === "offline" && "bg-muted-foreground",
                    status === "away" && "bg-warning",
                    status === "busy" && "bg-destructive"
                  )
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-sm font-medium leading-none", children: name }),
              email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-xs text-muted-foreground", children: email })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex items-center gap-2", children: actions || /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_button.Button, { variant: "ghost", size: "icon", className: "h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.MoreHorizontal, { className: "h-4 w-4" }) }) })
        ]
      }
    );
  }
);
UserListItem.displayName = "UserListItem";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UserList,
  UserListItem
});
//# sourceMappingURL=user-list.cjs.map