---
subtitle: 'Managed AI-assistant hosting project • Not currently online'
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

OpenClaw VPS was a managed hosting and control-plane product for private, always-on OpenClaw AI assistants. It gave people a way to run and manage a useful assistant without taking responsibility for the underlying server, updates, monitoring, and recovery. The service is not currently online.

This page describes what I built and learned. It does not describe a live service, active pricing, customer adoption, or current production availability.

## What a user could do

- Provision and manage a hosted OpenClaw bot
- Choose and connect an AI provider
- Use web chat or a supported messaging channel
- Configure the assistant and manage its files and integrations
- Monitor health, usage, and cost information
- Request operational support without administering the server

## How I built it

It was built with a Bun monorepo, Next.js, React, TypeScript, Convex, authentication, billing, infrastructure provisioning, operational documentation, and automated quality gates. The work covered both the user-facing product and the operational systems needed to provision, observe, support, and recover hosted assistants.

I enjoy learning by building real systems, especially when a new technology changes where the hard engineering problems live. OpenClaw VPS gave me a practical way to explore AI product design, managed infrastructure, operational boundaries, and the tradeoffs between giving users control and removing unnecessary complexity.

## Lessons carried forward

The most important lesson was that an AI product needs much more than a successful model call. Trust depends on bounded access, visible cost, evaluation, failure recovery, support procedures, and clear claims about what the system can and cannot do.

Those lessons now inform ArchGauge, my open-source architecture and production-readiness case study.
