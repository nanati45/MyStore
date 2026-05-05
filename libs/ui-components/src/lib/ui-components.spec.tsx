import { render } from '@testing-library/react';
import { DataTable } from './data-table';
import { MetricCard } from './metric-card';
import { PrimaryButton } from './primary-button';
import { SearchInput } from './search-input';
import { SectionHeader } from './section-header';
import { StatusBadge } from './status-badge';

describe('ui-components', () => {
  it('renders a reusable data table', () => {
    const { getByText } = render(
      <DataTable
        columns={[{ key: 'name', header: 'Name' }]}
        data={[{ name: 'Packing Tape Rolls' }]}
      />,
    );

    expect(getByText('Packing Tape Rolls')).toBeTruthy();
  });

  it('renders stock badges and the primary button', () => {
    const { getByText } = render(
      <>
        <StatusBadge status="In Stock" />
        <PrimaryButton>Save</PrimaryButton>
      </>,
    );

    expect(getByText('In Stock')).toBeTruthy();
    expect(getByText('Save')).toBeTruthy();
  });

  it('renders shared dashboard building blocks', () => {
    const { getByLabelText, getByText } = render(
      <>
        <SectionHeader title="Operations" description="Daily work queue" />
        <MetricCard label="Open Orders" value={12} helperText="Needs review" />
        <SearchInput label="Search inventory" />
      </>,
    );

    expect(getByText('Operations')).toBeTruthy();
    expect(getByText('Open Orders')).toBeTruthy();
    expect(getByLabelText('Search inventory')).toBeTruthy();
  });
});
