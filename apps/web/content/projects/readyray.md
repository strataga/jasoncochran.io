---
subtitle: 'Open-source architecture case study • In development'
accentColor: 'red'
techStack:
  - 'TypeScript'
  - 'React'
  - 'Node.js'
  - 'PostgreSQL'
  - 'OpenTelemetry'
---

# ReadyRay

## Current status

ReadyRay is in development. It is not yet presented as production-ready, broadly deployable, or adopted by customers.

The project is designed to become an Apache-2.0 architecture and production-readiness review platform. Its purpose is to help a team turn repository evidence into cited findings, reproducible scores, explicit risks, and a human-approved report.

## The problem

Architecture reviews often mix facts, assumptions, preferences, and sales language. Teams may receive a polished document without a reproducible path back to the code, tests, deployment configuration, security controls, or operating evidence that informed it.

ReadyRay is being designed around a stricter question: **What can the available evidence actually support?**

## Planned review flow

1. Pin supported evidence to an exact source revision.
2. Inventory architecture, tests, configuration, delivery, security, and operational proof without executing submitted code.
3. Run deterministic checks before any model-assisted review.
4. Require exact citations and classify facts, inferences, assumptions, and missing evidence.
5. Apply versioned scoring rules in deterministic code.
6. Require a human reviewer to accept, reject, resolve, or risk-accept findings before publication.

These are design commitments, not claims that every step is implemented today.

## Architecture direction

ReadyRay starts as a modular monolith. Domain-driven design defines the language and boundaries; clean, hexagonal architecture keeps the web interface, API, jobs, persistence, and external providers behind explicit ports.

This keeps the system understandable and testable without paying the operational cost of premature microservices.

## AI boundary

AI may propose cited findings, but it will not control deterministic scores or publish reports. Repository content is untrusted input. Model output must pass schema, citation, severity, privacy, and application validation before a human can use it.

## Open-source and release direction

- Apache License 2.0
- Community and future hosted deployments use the same source and release images
- Pull-request-only changes after the seed commit
- Semantic Versioning and human-readable release notes
- Signed release artifacts, checksums, software bills of materials, and build attestations before stable release

## Benchmark

Acme FieldOps will be a separate fictional but runnable enterprise application used to test ReadyRay. Clean, flawed, remediated, and insufficient-evidence revisions will provide known scenarios without presenting invented business outcomes as customer proof.

## What evidence will be added

As work is completed, this case study will add links to source, pull requests, ADRs, threat models, API and data contracts, evaluations, accessibility checks, performance results, deployment proof, recovery exercises, release notes, and limitations.
