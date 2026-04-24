import {
  DataTable,
  SectionHeader,
  type DataTableColumn,
} from '@mystore-enterprise/ui-components';
import type { Supplier } from '../data/inventory';

type SupplierListProps = {
  suppliers: Supplier[];
};

export function SupplierList({ suppliers }: SupplierListProps) {
  const columns: DataTableColumn<Supplier>[] = [
    { key: 'name', header: 'Supplier' },
    { key: 'category', header: 'Category' },
    {
      key: 'leadTimeDays',
      header: 'Lead Time',
      align: 'right',
      render: (supplier) => `${supplier.leadTimeDays} days`,
    },
    { key: 'reliability', header: 'Reliability', align: 'right' },
  ];

  return (
    <section>
      <SectionHeader
        title="Supplier List"
        description="Approved partners used by the warehouse replenishment team."
      />
      <DataTable columns={columns} data={suppliers} />
    </section>
  );
}

