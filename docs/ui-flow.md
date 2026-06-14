# UI Flow Documentation

## Overview

ProcureMind is an AI-powered procurement platform that enables employees to create procurement requests using natural language while AI agents analyze requests, estimate costs, recommend vendors, and route approvals.

This document defines the user experience, navigation structure, screen responsibilities, and interaction flow.

---

# Application Flow

```text
Login
  ↓
Dashboard
  ↓
Create Request
  ↓
AI Analysis
  ↓
Request Details
  ↓
Approval Workflow
  ↓
Purchase Completion
```

---

# Navigation Structure

## Primary Navigation

* Dashboard
* Create Request
* My Requests

Future Navigation:

* Approval Center
* Audit Logs
* Delegation Center
* Agent Activity

---

# Screen 1: Login

## Purpose

Authenticate users and establish identity before procurement actions.

Terminal 3 integration will later verify employee identity.

---

## User Actions

* Enter email
* Enter password
* Sign in

---

## Success Flow

```text
Login
 ↓
Dashboard
```

---

# Screen 2: Dashboard

## Purpose

Provide a summary of procurement activity.

This is the application's home screen.

---

## Dashboard Sections

### Summary Cards

Display:

* Total Requests
* Pending Requests
* Approved Requests
* Completed Requests

---

### Recent Requests

Display:

* Request Name
* Status
* Date Created

Example:

* GitHub Copilot Licenses
* Notion Subscription
* Cloud Hosting Request

---

### Quick Actions

Buttons:

* Create Request
* View My Requests

---

## User Flow

```text
Dashboard
  ↓
Create Request
```

or

```text
Dashboard
  ↓
View Existing Request
```

---

# Screen 3: Create Request

## Purpose

Allow employees to describe procurement needs using natural language.

This is the core AI entry point.

---

## Input Section

User describes procurement requirement.

Example:

Need 10 GitHub Copilot licenses for the engineering team.

---

## Actions

### Analyze Request

AI begins processing request.

AI extracts:

* Product
* Quantity
* Category
* Estimated Cost

---

## AI Review Panel

Display:

### Request Information

* Product Name
* Quantity
* Category

### Procurement Insights

* Estimated Cost
* Risk Level
* Approval Requirement

### Vendor Suggestions

Recommended vendors and alternatives.

---

## User Decision

Options:

* Edit Request
* Confirm Request

---

## Confirmation Flow

```text
Create Request
 ↓
AI Analysis
 ↓
Confirm
 ↓
Request Created
```

---

# Screen 4: Request Details

## Purpose

Provide complete visibility into a procurement request.

---

## Information Displayed

### Request Information

* Request ID
* Description
* Category
* Quantity
* Estimated Cost

---

### Status Information

* Current Status
* Approval Status
* Assigned Approver

---

### Procurement Timeline

Display lifecycle progress.

Example:

✓ Request Created

✓ AI Analysis Completed

✓ Approval Granted

⏳ Purchase In Progress

---

### AI Recommendations

Display:

* Recommended Vendor
* Alternative Vendors
* Cost Comparison

---

## Available Actions

Depending on status:

* Cancel Request
* View Approval Status
* View Recommendations

---

# Request Status Design

## Pending

Meaning:

Request submitted and awaiting review.

Color:

Yellow

---

## Under Review

Meaning:

AI agent evaluating request.

Color:

Orange

---

## Awaiting Approval

Meaning:

Waiting for manager or director approval.

Color:

Purple

---

## Approved

Meaning:

Request approved.

Color:

Green

---

## Rejected

Meaning:

Request denied.

Color:

Red

---

## Purchased

Meaning:

Procurement completed.

Color:

Blue

---

## Completed

Meaning:

Request fully closed.

Color:

Teal

---

# AI-Assisted User Journey

## Step 1

User submits request.

Example:

Need cloud hosting for our application.

---

## Step 2

AI Procurement Agent analyzes request.

Tasks:

* Categorization
* Cost estimation
* Vendor identification

---

## Step 3

User reviews AI-generated insights.

---

## Step 4

Request submitted.

---

## Step 5

Approval workflow triggered if required.

---

## Step 6

Purchase completed.

---

# Empty States

## Dashboard

No requests found.

Message:

Create your first procurement request.

Button:

Create Request

---

## Request List

No procurement requests available.

---

# Error States

## AI Analysis Failed

Message:

Unable to analyze request.

Action:

Try Again

---

## Approval Failed

Message:

Approval process unavailable.

Action:

Contact administrator

---

# Mobile Experience

Priority Screens:

* Dashboard
* Create Request
* Request Details

Navigation:

Bottom navigation menu.

---

# Future Enhancements

## Approval Center

Manager approval dashboard.

---

## Delegation Center

Manage AI purchasing authority.

---

## Audit Logs

View procurement history.

---

## Agent Activity

Track AI decisions and actions.

---

# Design Principles

* Enterprise-focused
* Minimal and professional
* AI-first experience
* Transparent decision making
* Clear approval visibility
* Verifiable procurement actions
* Mobile-friendly layout
