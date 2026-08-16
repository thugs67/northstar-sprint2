# Northstar Support Desk — Dashboard Requirements

## 1. Purpose

The Northstar Support Desk is a self-serve dashboard MVP designed to help
customers check common support information without opening a support ticket.

The MVP supports two Northstar ticket categories:

1. Order Status
2. Stock Availability

## 2. Order Status Requirements

### FR-01 — Order lookup

The customer must be able to enter an Order ID and submit a search.

### FR-02 — Order status

The dashboard must display the status of a matching order.

Supported sample statuses currently include:

- Processing
- Shipped
- Delivered

### FR-03 — Estimated delivery

For a matching order, the dashboard must display the estimated delivery date
when available.

### FR-04 — Order not found

When an Order ID does not match an available order, the dashboard must display
a clear message explaining that the order could not be found.

## 3. Stock Availability Requirements

### FR-05 — Product lookup

The customer must be able to search for a product using its product name or SKU.

### FR-06 — Availability status

The dashboard must clearly indicate whether the selected product is in stock
or out of stock.

### FR-07 — Stock quantity

When available, the dashboard should display the current stock quantity.

### FR-08 — Product not found

When a product name or SKU does not match an available product, the dashboard
must display a clear message explaining that the product could not be found.

## 4. Input Validation and Error Handling

### FR-09 — Empty input

The dashboard must prevent a lookup from being submitted when the required
input field is empty.

### FR-10 — Invalid or unavailable lookup

The dashboard must provide clear user feedback when an Order ID, product name,
or SKU cannot be matched.

### FR-11 — Data loading failure

If the dashboard cannot load the sample data, the application should handle
the failure gracefully and provide an appropriate error state.

## 5. User Experience Requirements

### UX-01 — Clear separation

The dashboard must clearly distinguish the Order Status and Stock Availability
lookup workflows.

### UX-02 — Clear results

Lookup results must be presented in a format that allows the customer to
quickly understand the status or availability.

### UX-03 — Consistent feedback

Success, pending/out-of-stock, and not-found states should use the existing
dashboard styling consistently.

## 6. MVP Acceptance Criteria

The MVP is considered ready for demonstration when:

- A valid Order ID returns the corresponding order information.
- An invalid Order ID produces an appropriate not-found response.
- A valid product name or SKU returns the corresponding product information.
- The dashboard clearly indicates whether the product is in stock or out of stock.
- An invalid product name or SKU produces an appropriate not-found response.
- Empty inputs are handled appropriately.
- Both workflows can be demonstrated end-to-end without opening a support ticket.

## 7. Current Sample Data

### Orders

The current sample order data contains:

- Order ID
- Order status
- Estimated delivery date

### Products

The current sample product data contains:

- SKU
- Product name
- Stock quantity

The current dataset represents product variants through product names
(for example, "Trailhead Backpack - Small") rather than through a separate
size field.

## 8. Scope Boundary

The current MVP does not require:

- Customer authentication
- Payment processing
- Live shipping-provider integration
- A production inventory system
- Returns and refunds functionality
- All three Northstar ticket categories

The MVP focuses specifically on:

- Order Status
- Stock Availability
