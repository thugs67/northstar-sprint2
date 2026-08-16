# Northstar Support Desk — Go-Live Readiness Note

**Project:** Northstar Support Desk MVP  
**Team:** Group 89  
**Scope:** Order Status and Stock Availability  
**Status:** Integration Testing Complete for Current MVP Workflows

## 1. What Works

### Order Status

- [x] Customer can enter an Order ID.
- [x] A valid Order ID returns the order status.
- [x] Estimated delivery information is displayed.
- [x] An invalid or unknown Order ID produces clear feedback.

### Stock Availability

- [x] Customer can search using a product name or SKU.
- [x] A valid product lookup returns product information.
- [x] Stock availability is clearly displayed.
- [x] An invalid or unknown product produces clear feedback.

### Validation and Error Handling

- [x] Empty inputs are handled appropriately.
- [x] Invalid lookups provide clear feedback.
- [ ] Data-loading failures are handled appropriately.

## 2. Known Issues / Limitations

- The MVP currently uses sample JSON data rather than a production
  inventory or order-management system.
- Product variants are represented through product names rather than a
  dedicated size/variant field in the current sample data.
- Live integration with shipping or inventory systems is outside the
  current MVP scope.
- Additional limitations will be recorded here during integration and
  testing.

## 3. Handover Requirements for Northstar

Before production handover, Northstar would need:

- Access to the production order-status data source.
- Access to the production inventory/stock data source.
- Appropriate configuration for production data sources.
- A documented procedure for running and maintaining the application.
- Validation of the dashboard against production workflows.
- Resolution or acceptance of all known MVP limitations.

## 4. Go-Live Decision

**Current status: NOT READY FOR FINAL GO-LIVE**

The MVP should be considered ready for demonstration when both Order Status
and Stock Availability workflows operate successfully end-to-end and the
team has completed integration and testing.

The final go-live recommendation will be updated after the team's integration,
testing, and review activities are complete.
