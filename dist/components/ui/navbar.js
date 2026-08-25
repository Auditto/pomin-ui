import { jsx } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../../lib/utils";
const Navbar = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "header",
  {
    ref,
    className: cn(
      "sticky top-0 z-30 flex h-16 w-full items-center border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 animate-in fade-in slide-in-from-top-2 duration-500",
      className
    ),
    ...props
  }
));
Navbar.displayName = "Navbar";
const NavbarBrand = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex items-center gap-2 font-semibold", className),
    ...props
  }
));
NavbarBrand.displayName = "NavbarBrand";
const NavbarContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex flex-1 items-center gap-4 px-4", className),
    ...props
  }
));
NavbarContent.displayName = "NavbarContent";
const NavbarActions = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex items-center gap-2", className),
    ...props
  }
));
NavbarActions.displayName = "NavbarActions";
export {
  Navbar,
  NavbarActions,
  NavbarBrand,
  NavbarContent
};
//# sourceMappingURL=navbar.js.map