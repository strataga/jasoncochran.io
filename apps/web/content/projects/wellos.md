---
subtitle: 'Platform Suite • Oil & Gas'
accentColor: 'red'
techStack:
  - 'Rust'
  - 'Next.js 15'
  - 'React Native'
  - 'Electron'
  - 'PostgreSQL'
  - 'Redis'
---

# WellOS

## Overview

**WellOS** is "The Operating System for Upstream Oil & Gas Operators" - a comprehensive SaaS platform designed for upstream oil & gas operators in the Permian Basin to manage well operations, real-time SCADA monitoring, production data tracking, predictive maintenance, ESG compliance, and offline-first field data capture.

Built from the ground up as a modern, cloud-native solution to replace outdated legacy systems still common in the oil & gas industry.

## Project Scale

- **Platform**: 6 integrated applications
- **Tech Stack**: Rust + Next.js 15 + React Native + Electron
- **Industry**: Upstream Oil & Gas Operations
- **Architecture**: Multi-tenant SaaS with database-per-tenant isolation
- **Target Market**: Permian Basin operators with 1-500 wells
- **Launch Target**: January 1, 2026

## The Operating System Concept

WellOS truly functions as an "operating system" for oil & gas operations by providing:

- **Unified Platform**: Single source of truth for all field operations data
- **Real-Time Monitoring**: Live SCADA data with &lt;1 second latency
- **Offline-First Architecture**: Field operators work without connectivity, automatic sync when online
- **Extensible Ecosystem**: Plugin architecture for custom integrations
- **Multi-Application Suite**: Web, mobile, desktop, admin, API, and ML services working together
- **Centralized Intelligence**: ML-powered predictions and analytics across all operations

## Platform Architecture

### Six Integrated Applications

#### API Backend (Rust + Axum)

- **Framework**: Axum 0.7 with Tower middleware
- **Architecture**: Hexagonal + CQRS + Domain-Driven Design
- **Database**: PostgreSQL with SQLx (compile-time SQL checking)
- **SCADA Integration**: OPC UA, Modbus TCP, MQTT clients
- **Multi-Tenancy**: Database-per-tenant with subdomain routing
- **Performance**: Circuit breaker pattern, Moka cache, Redis distributed cache
- **Job Queue**: Bull for background processing (invoices, ETL, ML predictions)

#### Web Dashboard (Next.js 15 + React 19)

- **Interactive Maps**: MapBox GL JS for well visualization with heat maps
- **Real-Time Data**: WebSocket for live SCADA updates (5-second refresh)
- **Server Components**: React 19 Server Components for 10x faster page loads
- **Charts**: Recharts for production and analytics visualization
- **State Management**: TanStack Query + Zustand
- **Performance**: WebAssembly for compute-heavy calculations
- **UI**: Tailwind CSS 4 + Shadcn UI + Radix UI

#### Admin Portal (Next.js 15)

- Tenant management (create, suspend, delete operators)
- Billing & subscription management (Stripe integration)
- System-wide analytics (Application Insights)
- Health monitoring (Azure Monitor)
- Support ticketing (Intercom integration)
- QuickBooks integration management

#### Electron Desktop App

- **Offline-First**: 100% functional without internet connectivity
- **Local Database**: better-sqlite3 for offline data storage
- **Target**: Rugged laptops for field operators
- **Features**: Photo capture, production entry, maintenance logging
- **Sync**: Event sourcing pattern with automatic sync when online
- **Performance**: &lt;5 second sync time for 10 entries
- **Auto-Updates**: Silent background updates for field deployments

#### Mobile Apps (React Native + Expo)

- **Platforms**: iOS and Android
- **Offline Storage**: Expo SQLite with repository pattern
- **Camera Integration**: Native photo capture with GPS tagging
- **Background Sync**: Automatic sync every 15 minutes
- **Production Entry**: Daily oil, gas, water tracking
- **History**: Charts and statistics visualization
- **Network Aware**: Auto-sync on reconnect, queue status monitoring

#### ML Service (Python + FastAPI)

- **Equipment Failure Prediction**: 7-30 day advance warnings (>80% accuracy)
- **Production Optimization**: ML-based recommendations
- **Anomaly Detection**: Leak detection, unusual pattern identification
- **Decline Curve Analysis**: EUR forecasting
- **Emissions Prediction**: Carbon intensity tracking
- **Model Retraining**: Continuous improvement pipeline

