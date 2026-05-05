import { FormEvent, useState } from 'react';
import { PrimaryButton } from '@mystore-enterprise/ui-components';
import type { InventoryItem } from '../data/inventory';

type AddInventoryFormProps = {
  onAddItem: (item: Omit<InventoryItem, 'id' | 'sku' | 'location'>) => void;
};

export function AddInventoryForm({ onAddItem }: AddInventoryFormProps) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim()) {
      return;
    }

    onAddItem({
      name: name.trim(),
      quantity,
    });
    setName('');
    setQuantity(0);
  };

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-slate-900">Add Inventory</h2>
        <p className="text-sm text-slate-500">
          Register new stock received by the warehouse team.
        </p>
      </div>

      <form
        className="grid gap-4 md:grid-cols-[1fr_160px_auto]"
        onSubmit={handleSubmit}
      >
        <label className="grid gap-1 text-sm font-medium text-slate-700">
          Item name
          <input
            className="rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
            onChange={(event) => setName(event.currentTarget.value)}
            placeholder="e.g. Pallet wrap"
            value={name}
          />
        </label>

        <label className="grid gap-1 text-sm font-medium text-slate-700">
          Quantity
          <input
            className="rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
            min={0}
            onChange={(event) => setQuantity(Number(event.currentTarget.value))}
            type="number"
            value={quantity}
          />
        </label>

        <PrimaryButton className="self-end" type="submit">
          Add Item
        </PrimaryButton>
      </form>
    </section>
  );
}
