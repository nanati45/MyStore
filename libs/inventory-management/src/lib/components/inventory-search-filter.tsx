import { useMemo, useState } from 'react';
import {
  DataTable,
  SearchInput,
  StatusBadge,
  type DataTableColumn,
} from '@mystore-enterprise/ui-components';
import { calculateStockStatus } from '@mystore-enterprise/utils';
import type { InventoryItem } from '../data/inventory';

type InventorySearchFilterProps = {
  items: InventoryItem[];
};

export function InventorySearchFilter({ items }: InventorySearchFilterProps) {
  const [query, setQuery] = useState('');

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return items;
    }

    return items.filter((item) =>
      [item.name, item.sku, item.location].some((value) =>
        value.toLowerCase().includes(normalizedQuery),
      ),
    );
  }, [items, query]);

  const columns: DataTableColumn<InventoryItem>[] = [
    { key: 'name', header: 'Item' },
    { key: 'sku', header: 'SKU' },
    { key: 'location', header: 'Location' },
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
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <SearchInput
        label="Inventory Search"
        onChange={(event) => setQuery(event.currentTarget.value)}
        placeholder="Search by item, SKU, or location"
        value={query}
      />
      <div className="mt-4">
        <DataTable
          columns={columns}
          data={filteredItems}
          emptyMessage="No matching inventory items."
        />
      </div>
    </section>
  );
}
