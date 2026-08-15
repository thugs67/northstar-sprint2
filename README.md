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

## Documentation

- [Team Charter](docs/team-charter.md)
- [Dashboard Requirements](docs/dashboard-requirements.md)
- [Go-Live Readiness Note](docs/go-live-readiness.md)

The Team Charter documents the team's working agreement, communication,
decision-making, escalation, board and audit rules.

## Handoff Notes

The MVP currently uses sample JSON data.

Before production handover, Northstar would need appropriate production
order-status and inventory data sources, configuration, operational
documentation, and validation against production workflows.

Known MVP limitations and handover requirements are maintained in the
[Go-Live Readiness Note](docs/go-live-readiness.md).
