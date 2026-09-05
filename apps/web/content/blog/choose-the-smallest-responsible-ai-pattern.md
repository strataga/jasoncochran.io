---
title: 'Choose the Smallest Responsible AI Pattern'
seoTitle: 'RAG, Tools, Agents, or Code? Choose the Right AI Pattern'
seoDescription: 'Choose between deterministic code, a model call, RAG, tool use, and agentic workflows based on task uncertainty, authority, evidence, and risk.'
date: '2026-06-17'
updated: '2026-09-04'
summary: 'Not every AI problem needs RAG, tools, or an agent. Add probabilistic behavior and autonomy only when each layer earns its cost and risk.'
tags: [AI architecture, RAG, AI agents, Microsoft Foundry, solution architecture]
heroImage: '/blog/choose-the-smallest-responsible-ai-pattern/header-1200x630.webp'
heroAlt: 'Four architecture sketches compare increasingly complex software and AI patterns while reviewers select the simplest suitable design.'
infographic: 'ai-pattern-selector'
---

AI architecture often starts one step too late. The team asks which vector database or agent framework to use before deciding whether the task needs retrieval or an agent at all.

I prefer a different rule: use the least probabilistic pattern that solves the real problem.

That does not mean avoiding AI. It means preserving determinism, explainability, cost control, and security wherever they create more value than generation.

## Start with the task contract

Define the user, input, useful output, unacceptable output, data scope, latency, cost, review policy, and authority. Then determine which parts require language judgment and which can remain ordinary software.

A calculation should usually be code. A record lookup should usually be a query. A permission decision must be policy. A summary of several approved documents may benefit from a model. A multi-step investigation may justify tools or agentic planning.

<!-- infographic -->

## Use one model call for bounded language work

A direct model call fits classification, extraction, rewriting, or generation when context is small and the output can be validated.

Use structured outputs, schema validation, bounded prompts, timeouts, cost limits, and clear fallback behavior. Do not ask the model to invent a value the source system can provide exactly.

## Add retrieval when knowledge must be current or private

RAG helps when the answer should be grounded in a changing or internal corpus. The difficult work is not creating embeddings. It is content ownership, chunking, permissions, freshness, retrieval quality, citation, and evaluation.

Retrieve only what the user may access. Preserve source identifiers and sensitivity. Test whether the right evidence is found before judging the generated answer. A fluent response cannot repair missing retrieval.

## Add tools when the system needs verified capability

Tools let a model request data or actions through defined interfaces. Keep schemas narrow and validate every argument. Enforce authorization outside the model. Distinguish read tools, proposal tools, and action tools.

A model should not receive a generic database connection or unrestricted shell because the prompt says to be careful. Give it the smallest capability that represents the business operation.

## Add an agent only for real iteration

An agent earns its complexity when the task requires planning, observing results, adapting, and selecting among tools over multiple steps.

The cost is a larger state space. More paths must be evaluated. Tool errors can change later decisions. Loops can spend money or repeat side effects. Context can accumulate untrusted instructions. Debugging requires traces across model, prompt, retrieval, state, and tools.

Before using multiple agents, ask whether one orchestrated workflow with deterministic steps would be easier to test and operate.

## Keep authority separate from capability

The fact that an agent can call a tool does not mean it should execute every requested action. Apply an authority ladder: read, recommend, prepare, then execute. Require stronger identity, policy, evidence, and review at each rung.

In oil and gas or another critical environment, start with read-only knowledge and advisory workflows. Do not connect probabilistic output directly to operational control.

## Evaluate the complete path

Measure task success, retrieval quality, unsupported claims, tool selection, argument accuracy, policy compliance, latency, cost, and recovery. Include adversarial and ambiguous cases. Version the dataset and run it when models, prompts, tools, indexes, or policies change.

## Decision questions

1. Can deterministic code produce the required answer?
2. Which part truly requires language judgment?
3. Does the task need private or current knowledge?
4. Can retrieval enforce user permissions?
5. Does the workflow need a tool, or only data?
6. What authority does each tool carry?
7. Does the task require adaptive multi-step planning?
8. Can every side effect be made safe to retry?
9. How will the full path be evaluated?
10. What simpler design would we compare it against?

The goal is not to build the most agentic system. It is to build the smallest system that produces a useful, testable, governed result.

## Sources and further reading

- [Azure Well-Architected AI workloads](https://learn.microsoft.com/en-us/azure/well-architected/ai/)
- [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)
- [NIST Generative AI Profile](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf)
- [Microsoft Foundry architecture](https://learn.microsoft.com/en-us/azure/ai-foundry/concepts/architecture)
