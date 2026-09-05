---
title: 'AI Agents Need an Authority Ladder'
seoTitle: 'A Safe Authority Model for Enterprise AI Agents'
seoDescription: 'Control enterprise AI agents by separating read, recommend, prepare, and execute authority with identity, policy, approval, audit, and recovery.'
date: '2026-07-15'
updated: '2026-09-04'
summary: 'Give an agent more authority only when the use case has earned stronger identity, evaluation, approval, audit, and recovery controls.'
tags: [AI agents, agentic AI, security architecture, human approval, governance]
heroImage: '/blog/ai-agents-need-an-authority-ladder/header-1200x630.webp'
heroAlt: 'Two reviewers examining a four-stage AI authority workflow that keeps execution behind a human approval checkpoint.'
infographic: 'agent-authority-ladder'
---

AI agents are often described by capability: which models they use, how many tools they can call, and whether they can plan across multiple steps.

Enterprise architecture needs a second description: what authority do they have?

An agent that summarizes approved documents and one that can change production configuration are not variations of the same risk. The system should make that difference structural.

## Separate four levels of authority

I use a simple ladder: read, recommend, prepare, execute.

<!-- infographic -->

**Read** retrieves approved information without durable side effects. **Recommend** interprets evidence and proposes a decision. **Prepare** creates a specific, reversible change for review. **Execute** performs an approved business or technical action.

Each rung requires stronger controls. Do not give execute permission merely because the agent already has a tool.

## Keep read access permission-aware

Read-only does not mean harmless. An agent can combine information, reveal restricted document titles, or expose data across tenants.

Apply the user’s actual permissions during retrieval. Preserve source, sensitivity, and tenant metadata. Test indirect prompt injection in documents and tool responses. Limit what leaves the approved environment and what is retained in traces.

## Make recommendations inspectable

A recommendation should show the evidence used, assumptions, uncertainty, and the policy or rule that shaped it. The user must be able to distinguish source facts from model inference.

For oil and gas operations, AI can help summarize an exception or locate procedures, but the qualified person should own the operational decision. Advisory software should not disguise itself as control logic.

## Freeze prepared actions for review

At the prepare level, the agent creates an artifact: a pull request, infrastructure plan, draft work order, proposed configuration, or other change set.

The reviewer needs the target, exact change, likely effect, relevant evidence, and recovery approach. Hash or version the proposal and revalidate policy before execution. Otherwise the approved object can differ from the executed one.

## Constrain execution

Execution should use a narrow workload identity, allowlisted operation, validated schema, idempotency key, budget, timeout, and audit record. Require step-up approval or separation of duties for sensitive actions.

Put hard limits outside the model: number of records, financial amount, environment, site, resource type, and maximum iterations. The agent cannot be the authority that expands its own limits.

## Design failure and recovery

An agent may stop midway through a multi-step task. Decide which steps are durable, which are reversible, and how continuation or compensation works. Do not blindly retry an action whose outcome is unknown.

Expose partial progress to support. Record tool calls, results, identifiers, and final state without copying secrets or excessive sensitive content.

## Evaluate at every rung

Read access needs permission and retrieval tests. Recommendations need groundedness and usefulness review. Prepared actions need diff accuracy and policy validation. Execution needs end-to-end safety, idempotency, containment, and recovery tests.

Promotion should be evidence-driven and reversible. A successful pilot does not automatically justify more authority.

## Architecture review questions

1. What rung does this use case require today?
2. Which user and workload identities are preserved?
3. Can retrieved content change instructions or permissions?
4. What evidence accompanies a recommendation?
5. Is the prepared action stable between approval and execution?
6. Which limits are enforced outside the model?
7. Can execution be repeated safely?
8. What happens after partial completion?
9. Can security and support reconstruct the action?
10. What evidence would justify the next rung?

Agent architecture improves when authority is explicit. Start low, measure real value, strengthen controls, and move upward only when the task earns it.

## Sources and further reading

- [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)
- [NIST Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final)
- [Prompt Shields in Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/content-filter-prompt-shields)
- [Deep dive into Foundry Agent Service networking](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/agents-networking-deep-dive)