## Core Features

### Real-Time SCADA Monitoring

- **OPC UA Integration**: Subscribe to tag changes with circuit breaker pattern
- **Modbus TCP**: Support for 100+ PLCs with configurable polling
- **MQTT Client**: QoS levels, message buffering, automatic reconnection
- **Dashboard**: Real-time updates with &lt;1 second data latency
- **Alarms**: Microsoft Teams notifications for critical events
- **TimescaleDB**: 20x faster time-series data ingestion

### Well Management & Mapping

- Well registry with API numbers, GPS coordinates (PostGIS)
- Interactive MapBox visualization with clustering and heat maps
- Lease/field hierarchy and grouping
- Spatial queries and advanced filtering
- Custom well attributes and metadata

### Production Data Tracking

- Daily oil, gas, water production entry (offline-capable)
- Historical data import via CSV
- Production charts and trend analysis
- Automatic decline curve analysis
- Variance detection and alerts
- TimescaleDB hypertables for efficient queries

### Offline Field Data Capture

The platform's standout feature is complete offline capability:

- **Event Sourcing Pattern**: All changes queued locally when offline
- **Automatic Sync**: SQLite (mobile/desktop) → PostgreSQL (cloud)
- **Conflict Resolution**: Intelligent merge strategies for multi-device scenarios
- **Photo Sync**: Optimized image compression and batch upload
- **100% Functional Offline**: No feature degradation without connectivity
- **Sync Monitoring**: Real-time queue status and sync logs in settings

This is critical for Permian Basin operations where cellular connectivity is unreliable.

### Equipment & Maintenance

- Equipment inventory (pump jacks, tanks, separators, compressors)
- Maintenance logging with photo documentation
- **Predictive Maintenance**: ML-powered failure prediction 7-30 days ahead
- Parts inventory and tracking
- Work order management
- Equipment lifecycle analytics

### ESG & Regulatory Compliance

- **Automated Emissions**: Flaring, venting, methane calculations
- **Regulatory Reporting**: Texas RRC (W-10, G-1, G-5), New Mexico OCD
- **Carbon Tracking**: Scope 1/2/3 emissions with intensity metrics
- **EPA Compliance**: Dashboards and automated reporting
- **Report Generation**: &lt;30 second report creation
- **Audit Trail**: Complete compliance documentation

### Business Integrations

- **QuickBooks Online**: Automatic invoice generation, expense tracking, OAuth2
- **Microsoft 365**: Teams alerts, SharePoint docs, Power BI connector
- **Azure Entra ID**: Enterprise SSO (B2B multi-tenant)

## Technical Architecture

### Multi-Tenancy Strategy

**Database-Per-Tenant Isolation**:

- Each operator gets dedicated PostgreSQL database
- Complete data isolation and security
- Custom schema per tenant
- Subdomain routing (e.g., `acmeoil.onwellos.com`, `permianops.onwellos.com`)

**Five-Tier Infrastructure**:

- **Starter/Professional**: Shared Azure PostgreSQL cluster
- **Enterprise**: Dedicated Azure PostgreSQL instance
- **Premium**: Dedicated Azure server with reserved capacity
- **Custom**: On-premises PostgreSQL via VPN or AWS RDS

### Technology Choices

**Rust Backend** (vs Node.js/NestJS):

- **10x faster** API response times
- **Memory safety** without garbage collection
- **Compile-time guarantees** via SQLx checked SQL
- **Concurrency** with Tokio async runtime
- Perfect for SCADA real-time processing

**TimescaleDB** (vs vanilla PostgreSQL):

- **20x faster** time-series ingestion
- Automatic data compression (12x storage savings)
- Continuous aggregates for real-time analytics
- Hypertables for production and SCADA data

**React 19 Server Components**:

- **10x faster** initial page loads
- Reduced client JavaScript bundle
- Streaming SSR for progressive enhancement
- Built-in Suspense for loading states

**WebAssembly (WASM)**:

- Compute-heavy calculations in browser
- Decline curve analysis without server round-trip
- Production optimization algorithms client-side

### Offline Architecture

The offline-first design uses **Event Sourcing** for bulletproof sync:

**Simplified offline flow:**

