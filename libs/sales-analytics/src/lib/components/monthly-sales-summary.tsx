import {
  DataTable,
  SectionHeader,
  type DataTableColumn,
} from '@mystore-enterprise/ui-components';
import { formatCurrency } from '@mystore-enterprise/utils';
import type { MonthlySale } from '../data/sales';

type MonthlySalesSummaryProps = {
  months: MonthlySale[];
};

export function MonthlySalesSummary({ months }: MonthlySalesSummaryProps) {
  const columns: DataTableColumn<MonthlySale>[] = [
    { key: 'month', header: 'Month' },
    { key: 'orders', header: 'Orders', align: 'right' },
    {
      key: 'revenue',
      header: 'Revenue',
      align: 'right',
      render: (month) => formatCurrency(month.revenue),
    },
  ];

  return (
    <section>
      <SectionHeader
        title="Monthly Sales Summary"
        description="Month-by-month order volume and revenue totals."
      />
      <DataTable columns={columns} data={months} />
    </section>
  );
}

