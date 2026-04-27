import { formatCurrency } from '@mystore-enterprise/utils';
import type { SalesSummary } from '../data/sales';

type RevenueTrackerProps = {
  summaries: SalesSummary[];
};

export function RevenueTracker({ summaries }: RevenueTrackerProps) {
  const totalRevenue = summaries.reduce(
    (total, summary) => total + summary.amount,
    0,
  );

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Revenue Tracker
          </h2>
          <p className="text-sm text-slate-500">
            Sales totals formatted through the shared currency utility.
          </p>
        </div>
        <div className="text-left sm:text-right">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Combined
          </p>
          <p className="text-2xl font-bold text-slate-950">
            {formatCurrency(totalRevenue)}
          </p>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        {summaries.map((summary) => (
          <article
            className="rounded-lg border border-slate-200 bg-slate-50 p-4"
            key={summary.label}
          >
            <p className="text-sm font-medium text-slate-500">
              {summary.label}
            </p>
            <p className="mt-2 text-xl font-bold text-slate-900">
              {formatCurrency(summary.amount)}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

