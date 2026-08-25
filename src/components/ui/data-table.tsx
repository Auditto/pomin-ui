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
  TableRow,
} from "./table";

export type DataTableColumn<TData> = {
  accessorKey: keyof TData;
  header: string;
  cell?: (row: TData) => React.ReactNode;
  className?: string;
};

type SortState<TData> = {
  key: keyof TData;
  direction: "asc" | "desc";
} | null;

type DataTableProps<TData extends object> = {
  columns: DataTableColumn<TData>[];
  data: TData[];
  emptyText?: string;
  className?: string;
};

function DataTable<TData extends object>({
  columns,
  data,
  emptyText = "Nenhum registro encontrado.",
  className,
}: DataTableProps<TData>) {
  const [sort, setSort] = React.useState<SortState<TData>>(null);

  const sortedData = React.useMemo(() => {
    if (!sort) return data;
    return [...data].sort((a, b) => {
      const aValue = String(a[sort.key] ?? "");
      const bValue = String(b[sort.key] ?? "");
      const result = aValue.localeCompare(bValue, "pt-BR", { numeric: true });
      return sort.direction === "asc" ? result : -result;
    });
  }, [data, sort]);

  const toggleSort = (key: keyof TData) => {
    setSort((current) => {
      if (current?.key !== key) return { key, direction: "asc" };
      if (current.direction === "asc") return { key, direction: "desc" };
      return null;
    });
  };

  return (
    <div className={cn("overflow-hidden rounded-2xl border border-border/50", className)}>
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            {columns.map((column) => (
              <TableHead key={String(column.accessorKey)} className={cn("h-10", column.className)}>
                <Button
                  variant="ghost"
                  size="sm"
                  className="-ml-2 h-8 px-2 text-[11px] uppercase tracking-[0.08em] text-muted-foreground"
                  onClick={() => toggleSort(column.accessorKey)}
                >
                  {column.header}
                  <ArrowDownUp className="ml-1 h-3 w-3" />
                </Button>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedData.length ? (
            sortedData.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns.map((column) => (
                  <TableCell key={String(column.accessorKey)} className={column.className}>
                    {column.cell ? column.cell(row) : String(row[column.accessorKey] ?? "")}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center text-muted-foreground">
                {emptyText}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export { DataTable };
