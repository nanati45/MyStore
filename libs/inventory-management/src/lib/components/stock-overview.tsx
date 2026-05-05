import {
  DataTable,
  StatusBadge,
  type DataTableColumn,
} from '@mystore-enterprise/ui-components';
import { calculateStockStatus } from '@mystore-enterprise/utils';
import type { InventoryItem } from '../data/inventory';

type StockOverviewProps = {
  items: InventoryItem[];
};

export function StockOverview({ items }: StockOverviewProps) {
  const columns: DataTableColumn<InventoryItem>[] = [
    { key: 'name', header: 'Item' },
    { key: 'sku', header: 'SKU' },
    { key: 'location', header: 'Location' },
    { key: 'quantity', header: 'Qty', align: 'right' },
    {
      key: 'status',
      header: 'Status',
      render: (item) => (
        <StatusBadge
          status={
            calculateStockStatus(item.quantity) === 'OK'
              ? 'In Stock'
              : 'Low Stock'
          }
        />
      ),
    },
  ];

  return (
    <section>
      <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Stock Overview
          </h2>
          <p className="text-sm text-slate-500">
            Current quantities across warehouse storage areas.
          </p>
        </div>
        <span className="text-sm font-medium text-slate-500">
          {items.length} active items
        </span>
      </div>

      <DataTable columns={columns} data={items} />
    </section>
  );
}
