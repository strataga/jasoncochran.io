---
title: 'Building ListBlaze Around Evidence and Human Approval'
seoTitle: 'ListBlaze: AI-Assisted Listings With Human Approval'
seoDescription: 'How I designed ListBlaze to turn product photos into reviewed marketplace listings while keeping evidence, inventory, approval, and external effects separate.'
date: '2026-05-21'
updated: '2026-09-04'
summary: 'ListBlaze used AI to accelerate marketplace listing preparation, but the deeper design centered on source evidence, explicit approval, durable state, and safe recovery.'
tags: [ListBlaze, AI-assisted development, Tauri, Rust, eBay]
heroImage: '/blog/building-listblaze-around-human-approval/header-1200x630.webp'
heroAlt: 'A realistic pencil illustration of a reseller reviewing product photos and structured listing fields in a desktop application before publishing.'
infographic: 'listblaze-workflow'
---

ListBlaze began in May 2026 with a problem I could see in the daily work of an online resale business: listing mostly unique items was taking too much time, and the information needed to publish each item was scattered across photos, notes, marketplace categories, shipping details, policies, and inventory records.

The obvious AI demo would have been “drop in a photo and publish a listing.” I did not trust that design.

A photograph can support an observation, but it cannot prove every fact a marketplace requires. A model can draft a title or suggest a category, but it can misread a label, invent a feature, overlook damage, or express uncertainty as confidence. A marketplace call can also succeed after the local request times out. Retrying blindly can create duplicate or contradictory state.

I built ListBlaze as an owner-local macOS desktop application because the workflow needed to stay close to the files, browser sessions, inventory, and operator who already owned the work. The application used Tauri, Rust, React, TypeScript, and SQLite. It integrated product images, Google Drive, eBay services, structured AI review, inventory tools, exports, and supervised destination workflows.

The technology mattered. The more important decision was the authority model: AI could propose; the operator reviewed and approved; deterministic code validated; only an explicit action could authorize publication.

## Start with evidence, not generated copy

An item listing should be traceable back to what the operator actually knows.

ListBlaze imported item photos and kept them connected to the job being prepared. The workflow let the operator review those images alongside structured listing fields. AI analysis could suggest details, but those details remained proposals rather than automatically becoming product truth.

That distinction influenced the user interface and the data model. A suggested field needs a visible place to be reviewed. A warning needs to remain visible until resolved. A changed image set can invalidate an earlier suggestion. The exact set of values approved for publication should be bound together so a later background operation does not silently publish a different revision.

This is broadly applicable to enterprise AI. When a model reads an inspection photo, invoice, production note, or procedure, the source is evidence. The model output is an interpretation. The application should preserve enough lineage for a person to understand and correct the interpretation before it affects an authoritative system.

<!-- infographic -->

## Human approval must be a real control

Adding an “Approve” button does not automatically create meaningful human oversight.

The reviewer needs the source material, the proposed change, validation results, important uncertainty, and a clear explanation of what the next action will do. Approval should be bound to the reviewed revision. If the underlying photos or critical fields change, the previous approval should not silently carry forward.

ListBlaze evolved toward that model through guided workflow gates, structured review fields, marketplace-backed choices, required information, issue queues, and an explicit final review. The point was not to slow the operator down. It was to focus human attention where judgment mattered and automate the mechanical work around it.

That design is especially important when AI touches regulated, financial, safety-related, or public data. A reviewer who cannot see the basis of a recommendation is being asked to absorb risk rather than exercise judgment.

## Inventory truth is a separate responsibility

Creating a listing is not the same as proving that an item exists, is available, has a known location, or has not already sold elsewhere.

ListBlaze grew from a listing preparation tool into an inventory workflow with a ledger, storage information, labels, cycle counts, scans, saved views, reports, sales closeout, provider status synchronization, and exception handling. That breadth exposed an important boundary: listing content and inventory state influence each other, but they are not the same aggregate.

A polished title cannot correct an inventory discrepancy. A provider showing a live listing does not prove the physical item is in its expected bin. A sold order does not complete the local workflow until the item is located, packed, and its state reconciled.

Treating those transitions explicitly made recovery work visible. If a sync failed, the system needed to distinguish a transport problem from a business conflict. If the provider outcome was unknown, the next step was investigation or reconciliation—not an automatic duplicate request.

## External effects need durable intent

Marketplace integrations are distributed systems, even when they begin with one desktop and one seller account.

Requests cross OAuth, APIs, file uploads, signed-in browser sessions, and provider-owned workflows. The local application does not control the network or the provider’s transaction boundary. That means a good design needs stable identities, immutable request snapshots, idempotency where available, recorded attempts, provider references, and a way to reconcile what actually happened.

ListBlaze’s later work concentrated heavily on those failure states. Publication and export flows were hardened so the application could preserve the exact source bytes or listing snapshot used for an effect. Post-create AI cleanup work gained durable states that separated retryable failure from ambiguous paid work. Provider and inventory refreshes were serialized to avoid overlapping snapshots.

Those details are not visible in a feature demo, but they determine whether a tool remains trustworthy after the first network interruption.

## AI-assisted engineering still requires ownership

I also used AI tools while building ListBlaze. They helped explore code, draft changes, generate tests, review diffs, and accelerate repetitive work. I did not treat generated code as inherently correct.

The project used code maps, automated checks, tests, review loops, and explicit safety rules around costly or external effects. When an AI-assisted change crossed authentication, provider calls, inventory, or paid generation, I expected stronger evidence than I would for a local presentation change.

That experience reinforced a practical standard for AI-enabled development: acceleration is valuable only when the review and verification system scales with it. Faster code generation without stronger contracts can simply produce defects faster.

## Why the project led to BlazeOS

ListBlaze proved useful concepts, but it also accumulated responsibilities as the problem became clearer. Photo capture, item identity, inventory movement, marketplace state, orders, recovery, desktop workflows, and mobile work needed a cleaner shared architecture.

BlazeOS is the successor effort. It does not treat ListBlaze as a production codebase to preserve at all costs. It uses the observed workflow and lessons as evidence, then rebuilds around explicit bounded contexts, generated contracts, local-first authority, immutable photo evidence, transactional inventory invariants, and recoverable provider effects.

That is another architecture lesson I value: a prototype can teach you what the real system must protect. It does not automatically become the foundation of that system.

## Sources and related reading

- [AI Agents Need an Authority Ladder](/blog/ai-agents-need-an-authority-ladder)
- [Choose the Smallest Responsible AI Pattern](/blog/choose-the-smallest-responsible-ai-pattern)
- [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)
- [eBay Sell APIs](https://developer.ebay.com/api-docs/sell/static/overview.html)
