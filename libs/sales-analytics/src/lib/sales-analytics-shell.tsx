import { LowStockAlerts } from './components/low-stock-alerts';
import { MonthlySalesSummary } from './components/monthly-sales-summary';
import { RevenueTracker } from './components/revenue-tracker';
import { SalesByCategory } from './components/sales-by-category';
import { TopSellingProducts } from './components/top-selling-products';
import {
  categorySales,
  monthlySales,
  salesSummaries,
  stockAlertItems,
  topProducts,
} from './data/sales';

export function SalesAnalyticsShell() {
  return (
    <main className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:px-6 lg:px-8">
      <header className="rounded-lg bg-zinc-950 p-6 text-white">
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-300">
          Sales Analytics System
        </p>
        <h1 className="mt-2 text-3xl font-bold">Manager Dashboard</h1>
        <p className="mt-2 max-w-2xl text-sm text-zinc-300">
          Sales performance and reorder visibility composed from shared
          enterprise libraries.
        </p>
      </header>

      <RevenueTracker summaries={salesSummaries} />
      <LowStockAlerts items={stockAlertItems} />
      <SalesByCategory categories={categorySales} />
      <div className="grid gap-6 lg:grid-cols-2">
        <TopSellingProducts products={topProducts} />
        <MonthlySalesSummary months={monthlySales} />
      </div>
    </main>
  );
}

