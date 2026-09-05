---
title: 'Why I Started Building WellOS'
seoTitle: 'Why I Started WellOS, an Oil and Gas Software Project'
seoDescription: 'The origin and architecture of WellOS, a personal project exploring field operations, SCADA data, multi-tenant software, and cloud delivery for upstream oil and gas.'
date: '2025-12-17'
updated: '2026-09-04'
summary: 'WellOS began as a practical question: could field work, operational data, and business workflows feel connected without erasing the boundaries that make them trustworthy?'
tags: [WellOS, oil and gas, product architecture, field operations, cloud software]
heroImage: '/blog/why-i-started-building-wellos/header-1200x630.webp'
heroAlt: 'Jason Cochran sketches an early WellOS workflow beside an operations dashboard in his home office.'
infographic: 'wellos-platform-map'
---

In November 2025, I earned Microsoft Certified: Azure Fundamentals and Microsoft Certified: Azure AI Fundamentals. I pursued both certifications for a practical reason: I wanted to help local oil and gas companies modernize their software and make responsible use of the cloud, AI, and the newer capabilities available in Azure.

That learning led directly to WellOS.

I started the personal project around a problem I understood from years of oil and gas software work: field operations, production information, equipment data, work management, and business systems often belong to the same real-world workflow but feel disconnected to the people doing the work.

The project asked a broad question: what would an operating platform for an upstream company look like if it began with those workflows instead of beginning with the boundaries of existing products?

I was especially interested in smaller and midsize oil and gas companies. Large operators can buy and implement expensive enterprise platforms. Smaller organizations still need reliable field, production, maintenance, accounting, and compliance workflows, but the cost and complexity of the established systems can put an integrated operating platform out of reach.

WellOS was intentionally ambitious. I wanted to explore whether a modern platform could serve that market at a more accessible cost. I also wanted to follow the full path from a field activity or SCADA observation to a secure application, a durable business record, a useful operational view, and a supportable cloud workload. The project became a way to deepen my work with Rust, modern React and Next.js, PostgreSQL, Azure-oriented infrastructure, protocol integration, and automated delivery.

It was a private engineering project, not a customer deployment. Some repository documents describe the larger product vision, while the code implements meaningful parts of that vision. Keeping those two categories separate is important to understanding what WellOS was and what I learned from it.

## The problem was fragmentation, not a lack of screens

Oilfield teams do not need another dashboard merely because data exists.

They need to complete work, understand what is happening, respond to exceptions, and trust the information in front of them. The difficulty is that the relevant context may live in several places: a field application, SCADA or a historian, production records, maintenance systems, an ERP, email, a spreadsheet, or someone’s experience.

The product idea was to create a connected operating experience around that work. That did not mean WellOS should replace every authoritative system. It meant the user should not have to reconstruct one decision by manually navigating five products and reconciling their differences.

That distinction shaped the architecture. The central challenge was not “How do I put all the data in one database?” It was “How do I connect the workflow while preserving the meaning, ownership, security, and failure behavior of each source?”

## Who I was designing for

The intended customer was a small or midsize operator or oilfield service company that needed better operational software but could not justify the cost and implementation burden of the largest platforms.

Inside that company, I pictured several users whose needs overlap but are not identical:

- a field employee recording production or maintenance context with unreliable connectivity;
- an operations leader reviewing wells, exceptions, trends, and work status;
- an administrator managing users, tenants, permissions, and support activity;
- an engineer connecting operational telemetry and enterprise systems;
- a finance or revenue user working with records that need stronger audit and correction rules;
- a support person trying to understand why a workflow did not complete.

A single generic dashboard would not serve all of them well. The shared platform needed role-aware experiences and a common set of identifiers, contracts, and operational evidence.

## The four-part product model

The original vision came into focus as four connected areas: field work, operational decisions, system integration, and platform responsibility.

<!-- infographic -->

The user experience could feel connected while the system enforced important differences:

- SCADA telemetry is an observation stream, not automatically a business transaction.
- A production entry is a durable business record with units, dates, source, and correction behavior.
- A work-order transition is an authorized action with workflow rules.
- A tenant is a security and data boundary, not a filter on a screen.
- An AI recommendation is advisory unless a separate policy grants it narrow authority.

Those distinctions became more valuable than any specific technology choice.

## What I set out to build

The WellOS repository grew into a monorepo centered on several technical areas.

The Rust API used Axum and PostgreSQL-backed repositories for domains including tenants, wells, production, work orders, revenue, joint-interest billing, authentication, and SCADA configuration. The application included tenant-aware request handling, role and tier concepts, audit and security middleware, session and token services, and health endpoints.

The Next.js portals explored operator and platform-administration workflows. The infrastructure area included Docker assets, Terraform modules and environment definitions, Ansible playbooks, Kubernetes manifests, monitoring configuration, database setup, and local protocol simulators. Tests covered domain, middleware, handler, UI, and end-to-end behavior in different parts of the project.

The repository also contains planned capabilities that were not finished or production-proven. That is normal in a project of this size, but it reinforces the need to label roadmap, prototype, implemented behavior, and verified production evidence separately.

## Why Rust made sense for the experiment

