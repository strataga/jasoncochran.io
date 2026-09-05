---
title: 'Integration Architecture After Acquisitions'
seoTitle: 'Integration Architecture for Acquired Enterprise Systems'
seoDescription: 'A practical approach to integrating acquired systems through ownership, contracts, identity, messaging, reconciliation, and staged modernization.'
date: '2026-03-11'
updated: '2026-09-04'
summary: 'Connecting acquired systems is easy to draw and hard to operate. The work begins with meaning, authority, identity, and a migration path.'
tags: [enterprise integration, acquisitions, Azure, APIs, data governance]
heroImage: '/blog/integration-architecture-after-acquisitions/header-1200x630.webp'
heroAlt: 'Three colleagues work around a table covered with separate system diagrams and a shared governed integration map.'
infographic: 'integration-control-plane'
---

An acquisition creates a business combination before it creates a systems combination.

The new organization may inherit multiple ERPs, identity directories, data warehouses, field applications, vendor portals, integration tools, and definitions for the same business concept. Drawing lines between them is easy. Deciding which meaning, authority, and operating model should survive is the real architecture work.

I approach that work as a sequence of controlled decisions rather than a demand to consolidate everything at once.

## Inventory decisions, not only applications

An application inventory tells you what exists. A decision inventory explains why it matters.

For each important workflow, identify who makes the decision, which facts they use, where those facts originate, which system records the outcome, and which other teams depend on it. Then map applications to that flow.

This exposes differences a system list hides. Two applications may both contain “well,” “vendor,” or “cost center,” yet use different identifiers, timing, ownership, or approval rules. Copying both into a lake does not reconcile the meaning.

The first useful artifact is a concept and ownership map: business term, authoritative source, steward, consumers, quality expectation, and unresolved conflicts.

## Establish a control plane for integration

Point-to-point connections feel fast until every change requires coordinated edits in several places. A shared integration approach should standardize cross-cutting controls without forcing every workflow into the same transport.

<!-- infographic -->

The reusable controls usually include identity, authorization, contract versioning, routing, schema validation, secrets, rate limits, correlation, failure handling, and audit. The delivery mechanism still follows the business semantics.

- Use synchronous APIs when the caller needs a timely response.
- Use queues when work must survive a temporary dependency outage.
- Publish events after a durable fact occurs and multiple consumers may react.
- Use streams for high-volume observations and independent analysis.
- Use batch when freshness requirements and source constraints justify it.

Azure Integration Services combines API Management, Logic Apps, Service Bus, Event Grid, Functions, and Data Factory. The value is not using all of them. It is choosing a small, governed path for each integration.

## Put identity before connectivity

“The networks can talk” is not an authorization model.

Each user, workload, device, and pipeline should have a named identity with the minimum permissions needed. Prefer short-lived identity-based access over shared credentials. Keep development and production identities separate. Record both the requesting user and the workload that performed a sensitive action.

NIST’s Zero Trust guidance rejects implicit trust based only on network location. That matters after an acquisition because inherited network reach can be broader and less understood than the application permissions the new organization intends.

## Version contracts around meaning

An API contract is more than JSON shape. It includes units, time semantics, null behavior, identifiers, authorization, error meaning, idempotency, and compatibility expectations.

Create a canonical enterprise model only where the organization truly has a canonical meaning. Otherwise, translate explicitly at the boundary and preserve source context. A universal model that hides legitimate differences becomes a new source of ambiguity.

Contract tests can verify that producers and consumers still agree. Schema registries can help with events and streams. Neither replaces business ownership of the meaning.

## Design duplicate, delay, and reordering behavior

Distributed systems deliver uncertainty. A timeout does not prove failure. A message can arrive twice. Events can arrive late or out of order. A consumer can fall behind while the producer remains healthy.

For each integration, define the durable business identifier, whether repeated work is safe, required ordering, maximum tolerable delay, retry and dead-letter behavior, reconciliation procedures, and the source that wins when systems disagree.

Microsoft’s retry guidance warns that stacked retries can amplify failure. Place retry responsibility at the layer with enough context to decide whether an operation is transient, safe to repeat, or should stop.

## Make migration a first-class deliverable

The target architecture is incomplete without a route from today’s systems.

A responsible migration names the seam where behavior changes, the period of coexistence, comparison approach, cutover criteria, recovery, and retirement conditions. The team may use an API facade, event replication, a strangler pattern, or dual-running period. The pattern matters less than the evidence required to move forward.

Avoid indefinite dual writes. They create two possible sources of truth and difficult failure cases. If temporary dual operation is necessary, identify one authority and reconcile every divergence.

## Create an integration scorecard

Measure the business handoff, not only the middleware: successful outcomes, age of queued work, duplicates prevented, contract-version adoption, reconciliation exceptions, diagnosis time, and shared credentials or unowned connections remaining.

These measures help prioritize modernization. The highest-value next change may be clarifying ownership or eliminating an unaudited credential—not replacing a platform.

## Ten review questions

1. Which workflow and decision does this connection support?
2. What system owns every important fact and outcome?
3. Which identities cross the boundary, with what permissions?
4. What do the contract fields mean, including units and time?
5. How are duplicate, delayed, and out-of-order operations handled?
6. What happens while one system is unavailable?
7. How can support trace one business transaction end to end?
8. What is the migration, recovery, and retirement path?
9. Who owns the connection after the project team leaves?
10. What measurable result justifies its complexity?

Acquisition integration is not a race to create one giant system. It is a disciplined effort to create shared meaning, explicit authority, and reliable movement while the business continues to operate.

## Sources and further reading

- [Basic enterprise integration on Azure](https://learn.microsoft.com/en-us/azure/architecture/reference-architectures/enterprise-integration/basic-enterprise-integration)
- [Use messages and events to integrate enterprise systems](https://learn.microsoft.com/en-us/azure/architecture/example-scenario/integration/queues-events)
- [NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final)
- [Azure Architecture Center: Retry pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/retry)
