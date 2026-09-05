import { ArrowDown, ArrowRight, Check, Circle, Layers3 } from 'lucide-react'

type InfographicStage = {
  label: string
  title: string
  description: string
}

type InfographicDefinition = {
  eyebrow: string
  title: string
  introduction: string
  stages: InfographicStage[]
  caption: string
}

type InfographicLayout = 'boundary' | 'decision' | 'layers' | 'lifecycle' | 'pillars' | 'timeline'

type InfographicDetail = {
  heading: string
  items: string[]
}

type InfographicBoard = {
  layout: InfographicLayout
  details: [InfographicDetail, InfographicDetail]
}

const infographics: Record<string, InfographicDefinition> = {
  'wellos-platform-map': {
    eyebrow: 'Original product map',
    title: 'WellOS connected four kinds of work',
    introduction:
      'The project explored a shared operating experience while keeping each kind of authority and data behind a clear boundary.',
    stages: [
      {
        label: 'Field',
        title: 'Work at the asset',
        description:
          'Capture production, inspections, maintenance context, and exceptions where the work happens.',
      },
      {
        label: 'Operations',
        title: 'Coordinate and decide',
        description:
          'Review wells, trends, work orders, and current operating context across teams.',
      },
      {
        label: 'Systems',
        title: 'Integrate records and telemetry',
        description:
          'Connect business systems and SCADA data without confusing copies with sources of truth.',
      },
      {
        label: 'Platform',
        title: 'Secure and operate',
        description:
          'Provide tenant isolation, identity, audit, deployment, observability, and recovery.',
      },
    ],
    caption:
      'The intended value was a connected workflow, not one application claiming authority over every oilfield system.',
  },
  'azure-learning-path': {
    eyebrow: 'Learning path',
    title: 'From cloud vocabulary to architecture judgment',
    introduction:
      'A certification is useful when each layer of study changes how you frame and test a real design decision.',
    stages: [
      {
        label: '01',
        title: 'Fundamentals',
        description:
          'Shared language for cloud services, responsibility, cost, governance, and support.',
      },
      {
        label: '02',
        title: 'Workload',
        description:
          'Connect services to a business workflow, quality attributes, and operational constraints.',
      },
      {
        label: '03',
        title: 'Tradeoffs',
        description: 'Compare security, reliability, cost, latency, ownership, and reversibility.',
      },
      {
        label: '04',
        title: 'Evidence',
        description:
          'Build, test, observe, and document enough of the design to challenge assumptions.',
      },
    ],
    caption:
      'The credential marks progress. The durable value is a repeatable way to make better architecture decisions.',
  },
  'wellos-learning-loop': {
    eyebrow: 'Project retrospective',
    title: 'What WellOS let me test as one connected system',
    introduction:
      'The project brought oilfield workflows, software boundaries, cloud infrastructure, and operational controls into the same architecture exercise.',
    stages: [
      {
        label: '01',
        title: 'Domain workflow',
        description:
          'Model wells, production, work orders, revenue, field activity, and SCADA as business capabilities.',
      },
      {
        label: '02',
        title: 'System boundaries',
        description:
          'Separate tenant data, operational telemetry, user identity, control-plane work, and application APIs.',
      },
      {
        label: '03',
        title: 'Delivery system',
        description:
          'Exercise Rust services, Next.js portals, PostgreSQL, containers, tests, and infrastructure as code together.',
      },
      {
        label: '04',
        title: 'Architecture learning',
        description:
          'Use implementation friction to challenge scope, complexity, ownership, security, and production-readiness assumptions.',
      },
    ],
    caption:
      'WellOS was a personal engineering project, not a production customer deployment. Its value was the breadth of architecture questions it made concrete.',
  },
  'openclaw-control-plane': {
    eyebrow: 'Product architecture',
    title: 'The customer saw one assistant; the platform carried the operating work',
    introduction:
      'OpenClaw VPS separated the simple customer journey from the infrastructure, identity, billing, and recovery responsibilities behind it.',
    stages: [
      {
        label: '01',
        title: 'Choose and configure',
        description:
          'The customer selected a hosted assistant, model access, and supported communication channel.',
      },
      {
        label: '02',
        title: 'Provision safely',
        description:
          'The control plane persisted intent, created the private server, and tracked deployment state.',
      },
      {
        label: '03',
        title: 'Operate visibly',
        description:
          'Customer and admin surfaces exposed health, billing, support, and lifecycle actions.',
      },
      {
        label: '04',
        title: 'Reconcile reality',
        description:
          'Provider state, application state, and billing evidence were compared before repair or retry.',
      },
    ],
    caption:
      'A managed service is valuable because it absorbs operational complexity without hiding important state from the customer or operator.',
  },
  'listblaze-workflow': {
    eyebrow: 'Owner-local workflow',
    title: 'ListBlaze turned a folder of photos into reviewed listing intent',
    introduction:
      'The desktop workflow kept evidence, AI suggestions, human decisions, inventory state, and marketplace effects visibly separate.',
    stages: [
      {
        label: '01',
        title: 'Import evidence',
        description:
          'Bring in item photos and preserve the files and job context used for later decisions.',
      },
      {
        label: '02',
        title: 'Propose',
        description:
          'Use AI and marketplace data to suggest structured listing fields without treating guesses as facts.',
      },
      {
        label: '03',
        title: 'Review and approve',
        description:
          'Let the operator correct details, resolve warnings, and bind the exact publishable snapshot.',
      },
      {
        label: '04',
        title: 'Publish and reconcile',
        description:
          'Track provider requests, known outcomes, inventory changes, and recovery work durably.',
      },
    ],
    caption:
      'The central design rule was simple: AI could accelerate preparation, but only the operator could authorize a marketplace effect.',
  },
  'blazeos-proof-chain': {
    eyebrow: 'Work in progress',
    title: 'BlazeOS is building a traceable path from photo to cash',
    introduction:
      'The successor architecture treats every important transition as a contract with ownership, evidence, and recovery behavior.',
    stages: [
      {
        label: 'Capture',
        title: 'Photo truth',
        description:
          'Preserve immutable originals, item identity, capture quality, and an explicit handoff.',
      },
      {
        label: 'Prepare',
        title: 'Reviewed intent',
        description:
          'Research and AI produce typed proposals that remain bound to the source revision.',
      },
      {
        label: 'Publish',
        title: 'Known provider state',
        description:
          'Persist immutable intent and idempotency before any authorized marketplace request.',
      },
      {
        label: 'Reconcile',
        title: 'Inventory truth',
        description:
          'Orders, reservations, movements, and exceptions converge without inventing certainty.',
      },
    ],
    caption:
      'BlazeOS is active engineering work, not a finished product. Its value today is the explicit system of contracts and verification gates being implemented.',
  },
  'archgauge-evidence-loop': {
    eyebrow: 'Open-source work in progress',
    title: 'ArchGauge is designed to make architecture claims answerable',
    introduction:
      'ArchGauge and Acme FieldOps connect repository evidence to findings without letting a model silently become the judge.',
    stages: [
      {
        label: '01',
        title: 'Bound evidence',
        description:
          'Ingest a safe, explicit repository snapshot without executing submitted code.',
      },
      {
        label: '02',
        title: 'Cite findings',
        description:
          'Connect each observation to the exact evidence and state what remains unknown.',
      },
      {
        label: '03',
        title: 'Score deterministically',
        description:
          'Use versioned rules and reproducible checks for conclusions that must be consistent.',
      },
      {
        label: '04',
        title: 'Publish with judgment',
        description:
          'A human reviews risks, limitations, and recommendations before a report becomes authoritative.',
      },
    ],
    caption:
      'Acme FieldOps will provide clean, flawed, remediated, and insufficient-evidence scenarios so the review process can be tested against known conditions.',
  },
  'field-workflow-first': {
    eyebrow: 'Architecture lens',
    title: 'Start with the field decision, then move outward',
    introduction:
      'An oilfield system earns its place by improving a real decision without weakening safety, data ownership, or recovery.',
    stages: [
      {
        label: '01',
        title: 'Field task',
        description: 'Name who is working, where the work happens, and what decision must be made.',
      },
      {
        label: '02',
        title: 'Operating constraints',
        description:
          'Account for connectivity, device conditions, timing, safety, and existing procedures.',
      },
      {
        label: '03',
        title: 'System boundaries',
        description:
          'Separate control, telemetry, transactional records, analytics, and human approval.',
      },
      {
        label: '04',
        title: 'Operational proof',
        description:
          'Define success, failure, reconciliation, support ownership, and measurable value.',
      },
    ],
    caption:
      'The architecture follows the workflow. A service belongs in the design only when its role and failure behavior are clear.',
  },
  'offline-state-model': {
    eyebrow: 'State model',
    title: 'Offline work is a sequence of explicit states',
    introduction:
      'Treating “offline” as a single boolean hides the decisions users and support teams actually need to make.',
    stages: [
      {
        label: '01',
        title: 'Local draft',
        description:
          'Work is captured on the device with a durable local identifier and clear ownership.',
      },
      {
        label: '02',
        title: 'Queued',
        description: 'The user can see that submission is pending and can continue working safely.',
      },
      {
        label: '03',
        title: 'Synchronizing',
        description: 'The client sends idempotent operations with ordering and version context.',
      },
      {
        label: '04',
        title: 'Accepted or conflicted',
        description:
          'The authoritative system confirms the change or returns a resolvable conflict.',
      },
    ],
    caption:
      'Pending, failed, conflicted, and reconciled are product states—not implementation details.',
  },
  'ot-cloud-boundary': {
    eyebrow: 'Trust boundary',
    title: 'Move operational data without moving control authority',
    introduction:
      'Cloud analytics can consume useful operational context while the control environment keeps its own safety and availability boundaries.',
    stages: [
      {
        label: 'OT',
        title: 'Control environment',
        description:
          'SCADA, PLCs, historians, and operators retain deterministic control and local resilience.',
      },
      {
        label: 'DMZ',
        title: 'Brokered exchange',
        description:
          'Approved gateways filter, buffer, validate, and audit traffic across the boundary.',
      },
      {
        label: 'Cloud',
        title: 'Data platform',
        description:
          'Streaming and batch paths support governed analytics, applications, and AI use cases.',
      },
      {
        label: 'Action',
        title: 'Human-owned decision',
        description:
          'Insights return through an approved workflow, not an unrestricted control channel.',
      },
    ],
    caption:
      'The important question is not whether data can reach the cloud. It is what authority crosses each boundary, in which direction, and under whose control.',
  },
  'integration-control-plane': {
    eyebrow: 'Integration model',
    title: 'Put policy around movement, not inside every connection',
    introduction:
      'A reusable integration layer separates identity, contracts, routing, reliability, and audit from individual systems of record.',
    stages: [
      {
        label: '01',
        title: 'Identity and policy',
        description:
          'Authenticate users and workloads; authorize the exact operation and data scope.',
      },
      {
        label: '02',
        title: 'Contract',
        description:
          'Version schemas and APIs so producers and consumers can change independently.',
      },
      {
        label: '03',
        title: 'Delivery',
        description:
          'Choose synchronous calls, queues, events, or streams based on semantics—not fashion.',
      },
      {
        label: '04',
        title: 'Evidence',
        description:
          'Trace the request, record decisions, detect failures, and reconcile durable outcomes.',
      },
    ],
    caption:
      'The goal is not one giant integration platform. It is a consistent set of controls that makes each connection understandable and supportable.',
  },
  'build-buy-integrate': {
    eyebrow: 'Decision framework',
    title: 'Build, buy, or integrate by locating the durable advantage',
    introduction:
      'Choose where custom engineering creates value and where a supported capability reduces undifferentiated ownership.',
    stages: [
      {
        label: 'Build',
        title: 'Differentiate',
        description:
          'Custom behavior is central to the operating model and worth owning for years.',
      },
      {
        label: 'Buy',
        title: 'Standardize',
        description:
          'The capability is common, supportable, and cheaper to consume than reproduce.',
      },
      {
        label: 'Integrate',
        title: 'Compose',
        description: 'Existing systems remain authoritative while a governed workflow joins them.',
      },
      {
        label: 'Revisit',
        title: 'Use triggers',
        description:
          'Cost, risk, adoption, vendor change, or new constraints can reopen the decision.',
      },
    ],
    caption:
      'A responsible decision includes lifecycle cost, exit options, security, data ownership, and the operational burden—not only implementation speed.',
  },
  'iac-change-path': {
    eyebrow: 'Infrastructure delivery',
    title: 'A production infrastructure change should leave evidence',
    introduction:
      'Infrastructure as code is most valuable when intent, review, deployment, drift, and recovery remain connected.',
    stages: [
      {
        label: '01',
        title: 'Declare',
        description: 'Define the desired state in reviewed, version-controlled modules.',
      },
      {
        label: '02',
        title: 'Preview',
        description:
          'Inspect Terraform plan, Bicep what-if, policy results, and security findings.',
      },
      {
        label: '03',
        title: 'Promote',
        description: 'Use governed identities and staged environments to apply the same source.',
      },
      {
        label: '04',
        title: 'Reconcile',
        description: 'Detect drift, verify health, and preserve a tested recovery path.',
      },
    ],
    caption:
      'The template is only one part of IaC. The delivery and reconciliation loop is what makes infrastructure repeatable.',
  },
  'safe-delivery-loop': {
    eyebrow: 'Release system',
    title: 'CI/CD should reduce uncertainty at each step',
    introduction:
      'A useful pipeline turns a change into progressively stronger evidence before it reaches the full production audience.',
    stages: [
      {
        label: '01',
        title: 'Change',
        description: 'Small reviewed changes carry tests, ownership, and a clear reason.',
      },
      {
        label: '02',
        title: 'Verify',
        description: 'Build, test, scan, and validate contracts and infrastructure previews.',
      },
      {
        label: '03',
        title: 'Expose gradually',
        description: 'Use staging, flags, canaries, or rings that match the workload risk.',
      },
      {
        label: '04',
        title: 'Observe and recover',
        description:
          'Watch business and technical signals; stop, roll back, or roll forward deliberately.',
      },
    ],
    caption:
      'Deployment frequency matters only when the organization can see bad changes quickly and recover without improvising.',
  },
  'identity-control-plane': {
    eyebrow: 'Security model',
    title: 'Identity connects users, workloads, data, tools, and audit',
    introduction:
      'Enterprise AI adds non-human actors, but it does not remove the need for explicit authentication, authorization, and least privilege.',
    stages: [
      {
        label: '01',
        title: 'Authenticate',
        description: 'Establish which person, service, agent, or pipeline is making the request.',
      },
      {
        label: '02',
        title: 'Authorize',
        description: 'Evaluate action, resource, data scope, context, and current policy.',
      },
      {
        label: '03',
        title: 'Execute',
        description:
          'Use short-lived, task-specific permissions rather than broad inherited access.',
      },
      {
        label: '04',
        title: 'Audit',
        description:
          'Record who requested what, which identity acted, and what durable change resulted.',
      },
    ],
    caption:
      'A model should never become a shortcut around the permissions the underlying business action requires.',
  },
  'production-readiness-views': {
    eyebrow: 'Review model',
    title: 'Production readiness is a set of connected views',
    introduction:
      'A feature can work and still be unsafe to operate. Review the whole workload, not only its primary code path.',
    stages: [
      {
        label: '01',
        title: 'Purpose and ownership',
        description: 'Business outcome, users, service owner, support model, and decision rights.',
      },
      {
        label: '02',
        title: 'Quality attributes',
        description:
          'Security, reliability, performance, cost, privacy, and data integrity targets.',
      },
      {
        label: '03',
        title: 'Change and failure',
        description: 'Deployment, migration, dependency failures, degraded behavior, and recovery.',
      },
      {
        label: '04',
        title: 'Operational evidence',
        description: 'Health model, telemetry, alerts, runbooks, drills, and acceptance criteria.',
      },
    ],
    caption:
      'Readiness is not a meeting at the end. It is accumulated evidence that the workload can be changed and supported responsibly.',
  },
  'observability-question-map': {
    eyebrow: 'Health model',
    title: 'Telemetry should answer operational questions',
    introduction:
      'Collect signals because they help someone decide, diagnose, or recover—not because a dashboard has empty space.',
    stages: [
      {
        label: '01',
        title: 'Is it useful?',
        description:
          'Business outcomes and user-visible success establish the top-level health signal.',
      },
      {
        label: '02',
        title: 'Is it healthy?',
        description:
          'Service levels, saturation, latency, errors, and dependency health expose degradation.',
      },
      {
        label: '03',
        title: 'Why did it happen?',
        description:
          'Correlated traces, metrics, logs, deployment data, and identifiers narrow the cause.',
      },
      {
        label: '04',
        title: 'Did recovery work?',
        description:
          'Post-action signals confirm containment, repair, reconciliation, and restored service.',
      },
    ],
    caption:
      'Good observability shortens the distance between a surprising symptom and a safe decision.',
  },
  'ai-pattern-selector': {
    eyebrow: 'AI design choice',
    title: 'Use the least probabilistic pattern that solves the task',
    introduction:
      'Start with the decision and acceptable error, then add retrieval, tools, or agents only when each earns its complexity.',
    stages: [
      {
        label: '01',
        title: 'Deterministic code',
        description:
          'Use rules, queries, and workflows when the answer must be exact and explainable.',
      },
      {
        label: '02',
        title: 'Model call',
        description:
          'Use generation or classification when bounded language judgment creates value.',
      },
      {
        label: '03',
        title: 'Retrieval or tools',
        description:
          'Ground the model in approved knowledge or let it request narrowly scoped actions.',
      },
      {
        label: '04',
        title: 'Agentic workflow',
        description:
          'Add planning and iteration only when the task needs it and controls can contain it.',
      },
    ],
    caption:
      'More autonomy is not automatically more capable. It expands the system’s state space, permissions, evaluation burden, and failure modes.',
  },
  'ai-evaluation-lifecycle': {
    eyebrow: 'Assurance loop',
    title: 'Evaluate the task before, during, and after release',
    introduction:
      'AI quality is not one score. It is a versioned set of business, safety, security, cost, and reliability expectations.',
    stages: [
      {
        label: '01',
        title: 'Define',
        description:
          'Name the task, unacceptable outcomes, review policy, and measurable acceptance criteria.',
      },
      {
        label: '02',
        title: 'Test offline',
        description:
          'Use representative, adversarial, edge-case, and regression datasets before release.',
      },
      {
        label: '03',
        title: 'Release safely',
        description:
          'Limit audience and permissions while tracing model, prompt, retrieval, and tool behavior.',
      },
      {
        label: '04',
        title: 'Learn in production',
        description: 'Sample outcomes, review failures, add cases, and gate every material change.',
      },
    ],
    caption:
      'The evaluation set is a living contract between the business task and the system that attempts it.',
  },
  'agent-authority-ladder': {
    eyebrow: 'Authority ladder',
    title: 'Increase agent authority one rung at a time',
    introduction:
      'Separate what an AI system may recommend from what it may change, then require stronger evidence at every rung.',
    stages: [
      {
        label: '01',
        title: 'Read',
        description:
          'Retrieve approved information with source, tenant, and sensitivity boundaries.',
      },
      {
        label: '02',
        title: 'Recommend',
        description: 'Draft an answer or proposed action while a person owns the decision.',
      },
      {
        label: '03',
        title: 'Prepare',
        description: 'Create a reversible change for explicit human review and approval.',
      },
      {
        label: '04',
        title: 'Execute',
        description:
          'Act only inside narrow policy, budget, identity, audit, and recovery controls.',
      },
    ],
    caption:
      'Human approval is meaningful only when the reviewer has context, time, authority, and a clear view of what will happen.',
  },
  'data-product-contract': {
    eyebrow: 'Data product',
    title: 'A useful data product is more than a curated table',
    introduction:
      'Consumers need a stable meaning, an accountable owner, enforceable access, quality signals, and traceable lineage.',
    stages: [
      {
        label: '01',
        title: 'Meaning',
        description:
          'Define the business concept, source authority, keys, units, and time semantics.',
      },
      {
        label: '02',
        title: 'Contract',
        description: 'Publish schema, freshness, quality, compatibility, and support expectations.',
      },
      {
        label: '03',
        title: 'Governance',
        description:
          'Apply identity-based access, environment separation, classification, and audit.',
      },
      {
        label: '04',
        title: 'Consumption',
        description:
          'Serve analytics, applications, and AI without bypassing the source-of-truth boundary.',
      },
    ],
    caption:
      'AI cannot repair ambiguous business meaning. It can only make ambiguity easier to distribute.',
  },
  'architecture-decision-loop': {
    eyebrow: 'Decision discipline',
    title: 'Reduce uncertainty before increasing commitment',
    introduction:
      'Architecture decisions become safer when assumptions, evidence, reversibility, and operating consequences stay visible.',
    stages: [
      {
        label: '01',
        title: 'Frame the decision',
        description: 'Name the outcome, constraints, owners, deadline, and cost of being wrong.',
      },
      {
        label: '02',
        title: 'Expose assumptions',
        description:
          'Separate known facts from estimates, preferences, dependencies, and unanswered questions.',
      },
      {
        label: '03',
        title: 'Buy evidence',
        description:
          'Use a spike, prototype, measurement, threat model, or customer conversation to reduce the biggest risk.',
      },
      {
        label: '04',
        title: 'Commit and revisit',
        description:
          'Record the choice, consequences, rollback path, and the trigger that would reopen it.',
      },
    ],
    caption:
      'The goal is not certainty. It is a decision whose risk, evidence, and next correction are understood.',
  },
  'ai-103-study-map': {
    eyebrow: 'Current study map',
    title: 'AI-103 connects AI features to an operated workload',
    introduction:
      'The useful learning path runs from model access through knowledge, agents, evaluation, security, and production operations.',
    stages: [
      {
        label: '01',
        title: 'Models and prompts',
        description:
          'Select, configure, and call models while managing structured outputs and limits.',
      },
      {
        label: '02',
        title: 'Knowledge and tools',
        description:
          'Ground responses, connect approved data, and expose narrowly defined actions.',
      },
      {
        label: '03',
        title: 'Agents and orchestration',
        description: 'Manage state, tool choice, identity, and multi-step behavior deliberately.',
      },
      {
        label: '04',
        title: 'Evaluate and operate',
        description:
          'Test quality and safety, trace behavior, monitor cost and latency, and respond to failures.',
      },
    ],
    caption:
      'The exam is a milestone. The goal is the ability to design and operate an AI application whose behavior can be tested and governed.',
  },
}

