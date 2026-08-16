# Northstar Support Desk — Assignment 2 Delivery and Audit Evidence

**Project:** Northstar Support Desk MVP
**Team:** Group 89
**Sprint:** Northstar 1-Week Industry Working Simulation
**Audit purpose:** Final delivery and collaborative contribution evidence

## 1. Delivery Summary

The Northstar Support Desk MVP provides two self-service support workflows:

1. Order Status
2. Stock Availability

Both workflows were tested by the five team members and produced positive results.

The working MVP, sprint board, GitHub history, task-to-commit/PR evidence and Go-Live Readiness Note have been reviewed as part of the final delivery evidence.

## 2. Final Sprint Board Snapshot

At the final audit review, the sprint board contained:

* 10 tasks marked Done.
* 1 task marked In Progress.
* 0 tasks remaining in Todo.

### Completed Tasks

| Task                                                | Owner        | Status |
| --------------------------------------------------- | ------------ | ------ |
| Dashboard requirements                              | Salim / John | Done   |
| Dashboard design                                    | John         | Done   |
| Sample order and product data                       | Alex         | Done   |
| Setup project structure and development environment | John         | Done   |
| Build order status feature                          | Caroline     | Done   |
| Build stock availability feature                    | Caroline     | Done   |
| Integrate and test both workflows                   | Team         | Done   |
| Prepare 1-page readiness note                       | Salim        | Done   |
| Team Charter and README Documentation               | Salim        | Done   |
| Prepare final delivery and audit evidence           | Salim        | Done   |

### Outstanding Task

| Task                                    | Owner   | Status      |
| --------------------------------------- | ------- | ----------- |
| Implement validation and error handling | thugs67 | In Progress |

## 3. Task-to-Commit / Pull Request Traceability

| Work                              | Contributor | Git Evidence                 | Result    |
| --------------------------------- | ----------- | ---------------------------- | --------- |
| Initial project scaffold          | John        | `0d8afb5`                    | Completed |
| Dashboard requirements            | Salim       | `8a98895` / PR #1            | Merged    |
| Go-Live Readiness Note            | Salim       | `27d3640` / PR #2            | Merged    |
| Sample products and orders        | Alex        | `6764861`, `7459c1a` / PR #4 | Merged    |
| Order Status feature              | Caroline    | `07477d7`                    | Completed |
| Stock Availability feature        | Caroline    | `a6b5ba9`                    | Completed |
| Lookup and rendering improvements | thugs67     | `c4c32e8`, `4183300`         | Completed |
| Feature integration               | thugs67     | PR #3 / `dbbc954`            | Merged    |
| Project/task updates              | thugs67     | `84cff74`                    | Completed |
| Team Charter and README           | Salim       | `f2085ae`                    | Completed |
| Team Charter Sign-Off             | Salim       | `0c5b506`                    | Completed |
| MVP workflow test evidence        | Salim       | `65e769b`, `b46dd13`         | Completed |

## 4. Contribution Traceability

The Git history provides visible contribution evidence from multiple team members.

### Salim

Contributions include:

* Dashboard requirements documentation.
* Go-Live Readiness documentation.
* Team Charter and README documentation.
* Team Charter sign-off.
* MVP workflow testing evidence.
* Final delivery and audit preparation.

Relevant commits:

* `8a98895`
* `27d3640`
* `f2085ae`
* `0c5b506`
* `65e769b`
* `b46dd13`

### John

Contribution evidence includes:

* Initial project scaffold.
* Project setup and development environment work.
* Dashboard design.
* README conflict resolution.

Relevant commit:

* `0d8afb5`

John also participated in MVP testing and reported positive results.

### Alex

Contribution evidence includes:

* Sample order and product data.

Relevant commits:

* `6764861`
* `7459c1a`

Alex also participated in MVP testing and reported positive results.

### Caroline

Contribution evidence includes:

* Order Status feature.
* Stock Availability feature.

Relevant commits:

* `07477d7`
* `a6b5ba9`

Caroline also participated in MVP testing and reported positive results.

### Paula

Paula was assigned validation and error-handling responsibilities and participated in MVP testing.

Paula's testing response was positive.

## 5. MVP Testing Evidence

The two required MVP workflows were tested by the team.

### Order Status

Tested successfully:

* Order ID input.
* Valid order lookup.
* Order status display.
* Estimated delivery information.
* Invalid or unknown order feedback.

### Stock Availability

Tested successfully:

* Product name search.
* SKU search.
* Product information display.
* Stock availability display.
* Invalid or unknown product feedback.

### Team Testing

The current MVP workflows were tested by:

* Salim
* Alex
* John
* Caroline
* Paula

All five reported positive results.

The testing evidence is recorded in the Go-Live Readiness Note.

## 6. Go-Live Readiness Evidence

The final readiness documentation is maintained at:

`docs/go-live-readiness.md`

The readiness note records:

* Tested Order Status workflow.
* Tested Stock Availability workflow.
* Validation and error-handling checks.
* Known MVP limitations.
* Production handover requirements.
* Current go-live recommendation.

The MVP is considered ready for demonstration but remains pending for production go-live until production data sources, operational configuration, handover documentation and remaining known limitations are addressed or formally accepted by Northstar.

## 7. GitHub Audit Trail

The repository contains a visible collaborative history through:

* Git branches.
* Descriptive commits.
* Pull requests.
* Merged work.
* Documentation commits.
* Feature commits.
* Testing and readiness updates.

The commit history was reviewed using:

`git log --all --date=iso --pretty=format:"%h | %ad | %an | %s" --date-order`

The branch history was reviewed using:

`git branch -a`

The commit graph was reviewed using:

`git log --all --oneline --decorate --graph`

## 8. Current Audit Position

The final audit review confirms that:

* The MVP exists and is demoable.
* Both required workflows have been tested successfully.
* The sprint board provides task ownership and status information.
* Git history provides contribution evidence.
* Completed work can be mapped to commits and pull requests.
* The Go-Live Readiness Note is included in the repository.
* The Team Charter includes a formal sign-off section.
* The validation and error-handling task remains In Progress and is recorded as such.

## 9. Assignment 2 Deliverables

The final Assignment 2 delivery package consists of:

1. Working Northstar Support Desk MVP.
2. Final sprint board.
3. GitHub commit and pull request audit trail.
4. Task-to-commit/PR traceability evidence.
5. Team contribution evidence.
6. Go-Live Readiness Note.
7. Assignment 2 Delivery and Audit Evidence.

## 10. Audit Conclusion

The Northstar Support Desk MVP has a traceable collaborative development history covering requirements, project setup, sample data, feature development, integration, testing and delivery documentation.

The available GitHub and board evidence supports the team's collaborative contribution trail and provides the required paper trail for the sprint delivery.

The remaining In Progress task is explicitly recorded in the final audit position.
