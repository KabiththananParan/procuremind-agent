# Database Design

## Overview

The ProcureMind database is designed to support AI-powered procurement workflows, approval management, auditability, and future Terminal 3 delegated authority features.

The database prioritizes:

* Traceability
* Scalability
* Explainability
* Enterprise governance
* AI-assisted procurement workflows

---

# Database Architecture

## Core Entities

### User

Represents employees, managers, directors, and administrators.

### Request

Represents procurement requests submitted by users.

### Approval

Represents approval decisions made against procurement requests.

### AuditLog

Stores verifiable records of important procurement actions.

### Delegation

Stores permissions delegated to AI agents.

---

# Entity Relationship Diagram

```text
User
 │
 ├── Request
 │       │
 │       ├── Approval
 │       │
 │       └── AuditLog
 │
 ├── Delegation
 │
 └── AuditLog
```

---

# User Entity

## Purpose

Stores user identity and organizational information.

---

## Fields

### id

Unique identifier.

---

### name

User full name.

---

### email

Unique email address.

---

### role

Examples:

* EMPLOYEE
* MANAGER
* DIRECTOR
* ADMIN

---

### department

Examples:

* Engineering
* Marketing
* Operations
* Finance

---

### spendingLimit

Maximum amount user may approve.

---

### createdAt

Account creation timestamp.

---

### updatedAt

Last update timestamp.

---

# Request Entity

## Purpose

Stores procurement requests.

---

## Fields

### id

Unique request identifier.

---

### userId

Request owner.

References:

User

---

### title

Short request title.

Example:

GitHub Copilot Licenses

---

### description

Natural language procurement request.

Example:

Need 10 GitHub Copilot licenses for Engineering.

---

### category

Examples:

* Software
* Hardware
* Cloud Services
* AI Tools
* Subscription

---

### quantity

Requested quantity.

---

### estimatedCost

Cost estimated by AI.

---

### riskLevel

Examples:

* LOW
* MEDIUM
* HIGH

---

### recommendedVendor

Vendor selected by AI.

---

### approvalRequired

Boolean value.

---

### status

Examples:

* DRAFT
* PENDING
* UNDER_REVIEW
* AWAITING_APPROVAL
* APPROVED
* REJECTED
* PURCHASED
* COMPLETED

---

### createdAt

Request creation timestamp.

---

### updatedAt

Request update timestamp.

---

# Approval Entity

## Purpose

Tracks procurement approvals.

---

## Fields

### id

Unique approval identifier.

---

### requestId

Associated procurement request.

References:

Request

---

### approverId

User providing approval.

References:

User

---

### decision

Examples:

* APPROVED
* REJECTED

---

### comment

Optional approval notes.

---

### createdAt

Approval timestamp.

---

# AuditLog Entity

## Purpose

Provides traceability for procurement actions.

Supports future Terminal 3 audit verification.

---

## Fields

### id

Unique audit identifier.

---

### actorId

User performing action.

References:

User

---

### requestId

Related procurement request.

Optional.

References:

Request

---

### action

Examples:

* REQUEST_CREATED
* REQUEST_UPDATED
* ANALYSIS_COMPLETED
* APPROVAL_GRANTED
* APPROVAL_REJECTED
* DELEGATION_CREATED
* PURCHASE_COMPLETED

---

### details

Human-readable description.

---

### verificationStatus

Examples:

* PENDING
* VERIFIED

---

### createdAt

Audit event timestamp.

---

# Delegation Entity

## Purpose

Stores AI purchasing permissions granted by users.

Supports autonomous procurement.

---

## Fields

### id

Unique delegation identifier.

---

### userId

Delegating user.

References:

User

---

### maxAmount

Maximum spending authority.

---

### allowedCategories

Allowed procurement categories.

Examples:

* Software
* AI Tools
* Cloud Services

---

### validUntil

Delegation expiration date.

---

### status

Examples:

* ACTIVE
* REVOKED
* EXPIRED

---

### createdAt

Delegation creation timestamp.

---

# Database Relationships

## User → Request

Relationship:

One-to-Many

Meaning:

One user can create many requests.

---

## Request → Approval

Relationship:

One-to-Many

Meaning:

One request may have multiple approval records.

---

## User → Approval

Relationship:

One-to-Many

Meaning:

One manager may approve many requests.

---

## User → Delegation

Relationship:

One-to-Many

Meaning:

One user may create multiple delegations.

---

## Request → AuditLog

Relationship:

One-to-Many

Meaning:

One request can generate multiple audit events.

---

# Procurement Lifecycle Mapping

## Request Created

Tables affected:

* Request
* AuditLog

---

## AI Analysis Completed

Tables affected:

* Request
* AuditLog

---

## Approval Submitted

Tables affected:

* Approval
* Request
* AuditLog

---

## Request Rejected

Tables affected:

* Request
* AuditLog

---

## Request Approved

Tables affected:

* Request
* AuditLog

---

## Purchase Completed

Tables affected:

* Request
* AuditLog

---

# MVP Database Scope

The MVP implementation will use:

* User
* Request
* Approval
* AuditLog

---

# Future Database Scope

Future versions will include:

* Delegation
* AgentActivity
* VendorRecommendation
* BudgetForecast
* ComplianceReview

---

# Terminal 3 Data Mapping

## Identity Verification

Mapped To:

User

---

## Approval Verification

Mapped To:

Approval

---

## Delegated Authority

Mapped To:

Delegation

---

## Audit Integrity

Mapped To:

AuditLog

---

# Design Principles

1. Every procurement action must be traceable.

2. Every approval must be attributable to a verified user.

3. AI-generated recommendations should be stored alongside procurement requests.

4. Future autonomous procurement should be supported without redesigning the database.

5. Terminal 3 verification should integrate naturally into the data model.

This database design provides a scalable foundation for trusted AI-powered procurement workflows while supporting future autonomous procurement capabilities.
