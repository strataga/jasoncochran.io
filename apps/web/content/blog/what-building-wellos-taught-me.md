---
title: 'What Building WellOS Taught Me About Oilfield Software'
seoTitle: 'WellOS: Lessons From Building an Oilfield Software Platform'
seoDescription: 'A candid retrospective on WellOS, a personal oil and gas software project spanning Rust, Next.js, PostgreSQL, SCADA, tenant isolation, and Azure infrastructure.'
date: '2026-01-28'
updated: '2026-09-04'
summary: 'WellOS was an ambitious personal project that let me explore oilfield workflows as one connected platform—and learn where architecture must control scope.'
tags: [WellOS, oil and gas, solution architecture, Rust, SCADA]
heroImage: '/blog/what-building-wellos-taught-me/header-1200x630.webp'
heroAlt: 'A realistic software engineering workspace showing an oilfield operations dashboard, service architecture notes, and SCADA telemetry under review.'
infographic: 'wellos-learning-loop'
---

WellOS began after I earned Azure Fundamentals and Azure AI Fundamentals in November 2025. I wanted to use that learning, together with my oil and gas software background, to help local companies modernize and take practical advantage of cloud and AI.

The product idea centered on a large question: what would a modern operating platform for an upstream oil and gas company look like if field workflows, production data, SCADA, business operations, and cloud delivery were designed together?

I was targeting smaller and midsize oil and gas companies that could not afford the large, expensive systems commonly used to run operations. I worked on the project through January 2026. It was a personal engineering project, not a production customer deployment. That distinction matters. I do not use WellOS as proof that a company adopted the product or that every idea in its documentation reached production. I use it as evidence of how I explore a difficult domain, turn broad requirements into software boundaries, and learn by building.

The repository became substantial: Rust services, Next.js operator and administration portals, PostgreSQL data models, tenant provisioning, authentication, work orders, wells, production and revenue capabilities, SCADA handlers, protocol simulators, automated tests, containers, Terraform, Ansible, Kubernetes definitions, and operational documentation.

It also became a lesson in scope. Trying to model an operating company end to end forces architecture decisions into the open. That was the most valuable part.

## The original idea

Oilfield work rarely fits inside one clean application boundary. Production information, equipment, work orders, accounting, field observations, telemetry, vendors, and users cross systems and organizational responsibilities.

My initial WellOS vision brought many of those concerns into one platform. The ambition was useful because it exposed the full shape of the problem. It was also dangerous because each capability could become a product of its own.

The first architecture lesson was therefore about product boundaries: a unified experience does not require one system to own every capability.

A platform can give users a connected workflow while preserving authoritative systems behind explicit contracts. It can present production context without becoming the production-accounting authority. It can display SCADA data without becoming a control system. It can coordinate work without duplicating every function of an ERP.

That separation is more important than the number of services in the diagram.

## Why I chose to build a vertical slice

Architecture becomes more honest when implementation has a chance to disagree with it.

Instead of keeping WellOS as a collection of documents, I built across the stack. The API used Rust and Axum. The web surfaces used Next.js and React. PostgreSQL held transactional data. The project included multi-tenant data access, authentication and role-aware middleware, domain modules, SCADA ingestion paths, WebSocket delivery, infrastructure definitions, and tests.

That work exposed questions a high-level diagram could hide:

- Where should tenant selection occur, and how is it enforced for every request?
- Which business rules belong in domain code instead of handlers or screens?
- How should telemetry differ from transactional data?
- What does a connection health state mean to a user and to support?
- Which operations must be idempotent?
- How much infrastructure can one small team reasonably operate?
- Which planned features are valuable enough to justify another service boundary?

Building did not automatically produce the right answers. It produced better evidence for the next decision.

<!-- infographic -->

## Tenant isolation is an architecture, not a tenant ID

WellOS explored a database-per-tenant direction with a separate control-plane responsibility for provisioning and platform administration. The repository includes tenant services, tenant-aware middleware, provisioning logic, database migrations, and infrastructure modules.

That forced me to consider isolation across more than storage. A tenant boundary must also reach authentication, authorization, connection pooling, background work, caches, telemetry, exports, support tooling, and deployment procedures.

If a request carries the right tenant ID but a worker can read the wrong queue, the boundary is incomplete. If support can query every tenant without a separately governed role, the boundary is incomplete. If logs mix sensitive identifiers without access controls, the boundary is incomplete.

The project reinforced a principle I now apply broadly: important boundaries should be enforced in several places, and the most consequential failure should not depend on one application check.

## SCADA data belongs behind a deliberate boundary

The WellOS codebase includes work around OPC UA, Modbus TCP, and MQTT, along with SCADA connection configuration, ingestion handlers, protocol simulators, time-series data paths, health information, and live updates.

That work made the difference between observing and controlling operational technology impossible to ignore.

A business application may consume telemetry, show trends, and help someone investigate an exception. That does not mean it should have unrestricted authority to send commands into an operational environment. The connection direction, identity, allowed topics or nodes, buffering, data freshness, and failure behavior all belong in the architecture.

The project’s SCADA work was an engineering exploration, not a claim that WellOS operated a live production field system. The useful lesson was how quickly a seemingly simple “connect the dashboard” requirement expands into identity, certificates, network segmentation, protocol behavior, time semantics, support, and physical consequence.