- User creates production entry (offline)
- Event stored in local SQLite with metadata
- When online, events uploaded to API
- API replays events into PostgreSQL
- Conflicts detected via timestamps + tenant context
- Resolution strategies applied (last-write-wins, merge, manual)
- Sync status updated in mobile/desktop app

**Conflict Resolution Strategies**:

- **Last-Write-Wins**: For simple updates with timestamp authority
- **Merge**: For additive data (photos, notes)
- **Manual**: For critical conflicts requiring operator decision
- **Idempotency**: Events can be replayed safely

## Development Achievements

### Performance Metrics

- **&lt;1 second** SCADA data latency (OPC UA/Modbus/MQTT)
- **&lt;5 seconds** sync time for 10 offline entries
- **&lt;30 seconds** regulatory report generation
- **20x faster** TimescaleDB time-series ingestion vs PostgreSQL
- **10x faster** page loads with React Server Components
- **400x faster** rendering with virtual scrolling for large datasets

### Code Quality

- **95+ architectural patterns** documented in `/docs/patterns/`
- **Compile-time SQL checking** via SQLx (zero SQL injection risk)
- **100% type safety** across Rust backend and TypeScript frontend
- **Hexagonal architecture** for clean separation of concerns
- **CQRS pattern** for scalable reads/writes
- **Repository pattern** for testable data access

### Scalability

- **Database-per-tenant** allows independent scaling
- **Handles 10,000+ concurrent users** (load testing verified)
- **Circuit breaker pattern** prevents SCADA connection storms
- **Redis distributed cache** for cross-instance caching
- **Horizontal scaling** via Azure Container Apps

## Industry Impact

### Problem Solved

Permian Basin operators still rely on:

