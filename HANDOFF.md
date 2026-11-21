# HANDOFF.md
> Overwrite this file at every checkpoint. Keep it short, specific and true.
> A new agent must be able to continue from this file alone (plus AGENT_GUIDE.md).

**Last updated:** 2026-11-21 12:58 (UTC+6) · **By:** antigravity

## 0. Repository — push at every phase and every checkpoint

**Remote:** `https://github.com/kmjunaed/website-personal-junaed.git` · remote `origin` · branch `main`

A phase is **not complete** until it is pushed. Neither is a checkpoint. Work that exists only
on the local machine does not count, because the next agent may not be on this machine.

```powershell
git push origin main
git rev-list --left-right --count HEAD...origin/main   # must print: 0   0
```

If the push is rejected, **never force-push** over history you did not create. Fetch, merge,
resolve, push. Full protocol: `AGENT_GUIDE.md` §3.

**Current sync state:** Phase 9 is committed, tagged `phase-09-complete` and pushed.
Frontend is deployed live on Vercel at `https://website-personal-junaed.vercel.app`.

**Every commit must be authored as `kmjunaed <89958692+kmjunaed@users.noreply.github.com>`.**
Vercel Hobby refuses to build a deployment whose commit author is not the account that
owns the project. A commit from any other address pushes fine and then silently fails to
deploy. The identity is already set in this clone's git config.

## 1. Where We Are
- **Current status:** Frontend deployed & live on Vercel (`https://website-personal-junaed.vercel.app`).
- **Phase progress:** Phases 0–9 complete. Vercel project connected to GitHub repository with automated git deployments.
- **Gates:** lint, typecheck, 342/342 tests and build all pass.
- **What remains:** Connecting live services (Neon DB, R2, Resend, custom domains).

## 2. What Phase 9 Delivered
- **Backups** — `src/lib/backup/rules.ts` (retention as pure tested logic, 28 tests),
  `repository.ts`, `dispatch.ts`, and the real `/admin/backups` page. The workflow is
  `.github/workflows/backup-weekly.yml`: dump → gzip → age encrypt → SFTP → verify size
  → prune to newest 3 → write to `backups_log` → Telegram.
- **CI** — `.github/workflows/ci.yml` runs lint, typecheck, tests and build on every PR,
  plus `npm audit --audit-level=high`. The build step uses placeholder secrets; that was
  verified locally to actually work.
- **Migrations** — `.github/workflows/db-migrate.yml`, dispatch-only, requires typing
  `migrate`, targets a `production` GitHub Environment.
- **Docs** — `docs/qa-checklist.md` (every row verified / blocked / not run) and
  `docs/launch-runbook.md`.

## 3. THREE REMAINING LAUNCH ITEMS (OWNER CREDENTIALS)
1. **Neon production database** — needed for live admin panel and DB-persisted changes. Dev runs on local PGlite. Once provided: update `DATABASE_URL` in Vercel and run `npm run db:migrate && npm run db:seed`.
2. **Cloudflare R2 bucket** — media uploads. The storage adapter refuses disk in production by design.
3. **Resend API key + verified domain** — lead notifications, password reset, staff invites.
4. *(Optional / DNS)* Connect custom domains `junaedhossain.com` and `admin.junaedhossain.com` in Vercel Domains.

Do not describe the project as fully launched until these exist and the runbook is walked.

## 4. Known Issues / Tech Debt
- The `production` GitHub Environment needs a required-reviewer rule set by hand, or
  `db-migrate.yml` runs immediately on dispatch.
- The backup workflow writes to `backups_log` over `psql`, bypassing `logActivity`. The
  workflow has no session, so this is deliberate, but backup rows are not in the activity log.
- `listRecentBackups` is cached 300s, so a workflow-written row can take up to five minutes
  to appear on the page.
- The restore drill has **not** been run. It needs a real archive and a Neon branch. It is
  a launch-day step in the runbook, not a completed item.

## 5. Next Steps
1. Owner supplies the four items in §3.
2. Run `docs/launch-runbook.md` top to bottom.
3. Run `docs/qa-checklist.md` on a real phone against the preview URL.
4. Tag `v1.0.0` when the runbook's definition of "launched" is actually met.
