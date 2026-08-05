# Reusable GitHub Workflows

Shared GitHub Actions for `rees46/*` (and PersonaClick sync).  
**This repo is not migrated 1:1 to GitLab CI.** Day 9 of the GitLab migration only documents the mapping; each consumer owns its own `.gitlab-ci.yml` (patterns from `landing` / `web`).

See also: [`GITLAB_CI_MIGRATION_PLAN.md`](../GITLAB_CI_MIGRATION_PLAN.md) (days 9–10).

---

## What lives here

| Area | Path |
|------|------|
| Reusable workflows | `.github/workflows/reusable-*.yml(yaml)` + `docker-publish.yaml` |
| Local CI for this repo | `lint.yaml`, `repo-sync.yaml` |
| Composite actions | `.github/actions/**` |
| Cross-org replacements | `github/repo-sync-replacements/` |
| Helper scripts | `scripts/**` (Yarn) |

---

## Inventory → GitLab mapping

**Legend**

- **Per-repo GL** — already (or should be) implemented in the consumer’s `.gitlab/ci/`
- **GitHub-only** — keep on GHA until explicitly replaced; not a GitLab include from this repo
- **Drop / transitional** — Jenkins etc.; replaced by ansible-deploy / Flux

### Checks

| GHA workflow | Role | GitLab |
|--------------|------|--------|
| `reusable-ruby-checks.yaml` | rspec / brakeman / rubocop | **Per-repo GL** `check-ruby.yml` (api-rails, api-rails-v2, dashboard, dashboard-v2, guides) |
| `reusable-js-checks.yaml` | yarn lint/test/build `--since` | **Per-repo GL** `check-js.yml` (dashboard) |
| `reusable-atls-checks.yaml` | Atlantis `yarn checks` | **Per-repo GL** `check-atls.yml` (services, workers, shopify-app) |
| `reusable-php-checks.yaml` / `-v2` | PHP validate / phpstan / tests | Per-repo GL (see workflow-tests) |
| `reusable-common-checks.yaml` | typos + commitlint | GitHub-only / optional later |
| `reusable-android-checks.yaml` | Gradle test/lint | GitHub-only (mobile) |
| `reusable-ios-checks.yaml` | CocoaPods / iOS checks | GitHub-only (mobile) |
| `lint.yaml` | actionlint/yamllint for *this* repo | GitHub-only |

### Build / publish / deploy

| GHA workflow | Role | GitLab |
|--------------|------|--------|
| `docker-publish.yaml` | build/push ghcr (`latest`/`stage` + sha-ts) | **Per-repo GL** `.gitlab/ci/build.yml` + `CI_PUBLISH_ENABLED` |
| `reusable-php-docker-publish.yaml` | PHP monorepo → GHCR | Per-repo GL |
| `reusable-atls-pack-image.yaml` | Atlantis pack → GHCR | Per-repo GL (services) |
| `reusable-jenkins-trigger.yaml` | Jenkins `buildWithParameters` | **Drop** → ansible-deploy trigger / Flux |
| `reusable-capistrano-deploy.yaml` | VPN + `cap <cluster> deploy` | **Per-repo GL** `deploy-capistrano.yml` (dashboard, api-rails) |
| `reusable-ruby-publish-migrated-db.yaml` | Rails migrated DB images | **Per-repo GL** api-rails `build:migrated-db` |
| `reusable-js-publish.yaml` / `reusable-js-version.yaml` | npm publish / version PR | GitHub-only (release bots) |
| `reusable-php-version.yaml` | PHP version bump | GitHub-only |
| `reusable-multiplatform-version-bump.yaml` | Cross-platform semver PR | GitHub-only |
| `reusable-android-*` / `reusable-ios-*` | Maven / Play / TestFlight / pods | GitHub-only (mobile store) |

### Sync / branch ops

| GHA workflow | Role | GitLab |
|--------------|------|--------|
| `reusable-repo-sync.yml` / `repo-sync.yaml` | Cross-org sync + PR (PersonaClick) | **GitHub-only** |
| `reusable-rn-synchronization.yml` | RN → PersonaClick/rn-sdk | **GitHub-only** |
| `reusable-master-sync.yaml` / `-cherry` | stage ↔ master GitHub refs | **GitHub-only** |
| `reusable-release-commit-finder.yaml` | Gate on `feat(release):` commit | GitHub-only / consumer local |
| `reusable-atls-tools.yaml` | Atlantis tools bump on master | GitHub-only |

---

## Consumers (local clones under `github/`)

| Reusable | Typical consumers |
|----------|-------------------|
| `docker-publish.yaml` | landing, widgets, demo-shop-static, api-docs, mcp, guides, cms, documentation-unified, dashboard*, api-rails*, ai-analyst, … |
| `reusable-ruby-checks.yaml` | api-rails, api-rails-v2, dashboard, dashboard-v2, guides |
| `reusable-jenkins-trigger.yaml` | services, api-rails-v2, guides, api-docs, recommendations-interesting, … → **replaced by ansible-deploy in GL** |
| `reusable-capistrano-deploy.yaml` | api-rails, dashboard → **GL Capistrano jobs** |
| `reusable-atls-checks.yaml` / `reusable-atls-pack-image.yaml` | services, workers, shopify-app |
| `reusable-repo-sync.yml` | flutter-sdk, workflow itself |

Mobile SDK repos (android/ios/rn) may call android/ios reusables on GitHub but are outside this migration batch.

---

## Explicit non-goals

1. **Do not** port these YAML files into a central GitLab “workflow” project as drop-in `include:`s.
2. **Do not** reimplement GitHub App release/sync bots in GitLab for day 9–10.
3. Consumer cutover (day 10): disable/archive GHA callers after green GitLab publish/deploy — leave *this* repo as the GHA library for anything still on GitHub (mobile, PersonaClick sync).

---

## Day 10 pointer

Real `CI_PUBLISH_ENABLED` / `CI_DEPLOY_ENABLED`, GHA/Jenkins off, and mirrors — only in the migration plan **day 10**, after explicit OK.
