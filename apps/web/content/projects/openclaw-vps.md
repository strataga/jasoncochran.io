---
subtitle: 'Archived personal project • No longer online'
accentColor: 'blue'
techStack:
  - 'Next.js'
  - 'TypeScript'
  - 'Convex'
  - 'Stripe'
  - 'Turnstile'
---

# OpenClaw VPS

## Status

OpenClaw VPS was a personal project exploring managed deployment and operational controls for private AI assistants. It is archived and no longer online.

This page preserves the engineering questions the project explored. It does not describe a live service, active pricing, customer adoption, or current production availability.

## What I explored

- Tenant-aware application and configuration boundaries
- Bring-your-own-provider-key flows
- Deployment and health-check workflows
- Cost, latency, and error visibility
- Authentication, abuse controls, and operational support paths
- The tradeoffs between self-hosted software and a managed service

## Lessons carried forward

The most important lesson was that an AI product needs much more than a successful model call. Trust depends on bounded access, visible cost, evaluation, failure recovery, support procedures, and clear claims about what the system can and cannot do.

Those lessons now inform ArchGauge, my open-source architecture and production-readiness case study.
