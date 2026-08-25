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
var data_table_exports = {};
__export(data_table_exports, {
  DataTable: () => DataTable
});
module.exports = __toCommonJS(data_table_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var React = __toESM(require("react"), 1);
var import_lucide_react = require("lucide-react");
var import_utils = require("../../lib/utils");
var import_button = require("./button");
var import_table = require("./table");
function DataTable({
  columns,
  data,
  emptyText = "Nenhum registro encontrado.",
  className
}) {
  const [sort, setSort] = React.useState(null);
  const sortedData = React.useMemo(() => {
    if (!sort) return data;
    return [...data].sort((a, b) => {
      const aValue = String(a[sort.key] ?? "");
      const bValue = String(b[sort.key] ?? "");
      const result = aValue.localeCompare(bValue, "pt-BR", { numeric: true });
      return sort.direction === "asc" ? result : -result;
    });
  }, [data, sort]);
  const toggleSort = (key) => {
    setSort((current) => {
      if (current?.key !== key) return { key, direction: "asc" };
      if (current.direction === "asc") return { key, direction: "desc" };
      return null;
    });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: (0, import_utils.cn)("overflow-hidden rounded-2xl border border-border/50", className), children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_table.Table, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_table.TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_table.TableRow, { className: "hover:bg-transparent", children: columns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_table.TableHead, { className: (0, import_utils.cn)("h-10", column.className), children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      import_button.Button,
      {
        variant: "ghost",
        size: "sm",
        className: "-ml-2 h-8 px-2 text-[11px] uppercase tracking-[0.08em] text-muted-foreground",
        onClick: () => toggleSort(column.accessorKey),
        children: [
          column.header,
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ArrowDownUp, { className: "ml-1 h-3 w-3" })
        ]
      }
    ) }, String(column.accessorKey))) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_table.TableBody, { children: sortedData.length ? sortedData.map((row, rowIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_table.TableRow, { children: columns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_table.TableCell, { className: column.className, children: column.cell ? column.cell(row) : String(row[column.accessorKey] ?? "") }, String(column.accessorKey))) }, rowIndex)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_table.TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_table.TableCell, { colSpan: columns.length, className: "h-24 text-center text-muted-foreground", children: emptyText }) }) })
  ] }) });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DataTable
});
//# sourceMappingURL=data-table.cjs.map