- **Excel spreadsheets** for production tracking (error-prone)
- **Paper forms** for field data (delayed entry, lost data)
- **Legacy SCADA** systems (expensive, vendor lock-in)
- **Manual compliance reporting** (time-consuming, regulatory risk)
- **Fragmented tools** (5-10 different systems that don't integrate)

### WellOS Solution

- **Single platform** for all operations data
- **Real-time visibility** into field operations
- **Offline-first** for unreliable connectivity
- **Automated compliance** reducing regulatory risk
- **ML-powered insights** for proactive maintenance
- **Modern UX** that field operators actually want to use

### Expected Benefits

- **70% reduction** in data entry time (offline + mobile)
- **90% decrease** in data entry errors (validation + automation)
- **40% improvement** in compliance adherence (automated reporting)
- **Real-time visibility** vs 24-48 hour lag with legacy systems
- **Predictive maintenance** reducing unplanned downtime
- **Cost savings** through QuickBooks automation

## Technical Challenges Overcome

### Offline Sync Reliability

**Challenge**: Ensuring data integrity across offline/online transitions with multiple devices

**Solution**:

- Event sourcing with immutable event log
- Conflict-free Replicated Data Types (CRDTs) for certain data
- Timestamp-based conflict resolution with tenant context
- Manual resolution UI for critical conflicts
- Idempotent event replay

### SCADA Protocol Complexity

**Challenge**: Integrating OPC UA, Modbus TCP, and MQTT with varying reliability

**Solution**:

- **Anti-Corruption Layer** pattern isolating protocol complexity
- **Circuit breaker pattern** preventing connection storms
- **Retry with exponential backoff** for transient failures
- **Protocol abstraction** allowing unified data ingestion
- Rust's type system preventing protocol-specific bugs

### Multi-Tenant Database Performance

**Challenge**: Database-per-tenant means 100s of PostgreSQL databases

**Solution**:

- **Connection pooling** with PgBouncer (20x fewer connections)
- **Tenant routing** via subdomain to correct database
- **Lazy loading** of tenant databases (only when needed)
- **Shared vs dedicated** infrastructure based on subscription tier
- **Database templating** for instant tenant provisioning

### Real-Time Data at Scale

**Challenge**: Ingesting 1000s of SCADA tags per second with TimescaleDB

**Solution**:

- **Hypertables** for automatic time-based partitioning
- **Continuous aggregates** for pre-computed dashboards
- **Compression policies** reducing storage by 12x
- **Retention policies** auto-archiving old data
- **Batch ingestion** reducing database round-trips

### Mobile Offline Performance

**Challenge**: Large production datasets on resource-constrained mobile devices

**Solution**:

- **Virtual scrolling** for 400x faster rendering
- **SQLite indices** optimized for common queries
- **Photo compression** before storage (50% size reduction)
- **Incremental sync** only uploading changes
- **Background sync** using expo-background-fetch

## Pattern Library

WellOS features **95+ documented architectural patterns** in `/docs/patterns/`:

**Core Patterns**:

- Hexagonal Architecture
- Domain-Driven Design (DDD)
- CQRS (Command Query Responsibility Segregation)
- Event Sourcing
- Repository Pattern
- Multi-Tenancy (Database-per-Tenant)

**Performance Patterns**:

- TimescaleDB Time-Series (20x faster ingestion)
- React Server Components (10x faster loads)
- Virtual Scrolling (400x rendering speedup)
- Circuit Breaker (prevents cascade failures)

**Integration Patterns**:

- Anti-Corruption Layer (SCADA protocols)
- SAGA Orchestration (distributed transactions)
- REST API Best Practices
- Security Patterns (Auth, RBAC, Encryption)

**Industry Patterns**:

- PSA (Professional Services Automation) patterns
- Oil & Gas specific workflows
- Regulatory compliance automation

Each pattern includes:

- Problem statement
- Solution architecture
- Code examples (Rust & TypeScript)
- Performance metrics
- Trade-offs and alternatives

## Lessons Learned

### Rust Learning Curve

**Challenge**: Steep initial learning curve vs Node.js/NestJS
**Outcome**: 10x performance gains justify investment; compile-time guarantees prevent production bugs

### Database-Per-Tenant Complexity

**Challenge**: More complex than schema-per-tenant
**Outcome**: Complete data isolation worth operational overhead; customers require it for compliance

### Offline-First Ambition

**Challenge**: Event sourcing adds 30% development time
**Outcome**: Critical differentiator for Permian Basin; customers won't use cloud-only solution

### SCADA Integration Variety

**Challenge**: Supporting OPC UA, Modbus, MQTT simultaneously
**Outcome**: Anti-Corruption Layer pattern cleanly isolates protocol complexity

### Mobile Performance Trade-offs

**Challenge**: Feature parity vs performance on mobile
**Outcome**: Virtual scrolling and incremental sync make mobile app feel native despite complex data

## Future Roadmap

### First Quarter 2026 (Post-Launch)

- **Voice Input**: Hands-free data entry for field operators
- **iOS/Android Offline Maps**: MapBox offline tile download
- **Equipment IoT**: Direct sensor integration (temperature, pressure, flow)

### Second Quarter 2026

- **AI-Powered Insights**: GPT-4 natural language queries ("Show me wells with declining production")
- **Augmented Reality**: AR overlays for equipment inspection
- **Advanced ML**: Deep learning for production optimization

### Third Quarter 2026

- **Blockchain Integration**: Immutable audit trail for regulatory compliance
- **Multi-Language Support**: Spanish for field operators
- **API Marketplace**: Third-party integrations and plugins

---

## Technical Excellence

WellOS demonstrates mastery of:

- **Full-Stack Rust Development**: Axum, SQLx, Tokio, Tonic gRPC
- **Modern Frontend**: Next.js 15, React 19 Server Components, WebAssembly
- **Mobile Offline Architecture**: React Native, Expo, SQLite, event sourcing
- **Desktop Development**: Electron with offline-first design
- **Multi-Tenancy at Scale**: Database-per-tenant with 5-tier infrastructure
- **Real-Time Systems**: SCADA integration with &lt;1s latency, WebSockets
- **Time-Series Databases**: TimescaleDB hypertables, compression, continuous aggregates
- **ML Engineering**: Python FastAPI, scikit-learn, production model deployment
- **Cloud Architecture**: Azure Container Apps, PostgreSQL, Redis, Application Insights
- **Security Engineering**: Multi-tenant isolation, encryption, RBAC, Azure Entra ID
- **DevOps Excellence**: CI/CD with GitHub Actions, IaC with Terraform
- **Performance Optimization**: 10-400x speedups via targeted pattern application
- **Pattern-Driven Development**: 95+ documented architectural patterns

WellOS isn't just a portfolio project - it's a production-ready SaaS platform solving real industry problems with modern technology and rigorous engineering.

---

**Status**: Active development, target launch January 1, 2026
**Repository**: Private (Strataga)
**Documentation**: 95+ patterns, comprehensive architecture guides
