export type InventoryItem = {
  id: number;
  name: string;
  sku: string;
  quantity: number;
  location: string;
};

export type Supplier = {
  id: number;
  name: string;
  category: string;
  leadTimeDays: number;
  reliability: string;
};

export type ReorderRequest = {
  id: number;
  itemName: string;
  requestedQuantity: number;
  priority: 'High' | 'Medium' | 'Low';
  owner: string;
};

export const initialInventoryItems: InventoryItem[] = [
  {
    id: 1,
    name: 'Wireless Barcode Scanner',
    sku: 'WBS-1024',
    quantity: 24,
    location: 'Aisle A1',
  },
  {
    id: 2,
    name: 'Thermal Shipping Labels',
    sku: 'TSL-8840',
    quantity: 9,
    location: 'Aisle B3',
  },
  {
    id: 3,
    name: 'Inventory Tablet',
    sku: 'ITB-2190',
    quantity: 16,
    location: 'Secure Cage',
  },
  {
    id: 4,
    name: 'Packing Tape Rolls',
    sku: 'PTR-4112',
    quantity: 7,
    location: 'Aisle C2',
  },
];

export const suppliers: Supplier[] = [
  {
    id: 1,
    name: 'Northline Packaging',
    category: 'Packaging',
    leadTimeDays: 3,
    reliability: '98%',
  },
  {
    id: 2,
    name: 'ScanPro Hardware',
    category: 'Devices',
    leadTimeDays: 7,
    reliability: '95%',
  },
  {
    id: 3,
    name: 'LabelWorks Supply',
    category: 'Labels',
    leadTimeDays: 4,
    reliability: '97%',
  },
];

export const reorderRequests: ReorderRequest[] = [
  {
    id: 1,
    itemName: 'Thermal Shipping Labels',
    requestedQuantity: 120,
    priority: 'High',
    owner: 'Maya',
  },
  {
    id: 2,
    itemName: 'Packing Tape Rolls',
    requestedQuantity: 80,
    priority: 'Medium',
    owner: 'Noah',
  },
  {
    id: 3,
    itemName: 'USB-C Charging Dock',
    requestedQuantity: 30,
    priority: 'Low',
    owner: 'Ari',
  },
];