That lesson is why I treat an OT-to-cloud path as a trust boundary first and a data pipeline second.

## Transactional data and telemetry need different designs

Wells, work orders, production entries, revenue records, and user permissions represent business state. SCADA observations represent a continuing flow of measurements. They have different query shapes, retention needs, volume, ordering, and correction behavior.

The project explored PostgreSQL-backed domain data alongside time-oriented SCADA storage and real-time delivery. That made one architecture smell particularly obvious: forcing every kind of data through one generic repository or API because the storage engine can technically hold it.

The right question is what the data means and how it is used.

- A work-order transition needs authorization and an auditable business rule.
- A production entry needs a clear effective date, source, unit, and correction path.
- A telemetry point needs source time, ingestion time, equipment identity, quality, and retention behavior.
- A live dashboard needs bounded latency and an honest stale-data state.

The database is an implementation choice. Those semantics are the architecture.

## Infrastructure as code exposed the operating cost

WellOS contains Terraform modules and environments, Ansible playbooks, container definitions, Kubernetes resources, monitoring artifacts, and deployment documentation. Creating those assets was useful because infrastructure stopped being a cloud box on a slide.

Every resource created a responsibility: secrets, patching, backups, identity, network policy, deployment, cost, alerts, capacity, and recovery. A sophisticated platform can become operationally irresponsible if the team needed to support it is not equally sophisticated.

This changed how I think about “cloud native.” I care less about whether a design uses the maximum number of managed or orchestrated services. I care whether the chosen platform gives the team a reliable, secure, and understandable path to operate the workload.

For a first release, a smaller set of managed services with clear ownership may be more cloud-native in practice than a broad platform nobody can support confidently.

## Security could not remain a final checklist

The repository includes authentication flows, session and token services, two-factor authentication work, tenant-aware authorization, security middleware, audit concepts, encryption support, SSO exploration, and infrastructure controls.

Working across those areas reinforced how security decisions connect. Identity affects tenant isolation. Tenant isolation affects database and cache design. API authorization affects support tooling. Infrastructure identities affect deployment. SCADA credentials affect operational boundaries.

Security review is more effective when it follows the workflow end to end:

1. Who initiates the action?
2. How is that identity established?
3. Which tenant, role, and resource are in scope?
4. Which service performs the work?
5. Which credentials does it use downstream?
6. What durable state changes?
7. What audit evidence remains?
8. How is access revoked and the action recovered?

That flow is easier to reason about than a list of disconnected controls.

## The project was too broad—and that was instructive

WellOS attempted to cover a great deal: operations, telemetry, revenue, administration, tenant provisioning, infrastructure, and more. Some repository documentation described planned capabilities and aggressive targets that the implementation did not fully prove.

That is one of the project’s clearest lessons. Documentation must distinguish implemented behavior, verified evidence, active work, and future intent. Otherwise a roadmap can begin to read like a release note.

The market problem was broader than product scope. Oil and gas systems must fit existing operations, accounting, production, SCADA, regulatory, security, and field-support realities. Serving smaller companies at an affordable price would still require significant capital for customer discovery, implementation, integrations, data migration, security assurance, sales, onboarding, and ongoing support.

In January, I stopped the WellOS product effort because I no longer believed one person could responsibly take the full platform to market without substantial funding. Continuing to add features would not solve that business constraint.

If I restarted the product effort, I would narrow the first release to one field-to-office workflow with a measurable outcome. I would preserve the architecture boundaries needed for growth, but delay services and features until a real workflow earned them.

For example, a bounded slice might connect approved operational observations to a governed exception-review workflow. The first version would prove identity, data meaning, buffering, audit, user value, support, and recovery. Only after those foundations worked would I expand the platform.

That is not a rejection of the need. It is a more realistic understanding of what a credible solution would require.

## What I would keep

Several WellOS principles remain central to how I approach architecture:

- begin with the oilfield workflow and the person responsible for the decision;
- separate control-plane, tenant, transactional, telemetry, and user-interface concerns;
- enforce important boundaries in code, data, identity, and operations;
- treat offline, delayed, failed, and recovered as visible product states;
- define infrastructure and delivery as part of the system;
- use tests and implementation feedback to challenge the design;
- document what is implemented separately from what is planned;
- choose the smallest responsible first production slice.

## Why WellOS was worth building

Personal projects let me explore across boundaries that a normal feature assignment may keep separate. With WellOS, I could move from an oilfield workflow to a Rust handler, a tenant data rule, a SCADA simulator, a Next.js screen, a Terraform module, or a test and ask whether the system still told one coherent story.

Not every idea deserved to survive. That was part of the value.

The project deepened my understanding of oil and gas software, Rust services, cloud infrastructure, multi-tenant architecture, and operational integration. More importantly, it reinforced an approach I trust: make the business boundary explicit, build enough to expose weak assumptions, and let the evidence improve the architecture.

## Sources and related reading

- [Architecture Starts With the Field Workflow](/blog/architecture-starts-with-the-field-workflow)
- [SCADA to Cloud Without Moving the Control Boundary](/blog/scada-to-cloud-without-moving-control)
- [NIST SP 800-82 Rev. 3: Guide to Operational Technology Security](https://csrc.nist.gov/pubs/sp/800/82/r3/final)
- [Azure Well-Architected Framework](https://learn.microsoft.com/en-us/azure/well-architected/)
