export type SalesSummary = {
  label: string;
  amount: number;
};

export type StockAlertItem = {
  id: number;
  name: string;
  quantity: number;
  reorderPoint: number;
};

export type TopProduct = {
  id: number;
  name: string;
  unitsSold: number;
  revenue: number;
};

export type CategorySale = {
  category: string;
  revenue: number;
  growth: string;
};

export type MonthlySale = {
  month: string;
  revenue: number;
  orders: number;
};

export const salesSummaries: SalesSummary[] = [
  { label: 'Today', amount: 18450 },
  { label: 'This Week', amount: 92875 },
  { label: 'This Month', amount: 341220 },
];

export const stockAlertItems: StockAlertItem[] = [
  { id: 1, name: 'Thermal Shipping Labels', quantity: 9, reorderPoint: 20 },
  { id: 2, name: 'Packing Tape Rolls', quantity: 7, reorderPoint: 24 },
  { id: 3, name: 'Wireless Barcode Scanner', quantity: 24, reorderPoint: 12 },
  { id: 4, name: 'USB-C Charging Dock', quantity: 5, reorderPoint: 15 },
];

export const topProducts: TopProduct[] = [
  {
    id: 1,
    name: 'Wireless Barcode Scanner',
    unitsSold: 86,
    revenue: 30100,
  },
  {
    id: 2,
    name: 'Inventory Tablet',
    unitsSold: 42,
    revenue: 50400,
  },
  {
    id: 3,
    name: 'Thermal Shipping Labels',
    unitsSold: 510,
    revenue: 15300,
  },
];

export const categorySales: CategorySale[] = [
  { category: 'Warehouse Hardware', revenue: 80500, growth: '+12%' },
  { category: 'Packaging Supplies', revenue: 46200, growth: '+8%' },
  { category: 'Labels and Printing', revenue: 38100, growth: '+5%' },
];

export const monthlySales: MonthlySale[] = [
  { month: 'January', revenue: 284000, orders: 920 },
  { month: 'February', revenue: 302500, orders: 984 },
  { month: 'March', revenue: 341220, orders: 1088 },
];
