import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { ArrowDownUp } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "./button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "./table";
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
  return /* @__PURE__ */ jsx("div", { className: cn("overflow-hidden rounded-2xl border border-border/50", className), children: /* @__PURE__ */ jsxs(Table, { children: [
    /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsx(TableRow, { className: "hover:bg-transparent", children: columns.map((column) => /* @__PURE__ */ jsx(TableHead, { className: cn("h-10", column.className), children: /* @__PURE__ */ jsxs(
      Button,
      {
        variant: "ghost",
        size: "sm",
        className: "-ml-2 h-8 px-2 text-[11px] uppercase tracking-[0.08em] text-muted-foreground",
        onClick: () => toggleSort(column.accessorKey),
        children: [
          column.header,
          /* @__PURE__ */ jsx(ArrowDownUp, { className: "ml-1 h-3 w-3" })
        ]
      }
    ) }, String(column.accessorKey))) }) }),
    /* @__PURE__ */ jsx(TableBody, { children: sortedData.length ? sortedData.map((row, rowIndex) => /* @__PURE__ */ jsx(TableRow, { children: columns.map((column) => /* @__PURE__ */ jsx(TableCell, { className: column.className, children: column.cell ? column.cell(row) : String(row[column.accessorKey] ?? "") }, String(column.accessorKey))) }, rowIndex)) : /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { colSpan: columns.length, className: "h-24 text-center text-muted-foreground", children: emptyText }) }) })
  ] }) });
}
export {
  DataTable
};
//# sourceMappingURL=data-table.js.map