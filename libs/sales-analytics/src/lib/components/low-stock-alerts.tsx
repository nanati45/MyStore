import {
  DataTable,
  StatusBadge,
  type DataTableColumn,
} from '@mystore-enterprise/ui-components';
import { calculateStockStatus } from '@mystore-enterprise/utils';
import type { StockAlertItem } from '../data/sales';

type LowStockAlertsProps = {
  items: StockAlertItem[];
};

export function LowStockAlerts({ items }: LowStockAlertsProps) {
  const lowStockItems = items.filter(
    (item) => calculateStockStatus(item.quantity) === 'LOW',
  );

  const columns: DataTableColumn<StockAlertItem>[] = [
    { key: 'name', header: 'Item' },
    { key: 'quantity', header: 'Qty', align: 'right' },
    { key: 'reorderPoint', header: 'Reorder Point', align: 'right' },
    {
      key: 'status',
      header: 'Status',
      render: () => <StatusBadge status="Low Stock" />,
    },
  ];

  return (
    <section>
      <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Low Stock Alerts
          </h2>
          <p className="text-sm text-slate-500">
            Items filtered through the shared stock-status utility.
          </p>
        </div>
        <span className="rounded-md bg-rose-100 px-3 py-1 text-sm font-semibold text-rose-700">
          {lowStockItems.length} reorder alerts
        </span>
      </div>

      <DataTable
        columns={columns}
        data={lowStockItems}
        emptyMessage="No reorder alerts."
      />
    </section>
  );
}
