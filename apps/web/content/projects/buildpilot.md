---
subtitle: 'AI SaaS • App Builder'
accentColor: 'red'
techStack:
  - 'Next.js'
  - 'FastAPI'
  - 'Python'
  - 'Anthropic Claude'
  - 'Supabase'
  - 'Inngest'
  - 'E2B'
liveUrl: 'https://trybuildpilot.dev'
---

# BuildPilot

## Overview

**BuildPilot** is an AI-powered, full-stack web application platform that automates the entire software development process. Using autonomous AI agents, it transforms simple project descriptions into complete, production-ready codebases in minutes instead of weeks.

**Status**: Coming Soon

## The Vision

BuildPilot is built on a simple three-step workflow:

1. **Describe** - User describes what they want to build in natural language
2. **Architect** - AI designs the complete system architecture, tech stack, database schema, and breaks it into features
3. **Build** - AI agents implement features sequentially with real-time progress tracking and user approval at each stage

Users download the completed project as a ZIP file with full ownership of their code.

## Problem Solved

BuildPilot addresses critical pain points in software development:

- **Speed Gap**: Traditional development takes weeks/months; BuildPilot generates functional features in minutes
- **Skill Barrier**: Non-technical founders can build their ideas without hiring expensive developers
- **Cost Reduction**: Dramatically reduces initial development costs through AI automation
- **Iteration Speed**: Rapidly prototype ideas before committing to full development
- **Architecture Design**: AI handles complex upfront architectural planning

## Project Scale

- **Platform**: Web application with Python API backend
- **Tech Stack**: Next.js + FastAPI + Supabase + Inngest
- **AI**: Anthropic Claude (Sonnet & Opus models)
- **Architecture**: Multi-tenant SaaS with BYOK (Bring Your Own Key)

## Core Features

### AI Architecture Phase

- Complete system design from natural language prompts
- Tech stack recommendations with reasoning
- Database schema generation (SQL DDL)
- Feature breakdown with prioritized acceptance criteria
- User approval before building starts

### AI Builder Phase

- Sequential feature implementation
- Developer AI agent writes code
- Testing AI agent validates implementation
- User approval gates between features
- Support for retries, feedback, and manual overrides

### Real-Time Kanban Board

- 5-column workflow: TODO → IN_PROGRESS → TESTING → APPROVE → DONE
- Drag-and-drop feature cards
- Live progress updates via WebSocket
- Agent thought streaming (see what AI is thinking)
- Feature detail modals with comments and test results

### GitHub Integration

- Automatic repository creation per project
- Branch-per-feature workflow
- Automatic PR creation when features ready
- Webhook support for CI status updates
- PR merge triggers feature completion

### E2B Sandbox Testing

- Run tests in isolated Firecracker microVMs
- Auto-detect test commands from project files
- Safe execution of AI-generated code
- ~150ms startup time

### BYOK Architecture

- Users provide their own API keys (OpenRouter or Anthropic)
- Platform doesn't pay for AI costs
- Per-task model selection (Opus for planning, Sonnet for coding)
- Full cost control and transparency

## Technical Architecture

### Frontend

- **Framework**: Next.js 14 with App Router + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **State**: React hooks + Zustand
- **Real-time**: WebSocket with polling fallback
- **Code Display**: Syntax highlighting for generated code

### Backend

- **Runtime**: FastAPI (Python 3.11+) with async/await
- **Database**: PostgreSQL via Supabase
- **Real-time**: Supabase Realtime subscriptions
- **Orchestration**: Inngest durable workflow engine
- **Caching**: Redis
- **Storage**: Cloudflare R2 (S3-compatible)
- **Code Execution**: E2B sandboxes

### External Services

- **AI**: Anthropic Claude API
- **Version Control**: GitHub API
- **Payments**: Stripe
- **Email**: Resend

### Hosting

- Frontend: Vercel
- Backend API: Railway
- Database: Supabase Cloud
- Orchestration: Inngest Cloud

## Architecture Highlights

### Sequential Queue Model

Rather than building features in parallel (which causes git conflicts), features process one at a time through a queue. Clean, predictable, conflict-free.

### Inngest Orchestration

Durable, step-based workflow execution. If the API crashes, Inngest resumes the build from where it left off.

### Supabase RLS

Row-level security ensures users can only access their own projects at the database level.

### Multi-tenant Isolation

Each project gets its own GitHub repository, E2B sandbox sessions, and isolated file storage.

## Agent System

### Developer Agent

- Writes clean, complete code
- Follows best practices and conventions
- Handles file creation and modification
- Documents code appropriately

### Testing Agent

- Reviews code quality
- Validates acceptance criteria
- Runs automated tests in sandbox
- Provides feedback for improvements

### Automatic Retry Logic

- Up to 3 retries before human intervention
- Agent feedback preserved between attempts
- Learning from previous failures

## Credit System

- Users start with free credits
- Pay-as-you-go pricing based on token usage
- Stripe integration for purchases
- Full transaction history tracking

## Technical Excellence

BuildPilot demonstrates mastery of:

- **Modern Python Development**: FastAPI, async/await, Pydantic
- **Next.js 14**: App router, server components, real-time updates
- **AI Engineering**: Claude API, prompt engineering, agent orchestration
- **Real-Time Systems**: WebSockets, Supabase Realtime, live updates
- **Workflow Orchestration**: Inngest durable functions, step-based execution
- **Secure Code Execution**: E2B sandboxes, isolated environments
- **Multi-Tenant SaaS**: Data isolation, subscription management, BYOK
- **GitHub Integration**: API automation, webhooks, PR workflows
- **DevOps**: Vercel, Railway, Supabase, infrastructure as code

---

**Status**: Coming Soon
**Repository**: Private (Strataga)