const boards: Record<string, InfographicBoard> = {
  'wellos-platform-map': {
    layout: 'layers',
    details: [
      {
        heading: 'Authority checks',
        items: [
          'Name the system of record',
          'Keep SCADA control separate',
          'Make tenant boundaries enforceable',
        ],
      },
      {
        heading: 'Operating proof',
        items: [
          'Trace field-to-office handoffs',
          'Show pending and failed work',
          'Assign support and recovery ownership',
        ],
      },
    ],
  },
  'azure-learning-path': {
    layout: 'timeline',
    details: [
      {
        heading: 'Architecture questions',
        items: [
          'Which service fits the workload?',
          'What is the shared-responsibility boundary?',
          'How will cost and failure be measured?',
        ],
      },
      {
        heading: 'Evidence of learning',
        items: [
          'Explain tradeoffs in plain language',
          'Build a representative workload',
          'Document limits as clearly as strengths',
        ],
      },
    ],
  },
  'wellos-learning-loop': {
    layout: 'pillars',
    details: [
      {
        heading: 'What the project tested',
        items: [
          'Oilfield workflow modeling',
          'Tenant and telemetry boundaries',
          'Cloud delivery as part of design',
        ],
      },
      {
        heading: 'What the project taught',
        items: [
          'Breadth creates operating cost',
          'Security cannot be bolted on',
          'A narrower first product is safer',
        ],
      },
    ],
  },
  'openclaw-control-plane': {
    layout: 'layers',
    details: [
      {
        heading: 'Customer promise',
        items: [
          'A simple setup path',
          'Visible service health',
          'Understandable lifecycle actions',
        ],
      },
      {
        heading: 'Platform responsibility',
        items: [
          'Reconcile provider state',
          'Protect identity and billing',
          'Recover without inventing success',
        ],
      },
    ],
  },
  'listblaze-workflow': {
    layout: 'lifecycle',
    details: [
      {
        heading: 'Human control points',
        items: [
          'Review generated facts',
          'Resolve warnings',
          'Approve the exact publishable snapshot',
        ],
      },
      {
        heading: 'Durable evidence',
        items: [
          'Preserve source photos',
          'Record provider requests',
          'Reconcile inventory after external effects',
        ],
      },
    ],
  },
  'blazeos-proof-chain': {
    layout: 'lifecycle',
    details: [
      {
        heading: 'Invariants',
        items: [
          'Original evidence remains immutable',
          'Approval binds to a revision',
          'Inventory changes have one owner',
        ],
      },
      {
        heading: 'Failure controls',
        items: [
          'Persist intent before side effects',
          'Make retries idempotent',
          'Quarantine ambiguous outcomes',
        ],
      },
    ],
  },
  'archgauge-evidence-loop': {
    layout: 'lifecycle',
    details: [
      {
        heading: 'Trust controls',
        items: [
          'Never execute submitted code',
          'Cite every material finding',
          'Separate deterministic rules from AI judgment',
        ],
      },
      {
        heading: 'Benchmark cases',
        items: [
          'Known-good evidence',
          'Known defects',
          'Remediated conditions and insufficient evidence',
        ],
      },
    ],
  },
  'field-workflow-first': {
    layout: 'timeline',
    details: [
      {
        heading: 'Discovery inputs',
        items: [
          'Person and decision',
          'Location and connectivity',
          'Safety and timing constraints',
        ],
      },
      {
        heading: 'Design outputs',
        items: [
          'Source-of-truth map',
          'Failure and reconciliation states',
          'Outcome and support measures',
        ],
      },
    ],
  },
  'offline-state-model': {
    layout: 'lifecycle',
    details: [
      {
        heading: 'State-machine checks',
        items: [
          'Every operation has an identity',
          'Pending is visible to the user',
          'Conflicts have an explicit owner',
        ],
      },
      {
        heading: 'Field-readiness checks',
        items: [
          'Local data is protected',
          'Restart does not lose intent',
          'Support can inspect synchronization history',
        ],
      },
    ],
  },
  'ot-cloud-boundary': {
    layout: 'boundary',
    details: [
      {
        heading: 'Boundary controls',
        items: [
          'Default to outbound data flow',
          'Filter and buffer at the edge',
          'Authenticate workloads and encrypt transport',
        ],
      },
      {
        heading: 'Prove degraded behavior',
        items: [
          'Cloud outage does not stop control',
          'Duplicate and delayed data are handled',
          'Advice cannot silently become command',
        ],
      },
    ],
  },
  'integration-control-plane': {
    layout: 'layers',
    details: [
      {
        heading: 'Shared controls',
        items: [
          'Identity and authorization',
          'Versioned contracts',
          'Routing, retry, audit, and observability',
        ],
      },
      {
        heading: 'Migration checks',
        items: [
          'Define source authority',
          'Handle duplicates and reordering',
          'Retire temporary paths deliberately',
        ],
      },
    ],
  },
  'build-buy-integrate': {
    layout: 'decision',
    details: [
      {
        heading: 'Score every option',
        items: ['Strategic differentiation', 'Full lifecycle cost', 'Security and data ownership'],
      },
      {
        heading: 'Protect the exit',
        items: [
          'Export data in usable form',
          'Isolate vendor-specific code',
          'Record triggers that reopen the decision',
        ],
      },
    ],
  },
  'iac-change-path': {
    layout: 'lifecycle',
    details: [
      {
        heading: 'Before apply',
        items: [
          'Review the plan or what-if output',
          'Run policy and security checks',
          'Use a scoped deployment identity',
        ],
      },
      {
        heading: 'After apply',
        items: [
          'Verify workload health',
          'Detect configuration drift',
          'Exercise recovery and replacement',
        ],
      },
    ],
  },
  'safe-delivery-loop': {
    layout: 'lifecycle',
    details: [
      {
        heading: 'Release gates',
        items: [
          'One reproducible artifact',
          'Tests, scans, and contract checks',
          'Approval matched to change risk',
        ],
      },
      {
        heading: 'Production controls',
        items: [
          'Progressive exposure',
          'Business and technical health signals',
          'Practiced rollback or roll-forward',
        ],
      },
    ],
  },
  'identity-control-plane': {
    layout: 'layers',
    details: [
      {
        heading: 'Four identities',
        items: [
          'Human requester',
          'Application workload',
          'AI agent or orchestration',
          'Tool or downstream service',
        ],
      },
      {
        heading: 'Non-negotiable controls',
        items: [
          'Short-lived least privilege',
          'Permission-aware retrieval',
          'Business-action audit trail',
        ],
      },
    ],
  },
  'production-readiness-views': {
    layout: 'pillars',
    details: [
      {
        heading: 'Readiness evidence',
        items: [
          'Named owner and service level',
          'Tested failure behavior',
          'Telemetry tied to user impact',
        ],
      },
      {
        heading: 'Release decision',
        items: [
          'Known residual risks',
          'Runbooks and escalation path',
          'Recovery proof—not only a rollback button',
        ],
      },
    ],
  },
  'observability-question-map': {
    layout: 'pillars',
    details: [
      {
        heading: 'Correlate',
        items: [
          'Business outcome',
          'Request or job identifier',
          'Deployment and dependency context',
        ],
      },
      {
        heading: 'Alert only when',
        items: [
          'A user outcome is at risk',
          'Someone owns the response',
          'A safe action or escalation exists',
        ],
      },
    ],
  },
  'ai-pattern-selector': {
    layout: 'decision',
    details: [
      {
        heading: 'Earn the next layer',
        items: [
          'Deterministic code cannot solve the task',
          'Expected value exceeds added risk',
          'The complete path can be evaluated',
        ],
      },
      {
        heading: 'Complexity added',
        items: [
          'More state and permissions',
          'More latency and cost',
          'More failure and recovery paths',
        ],
      },
    ],
  },
  'ai-evaluation-lifecycle': {
    layout: 'lifecycle',
    details: [
      {
        heading: 'Evaluation dimensions',
        items: [
          'Task quality and groundedness',
          'Safety, security, and privacy',
          'Latency, reliability, and cost',
        ],
      },
      {
        heading: 'Change controls',
        items: [
          'Version model, prompt, tools, and data',
          'Keep regression cases',
          'Review production failures before promotion',
        ],
      },
    ],
  },
  'agent-authority-ladder': {
    layout: 'decision',
    details: [
      {
        heading: 'Controls grow by rung',
        items: [
          'Stronger identity and authorization',
          'Broader evaluation and monitoring',
          'Tighter budgets, approval, and recovery',
        ],
      },
      {
        heading: 'Stop escalation when',
        items: [
          'The action is irreversible',
          'The reviewer lacks context',
          'Failure cannot be bounded or reconciled',
        ],
      },
    ],
  },
  'data-product-contract': {
    layout: 'layers',
    details: [
      {
        heading: 'Contract fields',
        items: [
          'Business meaning and owner',
          'Schema, freshness, and quality',
          'Classification, lineage, and support',
        ],
      },
      {
        heading: 'AI consumption checks',
        items: [
          'Retrieval preserves permissions',
          'Sources remain attributable',
          'Stale or ambiguous data is visible',
        ],
      },
    ],
  },
  'architecture-decision-loop': {
    layout: 'lifecycle',
    details: [
      {
        heading: 'Buy evidence cheaply',
        items: [
          'Measure the risky assumption',
          'Run a focused spike',
          'Threat-model the consequential path',
        ],
      },
      {
        heading: 'Decision record',
        items: [
          'Choice and consequences',
          'Confidence and unresolved questions',
          'Rollback path and revisit trigger',
        ],
      },
    ],
  },
  'ai-103-study-map': {
    layout: 'pillars',
    details: [
      {
        heading: 'Application controls',
        items: [
          'Version prompts and models',
          'Validate structured output',
          'Authorize retrieval and tools',
        ],
      },
      {
        heading: 'Operational proof',
        items: [
          'Representative evaluations',
          'Trace cost and latency',
          'Monitor safety and business outcomes',
        ],
      },
    ],
  },
}

