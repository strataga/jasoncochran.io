# Agent Instructions

This project uses **bd** (beads) for issue tracking. Run `bd onboard` to get started.

## Quick Reference

```bash
bd ready              # Find available work
bd show <id>          # View issue details
bd update <id> --status in_progress  # Claim work
bd close <id>         # Complete work
bd sync               # Sync with git
```

## Local Terminal Workflow (Jason)

Jason uses `zsh` in Ghostty, and Cursor as the code editor. Favor this lightweight flow so he doesn't have to think about it:

```bash
lg                  # lazygit (git UI)
rgs <query>         # ripgrep search (includes hidden, excludes .git)

c                   # open current folder in Cursor (cursor .)
cf <path>           # open a file/folder in Cursor (cursor <path>)
```

Notes:
- `lazygit` and `yazi` are installed; `yazi` is optional (use when you want a fast terminal file browser).
- If `cursor` isn't on PATH, install it from Cursor's command palette ("Install 'cursor' command in PATH").

## Landing the Plane (Session Completion)

**When ending a work session**, you MUST complete ALL steps below. Work is NOT complete until `git push` succeeds.

**MANDATORY WORKFLOW:**

1. **File issues for remaining work** - Create issues for anything that needs follow-up
2. **Run quality gates** (if code changed) - Tests, linters, builds
3. **Update issue status** - Close finished work, update in-progress items
4. **PUSH TO REMOTE** - This is MANDATORY:
   ```bash
   git pull --rebase
   bd sync
   git push
   git status  # MUST show "up to date with origin"
   ```
5. **Clean up** - Clear stashes, prune remote branches
6. **Verify** - All changes committed AND pushed
7. **Hand off** - Provide context for next session

**CRITICAL RULES:**
- Work is NOT complete until `git push` succeeds
- NEVER stop before pushing - that leaves work stranded locally
- NEVER say "ready to push when you are" - YOU must push
- If push fails, resolve and retry until it succeeds
