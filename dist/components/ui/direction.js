import { jsx } from "react/jsx-runtime";
import * as React from "react";
const DirectionContext = React.createContext("ltr");
function DirectionProvider({ dir = "ltr", children, ...props }) {
  return /* @__PURE__ */ jsx(DirectionContext.Provider, { value: dir, children: /* @__PURE__ */ jsx("div", { dir, ...props, children }) });
}
function useDirection() {
  return React.useContext(DirectionContext);
}
export {
  DirectionProvider,
  useDirection
};
//# sourceMappingURL=direction.js.map