export function BlogInfographic({ id }: { id: string }) {
  const graphic = infographics[id]
  const board = boards[id]
  if (!graphic || !board) return null

  const layoutLabel: Record<InfographicLayout, string> = {
    boundary: 'Trust boundary map',
    decision: 'Decision framework',
    layers: 'Architecture stack',
    lifecycle: 'Operating lifecycle',
    pillars: 'Review pillars',
    timeline: 'Discovery path',
  }

  const stageGridClass: Record<InfographicLayout, string> = {
    boundary: 'lg:grid-cols-4',
    decision: 'md:grid-cols-2',
    layers: 'grid-cols-1',
    lifecycle: 'lg:grid-cols-4',
    pillars: 'lg:grid-cols-4',
    timeline: 'lg:grid-cols-4',
  }

  const markerColors = ['bg-[#d8e7ef]', 'bg-[#e5efd8]', 'bg-[#f6e7ad]', 'bg-[#ead9d4]']

  return (
    <figure
      className="not-prose my-14 overflow-hidden rounded-2xl border-2 border-slate-700 bg-[#fbf8ef] text-slate-900 shadow-[var(--shadow-lg)]"
      aria-labelledby={`infographic-${id}`}
    >
      <div className="border-b-2 border-slate-700 px-5 py-6 sm:px-8 sm:py-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-red-700">
            {graphic.eyebrow}
          </p>
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-500 bg-white/70 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-slate-700">
            <Layers3 className="h-3.5 w-3.5" aria-hidden="true" />
            {layoutLabel[board.layout]}
          </span>
        </div>
        <h2
          id={`infographic-${id}`}
          className="mt-3 max-w-5xl text-2xl leading-tight tracking-tight text-slate-950 sm:text-3xl"
        >
          {graphic.title}
        </h2>
        <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-700 sm:text-base">
          {graphic.introduction}
        </p>
      </div>

      <ol
        className={`grid gap-3 border-b-2 border-slate-700 p-5 sm:p-8 ${stageGridClass[board.layout]}`}
        aria-label={graphic.title}
      >
        {graphic.stages.map((stage, index) => (
          <li
            key={`${stage.label}-${stage.title}`}
            className={`relative border-2 border-slate-700 p-4 shadow-[3px_3px_0_rgb(51_65_85_/_0.16)] ${
              board.layout === 'layers'
                ? 'sm:grid sm:grid-cols-[9rem_1fr] sm:items-center sm:gap-5'
                : ''
            } ${markerColors[index % markerColors.length]}`}
          >
            <div
              className={`flex items-center justify-between ${board.layout === 'layers' ? 'mb-2 sm:mb-0' : 'mb-3'}`}
            >
              <span className="inline-flex min-w-8 items-center justify-center rounded-full border border-slate-700 bg-[#fbf8ef] px-2 py-1 font-mono text-[0.68rem] font-semibold text-slate-800">
                {stage.label}
              </span>
              {index < graphic.stages.length - 1 ? (
                <>
                  <ArrowDown
                    className={`h-4 w-4 text-slate-600 ${board.layout === 'layers' ? '' : 'lg:hidden'}`}
                    aria-hidden="true"
                  />
                  <ArrowRight
                    className={`h-4 w-4 text-slate-600 ${board.layout === 'layers' ? 'hidden' : 'hidden lg:block'}`}
                    aria-hidden="true"
                  />
                </>
              ) : null}
            </div>
            <div>
              <h3 className="text-base font-semibold text-slate-950 sm:text-lg">{stage.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">{stage.description}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="grid gap-px bg-slate-700 md:grid-cols-2">
        {board.details.map((detail, detailIndex) => (
          <section key={detail.heading} className="bg-[#fffdf7] px-5 py-6 sm:px-8">
            <h3 className="flex items-center gap-2 text-base font-semibold uppercase tracking-[0.06em] text-slate-950">
              <Circle
                className={`h-4 w-4 ${detailIndex === 0 ? 'fill-[#d8e7ef]' : 'fill-[#f6e7ad]'}`}
                aria-hidden="true"
              />
              {detail.heading}
            </h3>
            <ul className="mt-4 space-y-3">
              {detail.items.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-emerald-700" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <figcaption className="border-t-2 border-slate-700 bg-[#f2ecdf] px-5 py-4 text-sm leading-6 text-slate-700 sm:px-8">
        <span className="mr-2 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-slate-950">
          Working principle
        </span>
        {graphic.caption}
      </figcaption>
    </figure>
  )
}
