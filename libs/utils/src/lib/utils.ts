export type StockStatus = 'OK' | 'LOW';

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  }).format(amount);
}

export function calculateStockStatus(quantity: number): StockStatus {
  return quantity > 10 ? 'OK' : 'LOW';
}
