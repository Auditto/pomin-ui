import * as React from 'react';

type DataTableColumn<TData> = {
    accessorKey: keyof TData;
    header: string;
    cell?: (row: TData) => React.ReactNode;
    className?: string;
};
type DataTableProps<TData extends object> = {
    columns: DataTableColumn<TData>[];
    data: TData[];
    emptyText?: string;
    className?: string;
};
declare function DataTable<TData extends object>({ columns, data, emptyText, className, }: DataTableProps<TData>): React.JSX.Element;

export { DataTable, type DataTableColumn };
