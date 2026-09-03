---
title: "What 28 Years of Software Engineering Taught Me About Architecture"
date: "2026-09-03"
summary: "The tools keep changing. The architect's responsibility does not: understand the real problem, make the important tradeoffs visible, and stay accountable until the system works in production."
tags:
  - architecture
  - software engineering
  - technical leadership
  - applied AI
heroImage: "/blog/what-28-years-of-software-engineering-taught-me-about-architecture/architecture-evolution.webp"
heroAlt: "A continuous illuminated system path connecting enterprise software, mobile field workflows, cloud infrastructure, and an applied AI network."
infographic: "architecture-accountability-loop"
---

After 28 years in software engineering, I don't think architecture is mainly about drawing diagrams or knowing the names of every pattern. Those things can help, but they aren't the job.

The job is making good decisions when the answer isn't obvious. It is understanding what the business actually needs, recognizing the risks that matter, and shaping a system that people can build, operate, change, and eventually hand to someone else.

I have worked across enterprise applications, web and mobile products, integrations, oil and gas, travel, field operations, and applied AI. From 2015 to 2021, I worked independently as a solutions architect and delivered more than 30 projects. In 2025, I started Strataga to continue that kind of hands-on architecture and software delivery. The technologies changed from one job to another. The questions that determined whether the work would hold up were much more consistent.

What problem are we solving? Where should responsibility live? What happens when part of the system fails? How will we move from the old system to the new one? Can another engineer understand why we made these choices? Are we buying complexity that the business doesn't need?

Those are architecture questions. More important, they are delivery questions.

## Start with the business outcome, not the preferred tool

Engineers naturally have tools and approaches they enjoy. I do too. Experience has taught me to resist starting there.

Before choosing a framework, database, cloud service, or architecture style, I want to understand the outcome. Who needs the system? What are they trying to accomplish? What would make the result useful? Which constraints are real today, and which are guesses about a future that may never arrive?

The same feature can call for very different designs depending on its setting. A field workflow that must continue without connectivity has different needs from an internal dashboard. A regulated transaction has different consequences from a temporary analytics result. A product that must ship quickly to test demand should not automatically carry the same operational machinery as a mature platform serving many teams.

Microsoft's guidance on [architecture styles](https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/) makes this point directly: styles impose different constraints, offer different benefits, and carry different tradeoffs. It recommends starting with the problem, business drivers, and quality attributes rather than chasing architectural purity.

That matches how I have come to think about design. A design is only good if it fits the problem it has to solve.

Starting with the outcome also makes technical disagreements easier to resolve. Instead of arguing that one pattern is modern and another is old, we can ask which option best supports the priorities we agreed on. Reliability, time to market, maintainability, cost, security, and performance can pull a design in different directions. The architect's job is not to pretend those tensions disappear. It is to make them visible and help the team choose deliberately.

## A boundary is real only when the system enforces it

Architecture diagrams are useful because they help people see the system. They become dangerous when the boxes create a sense of order that the code does not actually have.

If two modules are supposed to be independent but reach into each other's data, the boundary is not real. If an authorization rule exists only in a screen, the boundary is not real. If a service contract can change without a compatibility check, the boundary is not real. If everyone owns a critical workflow, nobody truly owns it.

I believe important boundaries should show up in several places: contracts, code structure, data rules, tests, permissions, and ownership. Not every boundary needs every mechanism, but the more important the rule, the less I want it to depend on memory or convention alone.

This is one reason I value short decision records. A good architecture decision record captures the context, the choice, and its consequences. It gives a future engineer something more useful than “that is how we have always done it.” Martin Fowler's overview of [architecture decision records](https://martinfowler.com/bliki/ArchitectureDecisionRecord.html) also emphasizes recording alternatives, tradeoffs, uncertainty, and the conditions that should cause a decision to be reconsidered.

The document is not the boundary, of course. It explains why the boundary exists. The implementation and its checks are what make that decision durable.

## Stay close enough to implementation to learn

I describe myself as a hands-on software architect for a reason. I do not believe architecture ends when the design is approved.

Implementation teaches us things that a diagram cannot. A clean-looking boundary may require awkward data movement. A convenient integration may have poor failure behavior. A workflow that made sense in a meeting may confuse the people using it. A dependency that looked inexpensive may become difficult to test or operate.

That feedback does not mean the architecture failed. It means the architecture process is working—if we pay attention and adapt.

Fowler's discussion of [evolutionary architecture](https://martinfowler.com/articles/evo-arch-forward.html) describes architecture as a continuing effort that works closely with programming and uses small changes and feedback loops. I agree with that direction. I want enough design to avoid preventable mistakes, followed by real implementation evidence as early as possible.

This does not require the architect to write every feature. It does require staying close to the code, tests, delivery pipeline, and operational behavior. I want to know whether the decisions are helping the team or merely giving the system a tidy description.

<!-- infographic:architecture-accountability-loop -->

## Migration is part of the architecture

A target-state diagram can be correct and still be incomplete. Existing systems do not disappear because a better design was approved.

Real modernization has a beginning, a period of coexistence, and an end. During that middle period, old and new behavior may overlap. Data may need to move or remain compatible. Teams need a way to detect problems, recover safely, and know when the legacy path can be retired. Support and operational ownership must move along with the code.

At Servant, I delivered a new EMA onboarding flow and owned the production migration from the legacy onboarding path to the new NestJS flow. I then completed the documentation and operational handoff. I am intentionally keeping that example at a high level, but it reinforces a lesson I consider important: the route from today's system to tomorrow's system belongs in the design.

I no longer consider “we will migrate later” to be a complete architecture decision. The transition deserves explicit thought. So do recovery and retirement. If the team cannot explain how the change reaches production safely, the architecture is not finished.

