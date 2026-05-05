# Meridian Commerce: Enterprise Monorepo

Meridian Commerce  is a component-based enterprise monorepo demonstrating modern front-end architecture. It leverages an Nx workspace to cleanly separate domain logic, reusable UI primitives, and shared utilities across multiple scalable React applications.

## System Architecture

The architecture follows a strict component-based development methodology, emphasizing separation of concerns and code reusability. The workspace is divided into autonomous feature libraries and consumer applications.

### Applications

Thin consumer applications that orchestrate feature libraries into functional tools:

- **Warehouse App** (`apps/warehouse-app`): The operational inventory management system. Used by warehouse staff for stock intake, visibility, and supplier management.
- **Manager Dashboard** (`apps/manager-dashboard`): The executive sales analytics system. Used by management to track revenue trends, monitor low stock, and analyze categorical performance.

### Feature Libraries

Domain-specific libraries containing complex business logic and composite features:

- **Inventory Management** (`libs/inventory-management`): Encapsulates all inventory-related state, search filtering, and supplier logic.
- **Sales Analytics** (`libs/sales-analytics`): Encapsulates sales data visualization, leaderboards, and metric summaries.

### Core Libraries

Shared primitives used across all domains:

- **UI Components** (`libs/ui-components`): A highly reusable, framework-agnostic React component library (buttons, tables, badges, metric cards) styled with Tailwind CSS.
- **Utils** (`libs/utils`): Shared pure functions (e.g., currency formatting, stock status calculation) ensuring consistent business rules across applications.

## Setup and Installation

Ensure you have Node.js and npm installed.

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Run the Warehouse Application:**
   ```sh
   npm run start:warehouse
   # Runs on http://localhost:4200
   ```

3. **Run the Manager Dashboard:**
   ```sh
   npm run start:manager
   # Runs on http://localhost:4201
   ```

## Development Commands

- **Build all projects:** `npm run build`
- **Run all test suites:** `npm test`
- **Format workspace:** `npm run format`

## Feature Ownership & Contributors

This system was developed collaboratively. The core architecture and domain components were implemented and maintained by the following contributors:

### Fasill (fasilhawultie19@gmail.com)
- **Stock Overview** (`inventory-management`): Comprehensive data table visualizing current inventory items.
- **Add Inventory Form** (`inventory-management`): Form module for warehouse stock intake with field validation.
- **Primary Button** (`ui-components`): Standardized primary action primitive used globally.
- **Inventory Shell** (`inventory-management`): Orchestration shell managing warehouse state and routing.

### Nanfii (ifnanfeysal9@gmail.com)
- **Inventory Search Filter** (`inventory-management`): Real-time search module filtering inventory by SKU and name.
- **Supplier List** (`inventory-management`): Directory view of partner categories and lead times.
- **Search Input** (`ui-components`): Accessible, standardized search input primitive.
- **Status Badge** (`ui-components`): Dynamic visual indicator for stock status states.

### Faysel-Abdella (Fayselcode@gmail.com)
- **Reorder Requests** (`inventory-management`): Tracking board for pending restock requests and priorities.
- **Revenue Tracker** (`sales-analytics`): Dynamic metric tracking for aggregated revenue across time periods.
- **Data Table** (`ui-components`): Generic, highly reusable table component supporting custom column rendering.
- **Section Header** (`ui-components`): Unified typographical header primitive for feature modules.

### nanati45 (nansiasamnew@gmail.com)
- **Low Stock Alerts** (`sales-analytics`): Alert component cross-referencing inventory statuses against reorder points.
- **Top Selling Products** (`sales-analytics`): Performance leaderboard ranking products by unit sales and revenue.
- **Metric Card** (`ui-components`): KPI display primitive with growth indicator support.

### AbdulwahidHusein (abdulwahidhussen750@gmail.com)
- **Sales By Category** (`sales-analytics`): Categorical breakdown module analyzing sales distribution and growth.
- **Monthly Sales Summary** (`sales-analytics`): Historical progression table detailing month-over-month volume.
- **Sales Analytics Shell** (`sales-analytics`): Dashboard orchestration component composing all analytics features.

---
*Built with React, Nx, Vite, and Tailwind CSS.*
