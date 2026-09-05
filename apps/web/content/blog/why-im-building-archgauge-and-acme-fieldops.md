---
title: 'Why I’m Building ArchGauge and Acme FieldOps Together'
seoTitle: 'Why I’m Building ArchGauge With Acme FieldOps'
seoDescription: 'Why an architecture review platform needs a runnable benchmark, cited evidence, deterministic scoring, human approval, and honest limits on what AI can conclude.'
date: '2026-08-27'
updated: '2026-09-04'
summary: 'ArchGauge is designed to review architecture evidence; Acme FieldOps is designed to test whether those reviews can distinguish clean, flawed, remediated, and insufficient evidence.'
tags: [ArchGauge, Acme FieldOps, software architecture, AI evaluation, open source]
heroImage: '/blog/why-im-building-archgauge-and-acme-fieldops/header-1200x630.webp'
heroAlt: 'Reviewers compare cited source code with an architecture finding and clean, flawed, remediated, and insufficient-evidence benchmark cases.'
infographic: 'archgauge-evidence-loop'
---

Architecture reviews often produce confident language from incomplete evidence.

A diagram may show the intended system but not the behavior in code. A repository may contain a security policy that the runtime does not enforce. A test may cover a happy path without proving tenant isolation, recovery, or idempotency. An AI review can summarize those artifacts quickly, but speed does not make the conclusion reproducible.

I started ArchGauge to explore a stricter approach: turn bounded repository evidence into cited findings, explicit risks, reproducible scores, and human-approved reports. I started Acme FieldOps beside it because a review platform cannot prove much by reviewing arbitrary repositories whose expected findings are unknown.

Both projects are open-source foundations under active development. ArchGauge does not yet provide production-ready application reviews, and Acme FieldOps does not yet implement its planned field-service workflow. I am publishing the architecture, requirements, quality expectations, and incremental implementation because the evidence should grow with the claim.

## Why citations are the center of the design

An architecture finding should answer a basic question: what evidence supports this conclusion?

That might be a migration with a database constraint, an authorization guard, a test that attempts cross-tenant access, an OpenAPI operation, a retry policy, an observability configuration, or a recovery runbook. A useful report should distinguish direct evidence from an inference and say when the available material is insufficient.

ArchGauge is designed so the model does not silently become the scoring authority. AI can help classify evidence, explain a risk, or propose a finding. Deterministic code owns versioned scoring rules where consistency is required. A human reviews the evidence, limitations, and recommendation before publishing.

That division of responsibility is important because architecture judgment includes context. The absence of Kubernetes may be the right decision for a small modular monolith. The presence of a retry loop may be dangerous if the operation is not idempotent. A security control may exist but be placed behind the boundary it is supposed to protect.

<!-- infographic -->

## Why Acme FieldOps is a separate benchmark

Acme FieldOps is a fictional enterprise field-service application. Its planned workflow is intentionally recognizable: a dispatcher assigns a work order, a technician receives cited guidance from a service manual, a person approves or rejects the AI proposal, parts reservations preserve inventory rules, and signed ERP webhooks are durable, idempotent, retry-safe, and observable.

The benchmark will include four kinds of scenarios:

- a clean implementation that meets the stated contract;
- a flawed implementation with known architecture and production-readiness problems;
- a remediated version that addresses those problems;
- an insufficient-evidence version where the responsible conclusion is “not proven.”

Expected findings remain outside the evidence submitted to ArchGauge. Otherwise the review could simply repeat its answer key.

Keeping the benchmark separate also protects the product boundary. ArchGauge should not be tuned to one hard-coded repository layout. Acme should remain a realistic application whose behavior can be run and tested independently.

## Safe ingestion comes before clever analysis

Repository review introduces a serious trust boundary. Submitted code may be private, malicious, unexpectedly large, or full of secrets. A review service should not execute it merely to produce a richer answer.

ArchGauge begins with bounded, non-executing ingestion. The system needs explicit file and size limits, safe archive handling, content classification, secret protection, tenant isolation, provenance, retention rules, and a clear record of what was and was not reviewed.

That constraint means some findings will remain unproven until a separately controlled runtime supplies additional evidence. I prefer that honest limitation to an architecture tool that runs unknown code inside an inadequately isolated worker.

The same principle applies when an enterprise introduces AI to source code, incident records, or operational documents. The first question is not “Which model should we use?” It is “What data and authority cross this boundary, and how will we know what happened?”

## Production readiness is wider than code quality

ArchGauge is intended to evaluate whether a system can be operated responsibly, not simply whether its code looks clean.

That includes ownership, security, privacy, accessibility, reliability, performance, cost, deployment, rollback, observability, data integrity, recovery, software supply chain, and documentation. The exact evidence varies by workload, but the report should make the expected proof explicit.

Acme FieldOps gives those categories a concrete business context. A parts reservation needs concurrency and database evidence. A signed ERP webhook needs signature verification, replay protection, durable receipt, idempotency, and recovery. An AI-generated repair suggestion needs approved source material, evaluation, human approval, and a guarantee that the model cannot directly change operational state.

Those details make architecture review useful to engineering teams. Instead of saying “improve resilience,” the report can cite the current behavior, identify the failure mode, and describe what evidence would close the gap.

## What the projects are meant to demonstrate

I am building ArchGauge and Acme FieldOps as public, reproducible proof of how I approach solution architecture and applied AI.

The work is designed to demonstrate several habits:

- translate a business workflow into clear system and authority boundaries;
- keep deterministic decisions separate from probabilistic assistance;
- make security, operations, and recovery part of the design;
- connect claims to code, tests, configuration, or explicit limitations;
- use architectural decision records to preserve why a choice exists;
- build in vertical slices so each stage can be verified;
- let human judgment remain accountable for the final report.

I do not expect a score to replace an experienced architect. I expect good evidence to make an architect’s judgment clearer, more consistent, and easier for a team to act on.

## Why this matters for enterprise AI

Enterprises will build more software with AI and put more AI inside software. Both changes increase the need for review that is fast without becoming careless.

AI-assisted development can expand the volume of code and decisions that teams must verify. AI features also introduce models, prompts, retrieval, tools, evaluations, latency, cost, and changing provider behavior into the production system. Existing concerns—identity, data ownership, deployment, failure handling, and audit—do not disappear. They gain new paths.

ArchGauge is my attempt to make those responsibilities visible and testable. Acme FieldOps is how I plan to keep the product honest.

## Sources and related reading

- [ArchGauge project story](/projects/archgauge)
- [What 28 Years of Software Engineering Taught Me About Architecture](/blog/what-28-years-of-software-engineering-taught-me-about-architecture)
- [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)
- [OWASP Application Security Verification Standard](https://owasp.org/www-project-application-security-verification-standard/)
