import {
  DataTable,
  SectionHeader,
  type DataTableColumn,
} from '@mystore-enterprise/ui-components';
import type { ReorderRequest } from '../data/inventory';

type ReorderRequestsProps = {
  requests: ReorderRequest[];
};

export function ReorderRequests({ requests }: ReorderRequestsProps) {
  const columns: DataTableColumn<ReorderRequest>[] = [
    { key: 'itemName', header: 'Item' },
    { key: 'requestedQuantity', header: 'Requested Qty', align: 'right' },
    {
      key: 'priority',
      header: 'Priority',
      render: (request) => (
        <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-700">
          {request.priority}
        </span>
      ),
    },
    { key: 'owner', header: 'Owner' },
  ];

  return (
    <section>
      <SectionHeader
        title="Reorder Requests"
        description="Pending restock requests created from low inventory levels."
      />
      <DataTable columns={columns} data={requests} />
    </section>
  );
}

