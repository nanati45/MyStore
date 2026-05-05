import { MetricCard, SectionHeader } from '@mystore-enterprise/ui-components';
import { formatCurrency } from '@mystore-enterprise/utils';
import type { CategorySale } from '../data/sales';

type SalesByCategoryProps = {
  categories: CategorySale[];
};

export function SalesByCategory({ categories }: SalesByCategoryProps) {
  return (
    <section>
      <SectionHeader
        title="Sales By Category"
        description="Revenue grouped by product category."
      />
      <div className="grid gap-3 md:grid-cols-3">
        {categories.map((category) => (
          <MetricCard
            helperText={`${category.growth} from last period`}
            key={category.category}
            label={category.category}
            value={formatCurrency(category.revenue)}
          />
        ))}
      </div>
    </section>
  );
}
