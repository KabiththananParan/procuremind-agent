# API Contract

## Overview

This document defines the API contract between the frontend, backend services, AI agents, database, and Terminal 3 integration.

The API contract serves as the single source of truth for communication between all components of the ProcureMind platform.

---

# API Design Principles

## REST-Based Design

The MVP follows a REST API architecture.

---

## Responsibilities

Frontend:

* User interaction
* Form submission
* Displaying results

Backend:

* Business logic
* AI orchestration
* Database operations
* Authentication
* Approval workflows

AI Agents:

* Request analysis
* Vendor recommendations
* Risk assessment
* Approval recommendations

---

# Authentication APIs

## Login

### Endpoint

POST /api/auth/login

### Purpose

Authenticate a user and create a session.

### Used By

* Login Page

### Database Tables

* User

### Terminal 3 Integration

Future identity verification point.

---

## Get Current User

### Endpoint

GET /api/auth/me

### Purpose

Retrieve currently authenticated user.

### Used By

* Dashboard
* Navigation
* Request Creation

### Database Tables

* User

---

# AI Analysis APIs

## Analyze Procurement Request

### Endpoint

POST /api/ai/analyze

### Purpose

Analyze procurement requests before creation.

### Used By

* Create Request Page

### Input

Natural language procurement request.

Example:

Need 10 GitHub Copilot licenses for Engineering.

---

### AI Agents Triggered

1. Procurement Agent
2. Vendor Intelligence Agent
3. Risk Assessment Agent
4. Approval Routing Agent

---

### Output

Procurement Analysis Package

Contains:

* Category
* Item Name
* Quantity
* Estimated Cost
* Vendor Recommendation
* Alternative Vendors
* Risk Level
* Approval Requirement

---

### Database Tables

None

Analysis occurs before request creation.

---

# Procurement Request APIs

## Create Procurement Request

### Endpoint

POST /api/requests

### Purpose

Create a procurement request after AI analysis confirmation.

### Used By

* Create Request Page

### Input

Confirmed procurement request.

---

### Database Tables

* Request

---

### Agent Interaction

Analysis already completed.

No additional AI processing required.

---

## Get My Requests

### Endpoint

GET /api/requests

### Purpose

Retrieve procurement requests belonging to current user.

### Used By

* Dashboard

### Database Tables

* Request
* User

---

## Get Request Details

### Endpoint

GET /api/requests/:id

### Purpose

Retrieve detailed procurement request information.

### Used By

* Request Details Page

### Database Tables

* Request
* Approval

---

# Approval APIs

## Submit Approval Decision

### Endpoint

POST /api/approvals

### Purpose

Approve or reject procurement requests.

### Used By

* Future Approval Center

### Input

Approval decision.

Possible values:

* Approved
* Rejected

---

### Database Tables

* Approval
* Request

---

### Workflow

Approval recorded.

Request status updated.

Audit entry generated.

---

## Get Approval Information

### Endpoint

GET /api/approvals/:requestId

### Purpose

Retrieve approval history.

### Used By

* Request Details Page

### Database Tables

* Approval

---

# Dashboard APIs

## Dashboard Summary

### Endpoint

GET /api/dashboard

### Purpose

Retrieve dashboard metrics.

### Used By

* Dashboard

### Returned Information

* Total Requests
* Pending Requests
* Approved Requests
* Completed Requests
* Recent Requests

### Database Tables

* Request
* User

### AI Agents

None

Dashboard data should be generated directly from the database.

---

# Agent Mapping

## Procurement Agent

Triggered By:

POST /api/ai/analyze

Responsibilities:

* Intent extraction
* Category classification
* Request structuring

---

## Vendor Intelligence Agent

Triggered By:

POST /api/ai/analyze

Responsibilities:

* Vendor discovery
* Alternative recommendations
* Vendor comparison

---

## Risk Assessment Agent

Triggered By:

POST /api/ai/analyze

Responsibilities:

* Security evaluation
* Procurement risk analysis
* Risk scoring

---

## Approval Routing Agent

Triggered By:

POST /api/ai/analyze

Responsibilities:

* Approval recommendation
* Escalation requirements
* Policy evaluation

---

# Database Mapping

## User Table

Used By:

* Login
* Current User
* Dashboard

---

## Request Table

Used By:

* Create Request
* Get Requests
* Dashboard
* Request Details

---

## Approval Table

Used By:

* Approval Submission
* Approval History
* Request Details

---

# Request Lifecycle Mapping

## Create Request

POST /api/requests

Status:

PENDING

---

## AI Review

POST /api/ai/analyze

Status:

UNDER_REVIEW

---

## Approval Required

Status:

AWAITING_APPROVAL

---

## Approved

Status:

APPROVED

---

## Purchased

Status:

PURCHASED

---

## Completed

Status:

COMPLETED

---

## Rejected

Status:

REJECTED

---

# Error Handling Standards

## Authentication Errors

Examples:

* Invalid credentials
* Unauthorized access

---

## Validation Errors

Examples:

* Missing request information
* Invalid request format

---

## AI Processing Errors

Examples:

* Analysis failed
* Vendor lookup failed

---

## System Errors

Examples:

* Database unavailable
* Service unavailable

---

# Future APIs

## Delegation APIs

Purpose:

Manage AI purchasing authority.

Examples:

* Create Delegation
* Update Delegation
* Revoke Delegation

---

## Audit APIs

Purpose:

Retrieve procurement activity history.

---

## Agent Activity APIs

Purpose:

Track AI agent decisions and actions.

---

## Vendor APIs

Purpose:

Vendor recommendations and comparisons.

---

# Terminal 3 Integration Points

## Authentication

Future identity verification.

Endpoint Group:

/api/auth

---

## Delegated Authority

Future purchasing delegation verification.

Endpoint Group:

/api/delegations

---

## Approval Verification

Future approval validation.

Endpoint Group:

/api/approvals

---

## Audit Integrity

Future audit verification.

Endpoint Group:

/api/audit

---

# MVP API Summary

Authentication

* POST /api/auth/login
* GET /api/auth/me

AI Analysis

* POST /api/ai/analyze

Requests

* POST /api/requests
* GET /api/requests
* GET /api/requests/:id

Approvals

* POST /api/approvals
* GET /api/approvals/:requestId

Dashboard

* GET /api/dashboard

These endpoints provide a complete foundation for the ProcureMind MVP while supporting future Terminal 3 integration and multi-agent procurement workflows.
