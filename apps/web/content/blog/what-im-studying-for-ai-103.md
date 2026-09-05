---
title: 'What I’m Studying for Microsoft’s AI-103 Exam'
seoTitle: 'What I’m Studying for Microsoft AI-103'
seoDescription: 'My study plan for AI-103, Developing AI Apps and Agents on Azure: models, retrieval, tools, agents, evaluation, safety, identity, and operations.'
date: '2026-08-26'
updated: '2026-09-04'
summary: 'AI-103 is useful to me because it connects Azure AI features to the harder work of designing, evaluating, securing, and operating an AI application.'
tags: [AI-103, Microsoft Azure, Azure AI Foundry, AI agents, certification]
heroImage: '/blog/what-im-studying-for-ai-103/header-1200x630.webp'
heroAlt: 'Jason Cochran studies agent, tool, retrieval, and model-evaluation concepts at a laptop in his home office.'
infographic: 'ai-103-study-map'
---

After earning Microsoft Azure Fundamentals and Azure AI Fundamentals in November 2025, I wanted to go deeper than cloud and AI vocabulary. I began studying the applied path now covered by **Exam AI-103: Developing AI Apps and Agents on Azure**.

Microsoft has changed this certification path as the platform has evolved. AI-102 was retired on June 30, 2026. AI-103 is the current exam tied to the Microsoft Certified: Azure AI Cloud Developer Associate certification. That change is a useful reminder that the credential is a checkpoint, not the destination. The services will keep changing; the engineering responsibilities remain.

My goal is to use the material to strengthen how I design real AI workloads: choose the smallest suitable pattern, ground it in approved data, give tools narrow authority, evaluate the behavior, secure the surrounding system, and operate it with honest signals.

## The application around the model matters most

A model endpoint can produce an impressive result in a few lines of code. A production application needs much more.

It needs identity, access control, data boundaries, prompt and configuration versioning, structured inputs and outputs, error handling, timeouts, cost controls, tracing, evaluation, content safety, deployment, and a support model. Retrieval introduces document lifecycle and permission questions. Tools introduce external effects. Agents introduce state, planning, and a larger set of possible behaviors.

I am studying AI-103 through that full-system lens. I want to understand the Azure services, but I also want to know where each one belongs in an architecture and what new responsibility it creates.

<!-- infographic -->

## Models and prompts are versioned dependencies

Model selection involves quality, latency, cost, context limits, data handling, regional availability, and lifecycle. The best model for a prototype may not be the best model for a high-volume or regulated workload.

Prompts and model configuration should be treated as versioned application artifacts. A temperature change, system instruction, model upgrade, or response-schema change can alter behavior as meaningfully as a code change. Those changes need review, tests, controlled rollout, and traceability.

Structured outputs are valuable because they turn model text into a contract the application can validate. They do not make the content true. Deterministic code still needs to check allowed values, required relationships, authorization, and business invariants before using an output.

## Retrieval starts with permission and provenance

Retrieval can improve an answer by supplying current, approved context. It can also expose data a user was never allowed to see or confidently cite an obsolete document.

My study includes Azure AI Search and the broader design of retrieval-augmented applications. The architecture questions include:

- which source is authoritative;
- how content is chunked and versioned;
- which metadata travels with it;
- how access is enforced before retrieval;
- how deletions and permission changes propagate;
- how the answer cites sources;
- what the system does when evidence is weak;
- how retrieval quality is evaluated independently of generation quality.

For an oil and gas use case, a repair assistant should not mix current approved procedures with superseded manuals or cross an asset, business-unit, or sensitivity boundary. The user needs to see the source and its effective context.

## Tools and agents require an authority model

Giving a model a tool changes it from a generator into a participant in a workflow.

A read-only tool that retrieves a well summary has a different risk from a tool that creates a work order, changes a setpoint, approves an invoice, or modifies cloud infrastructure. Tool contracts need typed inputs, server-side authorization, least-privilege workload identity, timeouts, idempotency, audit, budget limits, and safe failure behavior.

I use an authority ladder: read, recommend, prepare, then execute. A use case should begin on the lowest rung that creates value. Moving higher requires stronger evaluation, controls, and recovery evidence.

Multi-agent designs add another question: what does each agent own that one explicit workflow could not handle more safely? Agents should not be added because the diagram looks advanced. They should earn their complexity through a task that genuinely benefits from delegated planning or specialized context.

## Evaluation is part of development

AI quality cannot be reduced to “the answer looked good.”

I am studying how Azure’s evaluation tooling can support repeatable testing across groundedness, relevance, task success, safety, latency, and cost. The most useful evaluation set still comes from the business task: representative cases, edge cases, unacceptable failures, adversarial inputs, and examples that previously broke the system.

Evaluation belongs before and after release. Offline tests catch regressions before exposure. Limited rollout and tracing show how the system behaves with real inputs. Production review feeds failures back into the dataset. Material changes to the model, prompt, retrieval, or tools should rerun the relevant gates.

For high-impact decisions, automated evaluators do not eliminate human review. They help focus it and make change more visible.

## Security extends beyond content filtering

Prompt injection and unsafe content matter, but enterprise AI security also includes familiar application and cloud controls.

The workload needs managed identities or other controlled credentials, private networking where justified, secrets management, encryption, tenant boundaries, audit, dependency security, logging with redaction, and separation between development and production. Retrieval and tool calls must enforce authorization in the underlying service rather than trusting a prompt to obey policy.

Azure AI Content Safety and Prompt Shields can be useful layers. They do not replace threat modeling, server-side permissions, or a clear decision about what the system may do.

## Operations complete the architecture

An AI feature needs a health model that covers more than HTTP availability.

I want to observe task success, refusal behavior, groundedness, retrieval quality, tool failures, human overrides, token usage, latency, cost, provider errors, and model or prompt version. Traces should connect an answer to its retrieval and tool activity without leaking sensitive prompts or documents into broadly accessible logs.

The team also needs playbooks for provider degradation, quota exhaustion, model retirement, index failure, unexpected cost, harmful output, and incorrect external effects. A fallback may be a smaller model, deterministic workflow, read-only mode, or a clear request for human help.

## What I want the certification to represent

I do not want AI-103 to stand alone as a badge. I want it to mark progress toward a practical capability: design an Azure AI application whose data, authority, quality, cost, and failure behavior can be explained and tested.

That is the same approach I bring to architecture generally. Learn the platform, connect it to a real workflow, expose the tradeoffs, build enough to challenge the design, and leave evidence that another engineer can review.

## Sources and related reading

- [Microsoft AI-103 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-103)
- [Microsoft Certified: Azure AI Cloud Developer Associate](https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-cloud-developer-associate/)
- [Azure AI Foundry evaluation](https://learn.microsoft.com/en-us/azure/ai-foundry/concepts/evaluation-approach-gen-ai)
- [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)
- [AI Agents Need an Authority Ladder](/blog/ai-agents-need-an-authority-ladder)
