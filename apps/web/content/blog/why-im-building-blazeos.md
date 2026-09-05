---
title: 'Why I’m Building BlazeOS as a Clean-Contract System'
seoTitle: 'Why I’m Building BlazeOS as a Clean-Contract Platform'
seoDescription: 'How ListBlaze led to BlazeOS, a local-first photo-to-cash platform designed around contracts, inventory integrity, recoverable effects, and production evidence.'
date: '2026-07-18'
updated: '2026-09-04'
summary: 'BlazeOS takes the workflow evidence from ListBlaze and rebuilds the system around explicit ownership, local-first operation, immutable evidence, and recoverable marketplace effects.'
tags: [BlazeOS, software architecture, local-first, Rust, platform engineering]
heroImage: '/blog/why-im-building-blazeos/header-1200x630.webp'
heroAlt: 'A grounded pencil illustration of a resale operation moving from phone photography through inventory shelves to a desktop publishing workflow.'
infographic: 'blazeos-proof-chain'
---

ListBlaze started as a tool to help prepare and publish eBay listings. As I used and expanded it, the larger operating problem came into focus.

For a business selling mostly unique physical items, the real workflow does not begin at the listing form. It begins when an item is photographed and identified. It continues through research, description, pricing, storage, publication, orders, retrieval, packing, shipment, and reconciliation. Each transition can lose information or create a mismatch between the physical item, the local record, and the marketplace.

BlazeOS is my ongoing effort to design that whole path deliberately. It is a local-first photo-to-cash operating platform built around a Tauri desktop application, a native iPhone capture client, Rust cloud services, and separately authorized web surfaces.

The project is still under active development. It is not a finished product, a customer deployment, or evidence of commercial adoption. What it demonstrates today is the architecture work: requirements, bounded contexts, decision records, contracts, schemas, tests, security boundaries, quality gates, and implemented vertical slices that are checked against those decisions.

## Why I chose a clean-contract rebuild

ListBlaze contains valuable working behavior and direct lessons from the owner-local workflow. It also grew quickly while the problem was still being discovered.

I did not want BlazeOS to inherit every early implementation decision simply because code already existed. I treated ListBlaze as evidence about customer pain, task flow, failure modes, and measurable value. BlazeOS owns a new production boundary and selectively reuses only what meets that boundary.

“Clean contract” means the new system defines its own domain language, APIs, schemas, events, security rules, and quality expectations. Compatibility with the prototype is not the goal. Preserving the lessons is.

That decision costs more upfront than continuing to add features. It also prevents the new architecture from becoming a diagram wrapped around old assumptions.

<!-- infographic -->

## Photo truth comes before AI output

The original photographs are the strongest evidence of what the seller received and what the buyer may later receive. BlazeOS treats them as immutable source evidence.

Derived images can be resized, cropped, normalized, or prepared for a marketplace, but the system should preserve the original and the relationship between every derivative and its source. AI may evaluate image quality, suggest attributes, or help draft listing content. It may not silently invent, remove, or repair facts about the item.

This creates a useful chain of accountability:

1. The capture client establishes an item boundary and records original media.
2. Transfer preserves identity and verifies content hashes.
3. Research and AI create typed proposals connected to that evidence.
4. Deterministic validation checks required fields and business rules.
5. A person reviews the exact revision.
6. Publication uses an immutable snapshot of the approved intent.

The approach applies beyond resale. Inspection photos, field measurements, invoices, and maintenance records all become more useful to AI when the system preserves provenance and makes derived conclusions reviewable.

## Inventory must remain true under failure

Inventory is not just a number on a screen. It represents physical items, locations, reservations, movements, listings, sales, and exceptions that can occur concurrently.

BlazeOS models inventory changes as controlled operations rather than casual field updates. Counted stock cannot become negative. Reservations need stable identity. Physical movement and listing availability have related but distinct lifecycles. A provider’s observed state is evidence about that provider, not automatic authority over the local inventory model.

Important invariants belong in domain logic and durable database constraints. That gives the system more than one chance to reject an invalid transition. It also makes concurrency behavior testable instead of depending on a screen being used exactly as expected.

When a sync or publish request has an uncertain result, the system preserves that uncertainty. “Unknown” is different from “failed.” The safe next action may be to query the provider and reconcile before retrying.

## Local-first is an authority decision

The desktop and phone need to remain useful when a network is slow, unavailable, or changing state. That does not mean every device gets to declare global truth.

BlazeOS separates local authority from synchronized authority. Local SQLite and files own work that has not yet crossed a synchronization boundary. Shared PostgreSQL services own accepted shared state. Providers own their external resources. Commands and events carry stable identities so retries and replay do not create duplicate effects.

This makes offline behavior part of the product model. Pending, synchronized, conflicted, rejected, and reconciled are states the user and support process can understand.

For field-oriented enterprise systems, this is often more important than choosing a particular synchronization library. The key decision is which actor may change which fact at each point in the workflow.

## Architecture includes the delivery system

BlazeOS has multiple runtimes and languages: Rust and Tauri for desktop work, Swift and SwiftUI for iPhone capture, Rust and Axum for cloud services, PostgreSQL and SQLite for durable state, and Next.js for web surfaces.

That variety creates integration and operational risk. The repository therefore treats contracts and quality gates as part of the architecture. HTTP APIs require OpenAPI descriptions and consistent problem responses. Generated clients reduce drift. Database migrations, tests, security checks, accessibility, observability, restore behavior, software bills of materials, signed releases, and reproducible builds are release responsibilities rather than optional cleanup.

Not every requirement is complete. The project records validated, active, deferred, and out-of-scope work separately so a plan does not read like shipped capability.

## What I am trying to prove

The first business measure is practical: increase the number of accepted, publish-ready unique items produced per active labor hour without weakening photo truth, inventory integrity, marketplace safety, or recoverability.

That measure prevents architecture from becoming an end in itself. A more sophisticated system that does not improve the workflow is not an improvement.

At the same time, speed cannot come from hiding exceptions. The system needs to show whether an item is blocked by missing evidence, invalid marketplace data, uncertain provider state, or an inventory conflict. Faster work and stronger control should reinforce each other.

BlazeOS is where I am applying lessons from WellOS, OpenClaw VPS, and ListBlaze in one disciplined build. WellOS taught me to control scope. OpenClaw VPS taught me to design provider reconciliation and operations as product features. ListBlaze taught me to preserve evidence and keep AI subordinate to human approval. BlazeOS turns those lessons into explicit contracts and tests.

## Sources and related reading

- [Building ListBlaze Around Evidence and Human Approval](/blog/building-listblaze-around-human-approval)
- [Offline-First Software Is a Business Decision](/blog/offline-first-software-for-field-operations)
- [Production Readiness Is an Architecture Discipline](/blog/production-readiness-is-an-architecture-discipline)
- [OpenAPI Specification 3.1](https://spec.openapis.org/oas/v3.1.1.html)
