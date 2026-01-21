---
subtitle: 'AI Tool • Code Generator'
accentColor: 'red'
techStack:
  - 'Rust'
  - 'SQLite'
  - 'OpenRouter'
  - 'Ratatui'
  - 'Tauri'
  - 'WASM'
githubUrl: 'https://github.com/strataga/demiarch'
---

# DemiArch

## Overview

**DemiArch** is a local-first, open-source AI application builder written in Rust. It generates production-ready code through conversational AI interfaces, transforming project ideas into complete codebases while keeping all data local and under user control.

**Status**: Early Development | Open Source (AGPL-3.0)

## Core Philosophy

DemiArch is built on four foundational principles:

1. **Code Generation Focus** - Generates code for local repositories; users run their own projects
2. **Local-First Architecture** - All data stays local using SQLite; no accounts or telemetry required
3. **Explicit Operations** - No automatic git operations or background processes without user consent
4. **User Ownership** - Users can freely edit generated code; AI respects modifications during regeneration

## Problem Solved

DemiArch addresses key limitations of cloud-based AI coding tools:

- **Privacy** - No data leaves your machine; no accounts required
- **Control** - You own the code and can edit it freely
- **Cost Transparency** - Direct LLM API usage with visible per-model pricing
- **No Lock-in** - Open source with standard code output

## Key Features

### Conversational Discovery

- Natural language project description
- Auto-generated PRD, architecture docs, and UX specifications
- Phase planning with user stories
- Iterative refinement through conversation

### Multi-Framework Support

- **Frontend**: Next.js, React, Vue, Flutter
- **Mobile**: iOS, Android
- **Backend**: FastAPI, Go
- Extensible framework definitions

### Russian Doll Agent System

Hierarchical 3-level agent delegation:
- **Orchestrator** - High-level planning and coordination
- **Specialists** - Domain-specific implementation
- **Workers** - Atomic code generation tasks

### Learned Skills System

- Auto-extracts debugging knowledge from sessions
- Persists solutions for future similar problems
- Progressive disclosure for token-efficient context retrieval

### Smart Model Routing

- Dynamic model selection using reinforcement learning
- Per-model pricing awareness
- Daily budget controls
- Cost optimization without sacrificing quality

### Multi-Project Support

- Work on multiple projects concurrently
- Cross-project context awareness
- Isolated project databases

## Technical Architecture

### Core Stack

- **Language**: Rust for performance and safety
- **Database**: SQLite with vector extensions for local storage
- **LLM Backend**: OpenRouter API for model flexibility

### Interfaces

- **CLI**: Fast command-line interface for scripting
- **TUI**: Rich terminal UI built with Ratatui
- **GUI**: Planned Tauri + React + TypeScript desktop app

### Project Structure

Modular Rust crate architecture:
- `demiarch-core` - Core library with all business logic
- `demiarch-cli` - Command-line interface
- `demiarch-tui` - Terminal user interface
- Plugin system with WASM sandboxing for extensibility

### Local-First Data

- SQLite database per project
- Vector extensions for semantic search
- No cloud sync required
- Full data portability

## Architecture Highlights

### Token Efficiency

Progressive disclosure system retrieves only relevant context, minimizing token usage and costs while maintaining code quality.

### Plugin System

WASM-sandboxed plugins allow safe extensibility without compromising system security.

### Cost Management

- Real-time cost tracking per model
- Daily budget limits
- Model routing optimized for cost/quality balance
- Full visibility into API spending

## Technical Excellence

DemiArch demonstrates mastery of:

- **Systems Programming**: Rust, memory safety, performance optimization
- **Local-First Architecture**: SQLite, offline-capable, data ownership
- **AI Engineering**: LLM orchestration, prompt engineering, agent hierarchies
- **TUI Development**: Ratatui, terminal interfaces, keyboard-driven UX
- **Plugin Architecture**: WASM sandboxing, extensibility, security
- **Open Source**: AGPL-3.0, community-driven development

---

**Status**: Early Development
**License**: AGPL-3.0
**Repository**: [GitHub](https://github.com/strataga/demiarch)
