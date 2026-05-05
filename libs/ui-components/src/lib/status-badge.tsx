export type StockStatusLabel = 'In Stock' | 'Low Stock';

export type StatusBadgeProps = {
  status: StockStatusLabel;
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const isInStock = status === 'In Stock';

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${
        isInStock
          ? 'bg-emerald-100 text-emerald-700'
          : 'bg-rose-100 text-rose-700'
      }`}
    >
      {status}
    </span>
  );
}
