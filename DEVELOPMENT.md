# Development Guide

> **Note**: This project uses **pnpm** for package management. Install with `npm install -g pnpm` if you haven't already.

## Turborepo Commands

This project uses Turborepo for efficient monorepo management. All commands are run from the **root directory** using **pnpm**.

### Core Commands

| Command | Description | When to Use |
|---------|-------------|-------------|
| `pnpm dev` | Start development server | Daily development work |
| `pnpm build` | Build all apps | Before deployment, CI/CD |
| `pnpm lint` | Lint all code | Before committing |
| `pnpm type-check` | Check TypeScript types | Before committing, in CI |
| `pnpm format` | Format code with Prettier | Before committing |
| `pnpm clean` | Remove build artifacts | When experiencing build issues |

### How Turbo Works

**Caching**: Turbo caches the output of tasks. If nothing changed, it uses the cache instead of rebuilding.

```bash
# First build (slow)
pnpm build
# Outputs: >>> FULL TURBO

# Second build with no changes (instant!)
pnpm build
# Outputs: >>> FULL TURBO (using cached results)
```

**Parallel Execution**: Tasks run in parallel across apps when possible.

```bash
pnpm lint
# Runs lint on all apps simultaneously
```

**Dependency Graph**: Turbo understands dependencies between tasks.

```bash
pnpm build
# Builds packages first, then apps that depend on them
```

### Per-App Development

If you only want to work on one app:

```bash
cd apps/web
pnpm dev        # Only runs the web app
pnpm lint       # Only lints the web app
pnpm type-check # Only type-checks the web app
```

### Debugging Turbo

**See what Turbo is doing:**

```bash
pnpm dev -- --verbosity=2
```

**Force rebuild (ignore cache):**

```bash
pnpm build -- --force
```

**Run a specific task in a specific app:**

```bash
pnpm exec turbo run build --filter=web
```

## Workflow Best Practices

### Before Committing

```bash
pnpm lint        # Fix linting issues
pnpm type-check  # Ensure no type errors
pnpm format      # Format code
pnpm build       # Ensure it builds
```

### Daily Development

```bash
pnpm dev         # Start all apps
# Work on your features
# Turbo will automatically rebuild on changes
```

### Adding New Apps

1. Create app in `apps/` directory
2. Add npm scripts: `dev`, `build`, `lint`, `type-check`, `clean`
3. Turbo will automatically include it

### Adding Shared Packages

1. Create package in `packages/` directory
2. Add to workspace in root `package.json`
3. Import in apps using the package name

## TypeScript Configuration

The web app has its own `tsconfig.json`. Type checking runs via:

```bash
pnpm type-check
```

This runs `tsc --noEmit` which checks types without emitting files.

## Prettier Configuration

Prettier settings are in `.prettierrc`:

```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "arrowParens": "always"
}
```

Format all files:

```bash
pnpm format
```

Format specific files:

```bash
pnpm exec prettier --write "apps/web/app/**/*.tsx"
```

## ESLint Configuration

ESLint is configured per-app using ESLint v9 flat config format.

Run linting:

```bash
pnpm lint
```

Fix auto-fixable issues:

```bash
cd apps/web && pnpm lint:fix
```

## CI/CD Pipeline

Recommended GitHub Actions workflow:

```yaml
name: CI
on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - uses: pnpm/action-setup@v2
        with:
          version: 9

      - uses: actions/setup-node@v3
        with:
          node-version: 20
          cache: 'pnpm'

      - run: pnpm install
      - run: pnpm lint
      - run: pnpm type-check
      - run: pnpm build
```

## Performance Tips

### Turbo Cache

Turbo caches locally in `.turbo/`. This is gitignored.

For CI/CD, use Turbo Remote Cache:

```bash
pnpm exec turbo login
pnpm exec turbo link
```

### pnpm Benefits

This project uses **pnpm** for faster installs and better disk efficiency:

- **2x faster** than npm on most operations
- **Saves disk space** with content-addressable storage
- **No phantom dependencies** - stricter dependency resolution
- **Native monorepo support** via `pnpm-workspace.yaml`

## Troubleshooting

### "Task not found"

Make sure the task exists in the app's `package.json`:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "lint": "next lint",
    "type-check": "tsc --noEmit",
    "clean": "rm -rf .next"
  }
}
```

### Build Cache Issues

Clear the Turbo cache:

```bash
pnpm clean
rm -rf .turbo
pnpm build
```

### Type Errors Not Showing

Ensure `type-check` script exists and runs:

```bash
cd apps/web
pnpm type-check
```

### Port Already in Use

If `pnpm dev` fails because port 3000 is in use:

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
cd apps/web
PORT=3001 pnpm dev
```

## Quick Reference

**Start everything:**

```bash
pnpm dev
```

**Build everything:**

```bash
pnpm build
```

**Check code quality:**

```bash
pnpm lint && pnpm type-check
```

**Format code:**

```bash
pnpm format
```

**Clean everything:**

```bash
pnpm clean
```

**Work on just web app:**

```bash
cd apps/web && pnpm dev
```

---

For more info on Turborepo: <https://turbo.build/repo/docs>
