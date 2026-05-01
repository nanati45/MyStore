export type MetricCardProps = {
  label: string;
  value: string | number;
  helperText?: string;
};

export function MetricCard({ label, value, helperText }: MetricCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </p>
      <p className="mt-2 text-2xl font-bold text-slate-950">{value}</p>
      {helperText ? (
        <p className="mt-1 text-sm text-slate-500">{helperText}</p>
      ) : null}
    </article>
  );
}

