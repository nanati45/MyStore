import {
  DataTable,
  SectionHeader,
  type DataTableColumn,
} from '@mystore-enterprise/ui-components';
import { formatCurrency } from '@mystore-enterprise/utils';
import type { TopProduct } from '../data/sales';

type TopSellingProductsProps = {
  products: TopProduct[];
};

export function TopSellingProducts({ products }: TopSellingProductsProps) {
  const columns: DataTableColumn<TopProduct>[] = [
    { key: 'name', header: 'Product' },
    { key: 'unitsSold', header: 'Units Sold', align: 'right' },
    {
      key: 'revenue',
      header: 'Revenue',
      align: 'right',
      render: (product) => formatCurrency(product.revenue),
    },
  ];

  return (
    <section>
      <SectionHeader
        title="Top Selling Products"
        description="Products contributing the strongest sales performance."
      />
      <DataTable columns={columns} data={products} />
    </section>
  );
}

