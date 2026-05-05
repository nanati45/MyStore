import { render } from '@testing-library/react';
import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should show the warehouse feature title', () => {
    const { getByText } = render(<App />);
    expect(getByText('Warehouse App')).toBeTruthy();
    expect(getByText('Stock Overview')).toBeTruthy();
  });
});
