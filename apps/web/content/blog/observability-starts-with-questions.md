---
title: 'Observability Starts With Questions, Not Dashboards'
seoTitle: 'How to Design Observability Around Operational Questions'
seoDescription: 'Build an observability strategy that connects user outcomes, service health, traces, metrics, logs, alerts, deployments, and recovery decisions.'
date: '2026-06-03'
updated: '2026-09-04'
summary: 'Telemetry is useful when it helps someone decide, diagnose, or recover. Start with the questions people need to answer on a difficult day.'
tags: [observability, OpenTelemetry, Azure Monitor, reliability, operations]
heroImage: '/blog/observability-starts-with-questions/header-1200x630.webp'
heroAlt: 'Two engineers correlate a deployment timeline with service, error, and business-outcome charts during an incident review.'
infographic: 'observability-question-map'
---

An organization can collect millions of telemetry events and still be unable to explain why a customer’s work failed.

Observability is not the number of dashboards, agents, or log indexes. It is the ability to understand the system well enough to answer new questions, make a safe decision, and verify that recovery worked.

I design observability by starting with the support conversation: what will someone need to know when the workflow is slow, stuck, wrong, or missing?

## Begin with user-visible success

Infrastructure health is not workload health. Every container can be running while users cannot complete the primary task.

Define the business events that mark attempted and successful work. For a field synchronization flow, that might be queued, accepted, conflicted, and reconciled operations. For an integration, it might be accepted requests, downstream completion, and age of unresolved failures.

Technical signals explain those outcomes. They should not replace them.

<!-- infographic -->

## Build a workload health model

Map the business workflow to application components and dependencies. For each stage, define success, delay, failure, saturation, and ownership.

The model should expose customer impact and blast radius. “Database CPU is high” may be useful. “Production-entry acceptance is falling for two sites because writes are waiting on the database” is actionable.

Azure’s Well-Architected guidance recommends workload health models that combine application, infrastructure, and user perspectives. The point is correlation: one operational picture instead of unrelated green and red widgets.

## Use each signal for what it does well

OpenTelemetry describes traces, metrics, and logs as complementary signals.

- **Metrics** show trends, rates, distributions, and thresholds efficiently.
- **Traces** follow a request or job across boundaries and expose where time or failure accumulated.
- **Logs** record detailed events and decisions that need context.

Correlate them with consistent service names, environments, versions, trace IDs, and business-safe identifiers. Add deployment and configuration events so responders can see what changed before behavior changed.

Do not log entire requests by default. Sensitive data, credentials, prompts, and customer records require minimization and access control.

## Instrument asynchronous work deliberately

Queues and events break the visible request chain. Carry correlation and causation identifiers, record enqueue and dequeue time, expose retries and dead-letter state, and measure the age of work—not only queue length.

A backlog of ten messages can be harmless or critical depending on their age and business meaning. A completed handler is not a completed workflow if the downstream record failed.

## Alert on decisions someone can make

Every alert should have an owner, urgency, impact statement, diagnostic link, and expected first action. If nobody acts on it, change or remove it.

Use symptoms for paging and causes for investigation. Page when users are failing, a service objective is burning, data is at risk, or a critical backlog is aging. A transient CPU spike may belong in a dashboard rather than waking someone up.

## Verify recovery

After a restart, failover, replay, or rollback, confirm the business workflow. Did pending work reconcile? Did duplicate prevention hold? Did error rate return without hidden data loss? Are downstream consumers current?

The incident ends when the system and its durable state are healthy—not when the graph looks quieter.

## Review checklist

1. Which user outcomes define success?
2. Can we map impact to components and dependencies?
3. Are traces, metrics, and logs correlated?
4. Can we see deployment and configuration changes?
5. Is asynchronous work measured by age and outcome?
6. Are sensitive values excluded or protected?
7. Does every page have an owner and action?
8. Can support trace one workflow without raw database access?
9. Can we distinguish partial failure from complete success?
10. Which evidence proves recovery?

Good observability turns surprise into a question the system can answer. That capability belongs in the architecture before production, not in the incident backlog afterward.

## Sources and further reading

- [OpenTelemetry observability primer](https://opentelemetry.io/docs/concepts/observability-primer/)
- [OpenTelemetry signals](https://opentelemetry.io/docs/concepts/signals/)
- [Azure Well-Architected Framework](https://learn.microsoft.com/en-us/azure/well-architected/)
- [Azure Monitor overview](https://learn.microsoft.com/en-us/azure/azure-monitor/fundamentals/overview)
