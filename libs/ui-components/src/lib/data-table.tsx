import type { ReactNode } from 'react';

export type DataTableColumn<T> = {
  key: keyof T | string;
  header: string;
  render?: (row: T) => ReactNode;
  align?: 'left' | 'right' | 'center';
};

export type DataTableProps<T> = {
  columns: DataTableColumn<T>[];
  data: T[];
  emptyMessage?: string;
};

export function DataTable<T>({
  columns,
  data,
  emptyMessage = 'No records found.',
}: DataTableProps<T>) {
  const alignClass = {
    left: 'text-left',
    right: 'text-right',
    center: 'text-center',
  };

  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <table className="min-w-full divide-y divide-slate-200">
        <thead className="bg-slate-50">
          <tr>
            {columns.map((column) => (
              <th
                className={`px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500 ${
                  alignClass[column.align ?? 'left']
                }`}
                key={String(column.key)}
                scope="col"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr className="transition hover:bg-slate-50" key={rowIndex}>
                {columns.map((column) => (
                  <td
                    className={`px-4 py-3 text-sm text-slate-700 ${
                      alignClass[column.align ?? 'left']
                    }`}
                    key={String(column.key)}
                  >
                    {column.render
                      ? column.render(row)
                      : String(row[column.key as keyof T] ?? '')}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                className="px-4 py-8 text-center text-sm text-slate-500"
                colSpan={columns.length}
              >
                {emptyMessage}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