## Offline, pending, failed, and recovered are product states

The happy path is only one version of the product.

At Nutrien, I built cross-platform features for field representatives and delivered offline-first data collection and workflow screens that synchronized when connectivity returned. That work is a useful reminder that connectivity is not simply an infrastructure detail. It changes what the user can do, what the application can promise, and what the interface must communicate.

The same principle applies beyond mobile applications. Work may be accepted but not completed. A remote service may time out after receiving a request. A background job may be retried. Two changes may arrive in an unexpected order. A user may need to know whether something is pending, failed, safe to retry, or already complete.

When those states are left vague, the uncertainty leaks into the product. Users repeat actions. Support teams cannot explain what happened. Engineers repair data manually. The architecture may look fine on its happy-path diagram while the actual experience feels unreliable.

I try to make intermediate and failure states explicit early. What is durable? What can be repeated safely? Which result is authoritative? What does the user see while the system is uncertain? How does the system recover, and how will we know recovery worked?

Those questions connect product design, data design, and operations. Treating them separately usually hides the hardest part of the workflow.

## Production concerns belong in the design

A system is not production-ready just because its primary feature works.

AWS organizes its [Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/framework/the-pillars-of-the-framework.html) around six pillars: operational excellence, security, reliability, performance efficiency, cost optimization, and sustainability. I like the broader message behind that list: a working feature is only one dimension of a working system.

Security cannot be something we sprinkle on before release. NIST's [Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final) treats secure practices as part of the software development lifecycle. In practical terms, I want teams considering identity, authorization, data exposure, dependency risk, and recovery while they are still making design choices—not after those choices have hardened.

The same is true for observability. Logs, metrics, traces, and useful operational context are not decorations. They are how people answer basic questions after deployment: Is the system healthy? Which part is failing? Who is affected? Did a retry help or make the problem worse? Has the repair actually worked?

Documentation and handoff matter for the same reason. At Verizon, I delivered a JavaScript SDK integration and documented the handoff for downstream teams. At Servant, documentation and operational handoff were part of completing the migration. Software has to remain understandable after the original author moves on.

I judge architecture partly by what happens on an ordinary difficult day: a deployment goes wrong, a dependency slows down, an engineer unfamiliar with the area gets the support call, or a business rule changes sooner than expected. A good design does not prevent every problem. It gives people a reasonable way to see, contain, understand, and recover from one.

## AI can accelerate the work, but it cannot own the decision

AI has changed how I explore ideas and build software. At TxMQ, I led OpenAI research that prototyped LLM-assisted internal tools on existing AngularJS and Ionic client surfaces while I continued delivering production client features.

The tools have improved rapidly since then. They can help compare approaches, draft code, find edge cases, generate tests, explain unfamiliar areas, and shorten the distance between an idea and something we can evaluate. Used well, that is a meaningful advantage.

It does not remove the need for engineering judgment.

AI does not know which unstated business constraint is important unless we give it that context. It can produce an answer that looks coherent while making a false assumption. It can repeat a weak pattern confidently. It cannot accept accountability for a security decision, a production incident, or a migration that puts customer data at risk.

My view is simple: use AI to accelerate exploration and implementation, then review its work with the same seriousness we apply to human-written work. Verify important claims. Test behavior. Protect sensitive context. Keep a human responsible for the decision and the result.

The value is not in saying that AI produced more code. The value is in reaching a better, tested decision sooner without lowering the standard for what reaches production.

## The smallest responsible design is usually the best place to start

Overengineering often starts as reasonable preparation for a future that never arrives. We add services, queues, abstraction layers, and platforms because the system might need them someday. Every addition can be justified by a possible future, but the team has to carry that complexity now.

Complexity has to be learned, tested, secured, deployed, observed, and supported. It creates more places for assumptions to hide. Sometimes that cost is absolutely justified. Often it is not justified yet.

I prefer the smallest design that handles the real constraints we understand today, with clear boundaries and a named reason to revisit the choice. A modular application may be more responsible than premature services. A straightforward synchronous workflow may be safer than a distributed process. A managed capability may be better than building a platform the team then has to operate.

Small does not mean careless. The design still needs security, recovery, observability, tests, and ownership appropriate to its risk. It means spending complexity where it solves a demonstrated problem.

That approach also preserves options. When boundaries are clear and decisions record their review triggers, a team can evolve the system when evidence changes. We do not need to predict every future. We need to avoid trapping ourselves while solving the present well.

## What a hands-on architect should leave behind

I believe an architect should leave behind more than a diagram and a list of technologies.

The business goal should be clearer. The major decisions and tradeoffs should be understandable. Important boundaries should be visible and enforced. The software should have a safe path into production and a practical way to recover when something fails. The people operating it should have the information they need. The next engineer should be able to see why the system is shaped the way it is and what evidence would justify changing it.

Most of all, the team should not need the architect in every conversation forever. Good architecture creates shared understanding and better local decisions. It reduces mystery without pretending uncertainty is gone.

After 28 years, that is what architecture means to me: translate the need, expose the tradeoffs, build enough to learn, and remain accountable through delivery, operation, and handoff. The tools will keep changing. That responsibility is the part worth carrying forward.

## Further reading

- [Architecture styles — Microsoft Azure Architecture Center](https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/)
- [The pillars of the AWS Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/framework/the-pillars-of-the-framework.html)
- [Architecture Decision Record — Martin Fowler](https://martinfowler.com/bliki/ArchitectureDecisionRecord.html)
- [Foreword to *Building Evolutionary Architectures* — Martin Fowler](https://martinfowler.com/articles/evo-arch-forward.html)
- [Secure Software Development Framework, SP 800-218 — NIST](https://csrc.nist.gov/pubs/sp/800/218/final)
