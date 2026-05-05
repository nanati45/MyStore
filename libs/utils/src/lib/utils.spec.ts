import { calculateStockStatus, formatCurrency } from './utils.js';

describe('formatCurrency', () => {
  it('formats amounts as USD', () => {
    expect(formatCurrency(1250)).toEqual('$1,250.00');
  });
});

describe('calculateStockStatus', () => {
  it('returns OK when quantity is greater than 10', () => {
    expect(calculateStockStatus(11)).toEqual('OK');
  });

  it('returns LOW when quantity is 10 or less', () => {
    expect(calculateStockStatus(10)).toEqual('LOW');
  });
});
