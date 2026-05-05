# MyStore Enterprise Monorepo

MyStore is an Nx React monorepo for an enterprise inventory and sales system. It demonstrates component-based development, shared utilities, and reusable feature packages consumed by separate applications.

## Tech Stack

- Nx monorepo
- React with TypeScript
- Tailwind CSS for ShadCN-like styling
- npm workspaces
- Vite and Vitest

## Monorepo Structure

```text
mystore-enterprise/
  apps/
    warehouse-app/          Inventory management application
    manager-dashboard/      Sales analytics application
  libs/
    ui-components/          Reusable UI component library
    utils/                  Shared utility functions
    inventory-management/   Feature system 1 package
    sales-analytics/        Feature system 2 package
```

## Package Responsibilities

### `libs/ui-components`

Reusable UI components shared across feature systems:

- `DataTable` for styled tabular lists
- `StatusBadge` for green `In Stock` and red `Low Stock` states
- `PrimaryButton` for consistent form actions
- `MetricCard` for dashboard KPI summaries
- `SearchInput` for reusable search/filter controls
- `SectionHeader` for consistent feature section headings

### `libs/utils`

Shared utility functions:

- `formatCurrency(amount: number)` formats numbers as USD
- `calculateStockStatus(quantity: number)` returns `OK` when quantity is greater than `10`, otherwise `LOW`

### `libs/inventory-management`

This is the first feature system package. It contains:

- `StockOverview`, which composes `DataTable`, `StatusBadge`, and `calculateStockStatus`
- `AddInventoryForm`, which uses `PrimaryButton` to add new stock items
- `InventorySearchFilter`, which uses `SearchInput`, `DataTable`, and `calculateStockStatus`
- `SupplierList`, which uses `SectionHeader` and `DataTable`
- `ReorderRequests`, which uses `SectionHeader` and `DataTable`
- `InventoryManagementShell`, which combines both inventory features for `warehouse-app`

### `libs/sales-analytics`

This is the second feature system package. It contains:

- `RevenueTracker`, which uses `formatCurrency` for sales totals
- `LowStockAlerts`, which uses `calculateStockStatus`, `DataTable`, and `StatusBadge`
- `TopSellingProducts`, which uses `DataTable` and `formatCurrency`
- `SalesByCategory`, which uses `MetricCard` and `formatCurrency`
- `MonthlySalesSummary`, which uses `DataTable` and `formatCurrency`
- `SalesAnalyticsShell`, which combines both analytics features for `manager-dashboard`

## Applications

### `apps/warehouse-app`

Runs the inventory management system. The app is intentionally thin and imports its feature UI from `@mystore-enterprise/inventory-management`.

### `apps/manager-dashboard`

Runs the sales analytics system. The app is intentionally thin and imports its feature UI from `@mystore-enterprise/sales-analytics`.

## Setup

Install dependencies:

```sh
npm install
```

## Run the Applications

Warehouse app:

```sh
npm run start:warehouse
```

Open `http://localhost:4200`.

Manager dashboard:

```sh
npm run start:manager
```

Open `http://localhost:4201`.

## Build and Test

Build every app and library:

```sh
npm run build
```

Run all tests:

```sh
npm test
```

Format the workspace:

```sh
npm run format
```

## Requirement Mapping

The assignment mentions `feature-x` and `feature-y` as example package names. This project uses clearer domain names instead:

- `feature/system 1` maps to `libs/inventory-management`
- `feature/system 2` maps to `libs/sales-analytics`

Both feature packages demonstrate composition of shared UI components and shared utility functions.

## Group Feature Count

For a group of 5 members, the requirement is at least 10 features total because each member contributes at least 2 features. This project includes 10 feature components:

| Member Slot | System Package                             | Feature 1               | Feature 2             |
| ----------- | ------------------------------------------ | ----------------------- | --------------------- |
| Member 1    | `inventory-management`                     | `StockOverview`         | `AddInventoryForm`    |
| Member 2    | `inventory-management`                     | `InventorySearchFilter` | `SupplierList`        |
| Member 3    | `inventory-management` / `sales-analytics` | `ReorderRequests`       | `RevenueTracker`      |
| Member 4    | `sales-analytics`                          | `LowStockAlerts`        | `TopSellingProducts`  |
| Member 5    | `sales-analytics`                          | `SalesByCategory`       | `MonthlySalesSummary` |
