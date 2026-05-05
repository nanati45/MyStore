import { render } from '@testing-library/react';
import { InventoryManagementShell } from './inventory-management-shell';

describe('InventoryManagementShell', () => {
  it('composes inventory features from shared components and utils', () => {
    const { getByText } = render(<InventoryManagementShell />);

    expect(getByText('Warehouse App')).toBeTruthy();
    expect(getByText('Add Inventory')).toBeTruthy();
    expect(getByText('Stock Overview')).toBeTruthy();
    expect(getByText('Inventory Search')).toBeTruthy();
    expect(getByText('Supplier List')).toBeTruthy();
    expect(getByText('Reorder Requests')).toBeTruthy();
  });
});
