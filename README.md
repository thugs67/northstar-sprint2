markdown
# Northstar Support Desk

A self-serve dashboard MVP for Northstar Retail Co. Customers (or support agents)
check **order status** and **stock availability** without opening a ticket.

## Project structure

northstar-dashboard/
├── index.html # Dashboard shell (both lookup modules)
├── css/
│ └── styles.css # Design tokens + layout
├── js/
│ └── app.js # Form handling + data lookup + rendering
├── data/
│ ├── orders.json # Sample order records (placeholder — Alex to expand)
│ └── products.json # Sample product/stock records (placeholder — Alex to expand)
└── README.md


No build step, no dependencies. Open `index.html` in a browser, or run a
local server:

python3 -m http.server 8000


then visit `http://localhost:8000`.

## Commit / edit convention

Every commit must follow:

<type>: <what changed> - <why it matters>


Examples:
- `feat: add order status lookup form - covers ticket type 1 requirement`
- `fix: handle empty SKU search - prevents blank result card`
- `docs: add setup instructions - onboards new teammates faster`

`wip` / `updates` / similar are **not** acceptable commit messages.

## Task board reference

| Task | Owner |
|---|---|
| Dashboard requirements | Paula / Salim |
| Dashboard design | John |
| Sample order and product data | Alex |
| Setup project structure and dev environment | John |
| Build order status feature | Caroline |
| Build stock availability feature | Caroline |
| Implement validation and error handling | _unassigned_ |
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
  