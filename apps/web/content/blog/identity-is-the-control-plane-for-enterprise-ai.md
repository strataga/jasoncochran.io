---
title: 'Identity Is the Control Plane for Enterprise AI'
seoTitle: 'Identity and Authorization Architecture for Enterprise AI'
seoDescription: 'Design enterprise AI around user, workload, agent, data, and tool identities with least privilege, human approval, and durable audit evidence.'
date: '2026-05-06'
updated: '2026-09-04'
summary: 'An AI agent should not become a shortcut around the identity, authorization, data, and audit controls required by the underlying business action.'
tags: [enterprise AI, identity, authorization, zero trust, Microsoft Foundry]
heroImage: '/blog/identity-is-the-control-plane-for-enterprise-ai/header-1200x630.webp'
heroAlt: 'Two security reviewers examine an access matrix, API permissions, a hardware security key, an identity badge, and audit notes.'
infographic: 'identity-control-plane'
---

Enterprise AI changes who can initiate work and how quickly a system can move through it. It does not remove the need to know who is acting, what they may access, and which durable changes they may make.

An agent can retrieve documents, call APIs, create records, trigger workflows, and coordinate other tools. If its permissions are broader than the user’s task, the agent becomes a new privilege-escalation path. If every action appears under one shared service account, the audit trail loses the person, policy, and purpose behind the change.

That is why I treat identity as the control plane for enterprise AI.

## Model four identities

At minimum, distinguish the human requester, the application, the agent or model workflow, and each downstream tool or service. A deployment pipeline and background worker may add more.

<!-- infographic -->

The system should preserve the chain: who asked, which workload handled the request, which policy authorized it, which tool acted, and what changed. Do not collapse that into “the AI did it.”

## Authenticate before the model receives authority

Authentication establishes identity. Authorization decides whether a specific action is allowed. Keep both outside the model’s judgment.

A prompt saying “only administrators may do this” is not access control. The application or policy layer must enforce tenant, role, resource, action, and context. The model may help interpret intent, but it should not grant itself permission.

NIST Zero Trust guidance emphasizes that trust is not implicit from network location. Cloud-native guidance extends that principle to application and service identities. An agent running inside the company network is not automatically trusted.

## Delegate narrow, short-lived permission

Avoid giving an agent one broad credential for every possible task. Prefer workload identities and task-specific tokens with narrow scopes and short lifetimes.

If a user asks for a read-only production summary, the agent does not need write access. If a workflow prepares a change for approval, preparation and execution should use different permissions. If execution needs elevation, perform a fresh policy decision at that boundary.

Secrets are a last resort for dependencies that cannot use identity. Store them centrally, restrict retrieval, rotate them, and prevent their value from reaching prompts, traces, or model output.

## Keep retrieval permissions aligned

Retrieval-augmented generation can leak information when the search layer finds documents the user could not open directly.

Filter retrieval using authoritative identity and data policy, not a model instruction. Preserve tenant and sensitivity metadata through indexing. Test cross-role and cross-tenant queries. Be careful with cached answers: a response generated under one permission context should not be served to another without re-evaluation.

The source citation should help the user verify an answer, but it must not reveal the existence or title of a restricted document.

## Treat tool output as untrusted input

An agent may read emails, documents, websites, tickets, or API results that contain instructions. Microsoft’s Prompt Shields documentation distinguishes user-prompt attacks from document attacks because third-party content can try to redirect an agent.

Do not let retrieved content redefine policy or expand tools. Validate tool inputs against a strict schema, allowlist operations, and keep authorization server-side. Separate data from instructions. Require human review before high-impact actions.

A guardrail service can reduce risk. It is not a substitute for least privilege.

## Make approval meaningful

A confirmation button is weak if the reviewer cannot see what will happen.

Show the proposed action, target resource, relevant input, expected effect, uncertainty, and recovery path. Freeze or revalidate the proposal between review and execution so the approved action cannot change underneath the reviewer.

Record the approver, policy version, agent version, tool call, and durable result. For sensitive changes, use separation of duties rather than letting the requester approve their own elevation.

## Design the audit record around the business action

Model telemetry matters, but an audit log should answer a business question: who caused this record, permission, payment, work order, or configuration to change?

Useful evidence includes request identity, acting workload, authorization decision, tool and operation, target, input digest, approval, outcome, correlation ID, and recovery or reversal. Minimize sensitive prompt and response storage; more logging is not always safer.

## Review questions

1. Which identities participate from request to durable outcome?
2. Where is authorization enforced outside the model?
3. Does retrieval apply the user’s real data permissions?
4. Are agent permissions short-lived and task-specific?
5. Can untrusted content influence tool selection or arguments?
6. What must a human see before approval?
7. Can the approved action change before execution?
8. Can an investigator reconstruct who caused the result?
9. How are credentials revoked and incidents contained?
10. Which tests attempt cross-tenant and privilege escalation?

An enterprise agent becomes safer when it has less ambient authority and more explicit evidence. Identity is what turns an impressive demonstration into a governable application.

## Sources and further reading

- [NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final)
- [NIST SP 800-207A: Zero Trust for cloud-native applications](https://csrc.nist.gov/pubs/sp/800/207/a/final)
- [Prompt Shields in Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/content-filter-prompt-shields)
- [Configure managed virtual networks for Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/how-to/managed-virtual-network)
