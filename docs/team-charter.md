# Northstar Sprint — Team Charter

**Team:** Group 89 — Northstar Sprint
**Project:** Northstar Support Desk MVP
**Team Lead:** Salim Panyako — salimpanyako@gmail.com

## 1. Team Members and Roles

| Member | Email | Primary Role |
|---|---|---|
| Salim Panyako | salimpanyako@gmail.com | Team Lead / Documentation & Delivery |
| John Kamau | johnkamau2530@yahoo.com | Project Setup / Dashboard Design |
| Alex | oyugia08@gmail.com | Sample Order & Product Data |
| Caroline | caroonyango9@gmail.com | Order Status & Stock Availability Features |
| Paula Ndirangu | ndirangupaula@gmail.com | Validation & Error Handling |

## 2. Communication Channels and Purpose

- **WhatsApp Group** — Team communication, announcements, coordination and urgent updates.
- **GitHub** — Code, documentation, branches, pull requests, reviews and audit trail.
- **Zoom** — Team meetings, planning, demonstrations and issue resolution.

## 3. Decision-Making Rules

- The team first attempts to reach consensus through discussion.
- The task owner proposes the implementation approach for their assigned task.
- Decisions affecting the overall MVP scope are discussed by the team before implementation.
- If consensus cannot be reached, the Team Lead coordinates the decision based on the agreed MVP scope, timeline and assessment requirements.
- Technical decisions must not compromise the agreed Definition of Done or audit requirements.

## 4. Conflict Escalation Path

**Trigger:** A disagreement, blocker, missed commitment or unresolved technical issue affects delivery.

1. Discuss the issue directly with the relevant team member.
2. Attempt to resolve it through team discussion.
3. If unresolved, involve the Team Lead.
4. If the issue continues to affect delivery, record the decision and agreed action in the team communication channel or GitHub.
5. Reassign or split the task where necessary to protect the sprint deadline.

## 5. Branch and Commit Naming Convention

### Branch naming

Use:

`<type>/<short-description>`

Examples:

- `docs/team-charter-readme`
- `docs/go-live-readiness`
- `feature/order-stock`
- `fix/input-validation`

### Commit naming

Use:

`<type>: <what changed> - <why it matters>`

Examples:

- `feat: add order status lookup - helps customers track orders`
- `fix: handle empty SKU search - prevents blank result cards`
- `docs: add team charter - documents team working agreement`

`wip`, `updates`, and similar non-descriptive commit messages are not acceptable.

## 6. Board Working Rules

- Every task must have an owner.
- Every task must have a clear Definition of Done.
- No individual board task should represent more than 4 hours of work. Larger tasks must be split.
- Board status must be updated on the same day that work is performed.
- Completed work must have traceable GitHub evidence where applicable.
- Pull requests and commits should reference the work they represent.

## 7. Definition of Done

A task is considered Done when:

1. The agreed work has been completed.
2. The result has been tested or reviewed as appropriate.
3. Any required code or documentation has been committed.
4. The relevant board item has been updated.
5. Evidence can be traced through the GitHub history where applicable.

## 8. Collaboration and Audit Requirements

The team will maintain a visible contribution trail through:

- Git branches
- Descriptive commits
- Pull requests
- GitHub Project board updates
- Documentation
- Task-to-commit/PR traceability

A lack of visible activity for two or more days triggers the escalation path rather than waiting until the final deadline.

## 9. Sprint Objective

Deliver a demoable Northstar Support Desk MVP that reduces manual support handling for at least two ticket categories:

- Order Status
- Stock Availability

The MVP must be supported by a go-live readiness note and a traceable collaborative audit trail.
