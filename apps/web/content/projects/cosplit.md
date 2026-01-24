---
subtitle: 'SaaS • Co-Parenting'
accentColor: 'amber'
techStack:
  - 'Next.js'
  - 'TypeScript'
  - 'Convex'
  - 'Better Auth'
  - 'Polar'
liveUrl: 'https://cosplitapp.com'
---

# CoSplit

## Overview

**CoSplit** is a co-parenting expense tracking application designed for separating couples. It provides a simple, focused way to track shared expenses, generate court-ready documentation, and maintain financial transparency without the drama.

Live at: [cosplitapp.com](https://cosplitapp.com)

<video controls width="100%" style={{borderRadius: '12px', marginTop: '24px', marginBottom: '24px', boxShadow: '6px 6px 0 var(--pop-black)', border: '4px solid var(--pop-black)'}}>
  <source src="/videos/cosplit-overview.mp4" type="video/mp4" />
</video>

## Project Scale

- **Platform**: Web application
- **Tech Stack**: Next.js + TypeScript + Convex + Better Auth
- **Industry**: Family & Legal Tech
- **Architecture**: Serverless with real-time sync
- **Target**: Co-parents managing shared expenses

## Problem Solved

Separating couples face unique challenges tracking shared expenses:

- **No neutral ground**: Spreadsheets lead to disagreements
- **Missing documentation**: Receipts get lost, memories differ
- **Court preparation**: Lawyers need organized records
- **Communication friction**: Every expense becomes a negotiation
- **Trust issues**: Both parties need visibility

## The Solution

CoSplit provides a focused, neutral platform for expense tracking:

- **Quick Logging**: Add expenses in seconds with receipt photos
- **Fair Splits**: Configurable split ratios (50/50, 60/40, custom)
- **Court-Ready PDFs**: Professional exports with all documentation
- **Share Without Signup**: Co-parents can view via secure link
- **Approve/Dispute Flow**: Clear process for expense validation

## Core Features

### Expense Management

- Add expenses with date, amount, category, and description
- Upload receipt photos for documentation
- Assign payer and split ratio
- Track running balances per person
- Filter and search expense history

### Co-Parent Sharing

- Generate secure shareable links
- No account required for co-parent
- View-only access with approve/dispute options
- Real-time sync when expenses are added
- Clear status indicators

### PDF Export

- Court-ready expense reports
- All receipts included
- Running totals and summaries
- Professional formatting
- Perfect for lawyers and mediators

### Reimbursement Tracking

- Request reimbursements for paid expenses
- Track payment status
- Settlement history
- Clear who owes what

### Category Management

- Custom expense categories
- Default split ratios per category
- Quick selection when adding expenses
- Organized expense grouping

## Technical Architecture

### Real-Time Backend (Convex)

Convex provides the backend infrastructure:

- **Real-time sync**: Changes appear instantly for both parties
- **Serverless**: Auto-scaling with zero infrastructure management
- **Type safety**: End-to-end TypeScript types
- **File storage**: Secure receipt image handling

### Authentication (Better Auth)

Secure, flexible authentication:

- **Email/Password**: Traditional signup flow
- **Google OAuth**: One-click login
- **Magic Links**: Passwordless option
- **Session management**: Secure token handling

### Payments (Polar)

Subscription management via Polar:

- **Free tier**: 10 expenses to try the platform
- **Pro subscription**: Unlimited expenses, full features
- **Webhook integration**: Real-time subscription updates

## Pricing Model

### Free Tier

- 10 expenses
- Basic categories
- Share link with co-parent
- Limited export

### Pro ($5/month or $40/year)

- Unlimited expenses
- Receipt photo uploads
- PDF export for court
- Reimbursement requests
- Payment tracking
- Email notifications

## Technical Stack

### Frontend

- **Next.js 16**: App router with server components
- **TypeScript**: Full type safety
- **Tailwind CSS v4**: Modern styling
- **Shadcn UI**: Accessible component library
- **React Hook Form**: Form handling with Zod validation

### Backend

- **Convex**: Real-time serverless database
- **Better Auth**: Authentication via Convex adapter
- **Polar**: Subscription and payment processing

### Infrastructure

- **Railway**: Application hosting
- **Convex Cloud**: Database and file storage
- **Google Cloud**: OAuth provider

## Key Differentiators

### Simplicity First

- No calendar features (not a co-parenting app)
- No messaging (avoids conflict)
- Just expenses, splits, and documentation
- Clean, focused interface

### Legal-Ready

- PDF exports formatted for court
- Receipt documentation included
- Clear audit trail
- Professional presentation

### Low Friction

- Co-parent doesn't need account
- Quick expense entry
- Sensible defaults
- Mobile-optimized

## Use Cases

### Divorce Proceedings

- Track all shared expenses during separation
- Generate reports for lawyers
- Document reimbursement agreements
- Maintain financial records

### Ongoing Co-Parenting

- School expenses
- Medical costs
- Extracurricular activities
- Clothing and supplies

### Mediation Support

- Neutral expense tracking
- Both parties have visibility
- Clear documentation
- Reduces conflict

## Development Highlights

### Clean Architecture

- Convex queries and mutations
- Server components with actions
- Type-safe data layer
- Organized route groups

### Security

- Authentication on all protected routes
- User data isolation
- Secure file uploads
- Webhook signature verification

### User Experience

- Dark mode support
- Responsive design
- Loading states
- Error handling

---

## Technical Excellence

CoSplit demonstrates proficiency in:

- **Modern Next.js Development**: App router, server components, actions
- **Real-Time Applications**: Convex for instant sync across devices
- **Authentication Systems**: Better Auth with multiple providers
- **Payment Integration**: Polar webhooks and subscription management
- **Product Focus**: Solving a specific problem without feature bloat

---

**Status**: Live in production
**Website**: [cosplitapp.com](https://cosplitapp.com)
**Revenue Model**: Freemium SaaS
