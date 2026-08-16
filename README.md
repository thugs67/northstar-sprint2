# Northstar Support Desk - Group 89

A self-serve dashboard MVP for Northstar Retail Co. Customers or support
agents can check **order status** and **stock availability** without opening
a support ticket.

## MVP Scope

The MVP supports two customer support workflows:

1. **Order Status** — customers can look up an order and view its status and estimated delivery information.
2. **Stock Availability** — customers can search for a product by name or SKU and view its current stock availability.

## Running the Project

No build step or external dependencies are required.

Open `index.html` directly in a browser, or run a local server:

    python3 -m http.server 8000

Then visit:

    http://localhost:8000

## Project Structure

    northstar-sprint2/
    ├── index.html
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── app.js
    ├── data/
    │   ├── orders.json
    │   └── products.json
    └── docs/
        ├── dashboard-requirements.md
        ├── go-live-readiness.md
        └── team-charter.md

## Development Conventions

### Branch Naming

Use:

    <type>/<short-description>

Examples:

- `feature/order-stock`
- `fix/input-validation`
- `docs/go-live-readiness`

### Commit Naming

Use:

    <type>: <what changed> - <why it matters>

Examples:

- `feat: add order status lookup - helps customers track orders`
- `fix: handle empty SKU search - prevents blank result cards`
- `docs: add team charter - documents team working agreement`

`wip`, `updates`, and similar non-descriptive commit messages are not acceptable.

## Task Ownership

| Task | Owner |
|---|---|
| Dashboard requirements | Paula / Salim |
| Dashboard design | John |
| Sample order and product data | Alex |
| Setup project structure and development environment | John |
| Build order status feature | Caroline |
| Build stock availability feature | Caroline |
| Implement validation and error handling | Paula |
| Integrate and test both workflows | Everyone |
| Prepare 1-page readiness note | Salim |
| Prepare final delivery and audit evidence | Salim |

## Handoff notes for the build phase

- `js/app.js` currently does basic exact/partial-text matching against the
  sample JSON files. Caroline: this is the seam to extend for the real
  order-status and stock-availability logic.
- Form validation currently only checks for an empty field. Whoever owns
  "Implement validation and error handling" should extend the `error`
  handling in `wireForm()` (e.g. order ID format checks, network failure
  states).
- Result rendering uses `.badge--ok` (teal) for resolved/in-stock and
  `.badge--wait` (clay) for pending/out-of-stock — reuse these classes for
  consistency.