I chose Rust for the service layer because I wanted to work directly with a language that makes ownership, concurrency, and failure handling explicit.

Oilfield telemetry and multi-tenant APIs can involve long-running services, many concurrent connections, background work, and careful resource management. Rust offered a useful environment for exploring those concerns. Axum and Tokio made it possible to build asynchronous HTTP and WebSocket paths while the type system pushed error and state decisions into the code.

Rust did not make the architecture good automatically. It introduced its own learning curve, build considerations, and ecosystem choices. That was part of the point. The project gave me a reason to learn the language in a domain where its strengths and costs could be evaluated against real responsibilities.

## Why SCADA was part of the vision

An oilfield operating platform that ignores operational telemetry misses valuable context. One that treats SCADA like an ordinary web API ignores risk.

WellOS explored OPC UA, Modbus TCP, and MQTT paths, connection configuration, health state, ingestion, storage, live updates, and simulators for development. The goal was to learn how an application could consume operational observations without pretending to be the control system.

That required questions about network direction, workload and device identity, certificates, topic or node permissions, buffering, duplicate data, source timestamps, stale readings, and the distinction between recommendation and control.

The project strengthened a boundary I now state plainly: moving operational data into a cloud application does not grant that application operational authority.

## Why multi-tenancy was more than a SaaS feature

WellOS was designed as a multi-tenant platform, and the code explored tenant provisioning and tenant-aware data access. I considered stronger isolation patterns, including separate databases, because oil and gas customers may have different security, scale, contractual, and integration requirements.

The exercise showed how far tenant isolation has to travel. It affects user identity, database connections, caches, background jobs, WebSockets, telemetry, exports, observability, support access, infrastructure, and incident response.

Adding `tenant_id` to tables can be useful, but it does not solve that whole problem. The tenant boundary needs defense in depth and tests that attempt to cross it.

## Why infrastructure belonged in the repository

I did not want WellOS to end at application code. The project included infrastructure and deployment assets because a system’s operating model is part of its architecture.

Terraform modules made cloud resources, network choices, monitoring, and tenant provisioning concrete. Container and orchestration assets exposed service dependencies and health behavior. Protocol simulators made integration testing possible without connecting to real operational equipment.

Every infrastructure component also created a cost and support obligation. That was instructive. It is easy to add a service to a diagram; it is harder to justify who patches it, monitors it, secures it, pays for it, and recovers it.

## What the first real product should have been

The complete WellOS vision was too large for a first market test. A better first release would isolate one expensive workflow and prove it end to end with a design partner.

For example, the product could begin with a read-only operational exception workflow:

1. Collect an approved subset of observations through a brokered edge path.
2. Normalize equipment identity, timestamps, units, and quality.
3. Detect a bounded class of exceptions with deterministic rules.
4. Show the evidence to an authorized user.
5. Let the user acknowledge, assign, or dismiss the exception.
6. Record the decision and downstream handoff.
7. Measure time to awareness, time to action, false positives, and unresolved exceptions.

That slice would test the difficult foundations—identity, operational boundaries, data meaning, support, and measurable value—without claiming to replace an operator’s entire software landscape.

## Why I kept working on it

WellOS gave me a place to combine long-standing experience with new learning. I could revisit oilfield workflows I knew, test them against current cloud and security guidance, and implement them in tools I wanted to understand more deeply.

That combination is how I prefer to learn. Reading and certification study create vocabulary and structure. Building creates friction. The friction reveals where an abstraction is weak, a responsibility is misplaced, a test is missing, or an operating assumption is unrealistic.

The project also reminded me that architecture is a form of editing. The first vision can be broad. The responsible design becomes clearer by removing capabilities, narrowing authority, and delaying complexity until evidence earns it.

By January 2026, I had also learned something important about the business. Getting a product like WellOS off the ground would require much more than funding application development. Oil and gas operating systems are complicated because every customer brings its own processes, equipment, data history, regulatory obligations, integrations, and support expectations. A serious company would need capital for domain validation, implementation, security, sales, customer onboarding, data migration, field support, and a long trust-building cycle.

I decided to stop the product effort rather than pretend the remaining challenge was simply more code. That decision did not reduce the value of the work. It clarified where the real cost and risk lived.

## What WellOS was really about

At the product level, WellOS was about making oilfield work and information feel connected.

At the engineering level, it was about boundaries: field and office, OT and IT, tenant and platform, telemetry and transactions, product code and infrastructure, implemented behavior and future vision.

At the personal level, it was a way to keep learning by building a difficult system in a domain where I could evaluate whether the technology served the work.

That is still the standard I would use for the next version of the idea: begin with one valuable workflow, preserve the boundaries that make it trustworthy, and earn the right to expand.

## Sources and related reading

- [What Building WellOS Taught Me About Oilfield Software](/blog/what-building-wellos-taught-me)
- [Architecture Starts With the Field Workflow](/blog/architecture-starts-with-the-field-workflow)
- [NIST SP 800-82 Rev. 3: Guide to Operational Technology Security](https://csrc.nist.gov/pubs/sp/800/82/r3/final)
- [Azure Well-Architected Framework](https://learn.microsoft.com/en-us/azure/well-architected/)
