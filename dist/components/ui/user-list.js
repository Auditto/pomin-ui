import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { MoreHorizontal } from "lucide-react";
import { cn } from "../../lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Button } from "./button";
const UserList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col gap-1 w-full animate-in fade-in duration-500", className),
    ...props
  }
));
UserList.displayName = "UserList";
const UserListItem = React.forwardRef(
  ({ className, name, email, avatarUrl, fallback, status, actions, ...props }, ref) => {
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: cn(
          "group flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors animate-in slide-in-from-left-2 duration-300",
          className
        ),
        ...props,
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxs(Avatar, { className: "h-10 w-10", children: [
                /* @__PURE__ */ jsx(AvatarImage, { src: avatarUrl, alt: name }),
                /* @__PURE__ */ jsx(AvatarFallback, { children: fallback || name.substring(0, 2).toUpperCase() })
              ] }),
              status && /* @__PURE__ */ jsx(
                "span",
                {
                  className: cn(
                    "absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background",
                    status === "online" && "bg-success",
                    status === "offline" && "bg-muted-foreground",
                    status === "away" && "bg-warning",
                    status === "busy" && "bg-destructive"
                  )
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ jsx("span", { className: "text-sm font-medium leading-none", children: name }),
              email && /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: email })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: actions || /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", className: "h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ jsx(MoreHorizontal, { className: "h-4 w-4" }) }) })
        ]
      }
    );
  }
);
UserListItem.displayName = "UserListItem";
export {
  UserList,
  UserListItem
};
//# sourceMappingURL=user-list.js.map