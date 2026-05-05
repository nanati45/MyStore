import { render } from '@testing-library/react';
import { SalesAnalyticsShell } from './sales-analytics-shell';

describe('SalesAnalyticsShell', () => {
  it('composes analytics features from shared components and utils', () => {
    const { getByText } = render(<SalesAnalyticsShell />);

    expect(getByText('Manager Dashboard')).toBeTruthy();
    expect(getByText('Revenue Tracker')).toBeTruthy();
    expect(getByText('Low Stock Alerts')).toBeTruthy();
    expect(getByText('Sales By Category')).toBeTruthy();
    expect(getByText('Top Selling Products')).toBeTruthy();
    expect(getByText('Monthly Sales Summary')).toBeTruthy();
  });
});
