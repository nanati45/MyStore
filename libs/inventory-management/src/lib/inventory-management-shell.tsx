import { useMemo, useState } from 'react';
import { AddInventoryForm } from './components/add-inventory-form';
import { InventorySearchFilter } from './components/inventory-search-filter';
import { ReorderRequests } from './components/reorder-requests';
import { StockOverview } from './components/stock-overview';
import { SupplierList } from './components/supplier-list';
import {
  initialInventoryItems,
  reorderRequests,
  suppliers,
  type InventoryItem,
} from './data/inventory';

export function InventoryManagementShell() {
  const [items, setItems] = useState<InventoryItem[]>(initialInventoryItems);

  const totalUnits = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items],
  );

  const handleAddItem = (
    item: Omit<InventoryItem, 'id' | 'sku' | 'location'>,
  ) => {
    const nextId = Math.max(...items.map((currentItem) => currentItem.id)) + 1;

    setItems((currentItems) => [
      {
        id: nextId,
        name: item.name,
        quantity: item.quantity,
        sku: `NEW-${String(nextId).padStart(4, '0')}`,
        location: 'Receiving',
      },
      ...currentItems,
    ]);
  };

  return (
    <main className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:px-6 lg:px-8">
      <header className="flex flex-col gap-4 rounded-lg bg-slate-950 p-6 text-white sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
            Inventory Management System
          </p>
          <h1 className="mt-2 text-3xl font-bold">Warehouse App</h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-300">
            Component-based stock intake and inventory visibility for daily
            warehouse operations.
          </p>
        </div>
        <div className="rounded-md bg-white/10 px-4 py-3">
          <p className="text-xs uppercase tracking-wide text-slate-300">
            Total Units
          </p>
          <p className="text-2xl font-bold">{totalUnits}</p>
        </div>
      </header>

      <AddInventoryForm onAddItem={handleAddItem} />
      <StockOverview items={items} />
      <InventorySearchFilter items={items} />
      <div className="grid gap-6 lg:grid-cols-2">
        <SupplierList suppliers={suppliers} />
        <ReorderRequests requests={reorderRequests} />
      </div>
    </main>
  );
}
