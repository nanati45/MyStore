import type { InputHTMLAttributes } from 'react';

export type SearchInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function SearchInput({
  className = '',
  label,
  ...props
}: SearchInputProps) {
  return (
    <label className="grid gap-1 text-sm font-medium text-slate-700">
      {label}
      <input
        className={`rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200 ${className}`}
        type="search"
        {...props}
      />
    </label>
  );
}

