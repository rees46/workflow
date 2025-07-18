# REES46 reusable Github Workflows

## [`deploy-node-trigger.yaml`](.github/workflows/deploy-node-trigger.yaml)

Deploy nodejs services

```yaml
jobs:
  build:
    uses: rees46/workflow/.github/workflows/deploy-node-trigger.yaml@master
    with:
      # ...
```

| name                | required | default | description        |
| ------------------- | -------- | ------- | ------------------ |
| `job_name`          | yes      | ``      | Jenkins job name   |
| `image_tag`         | yes      | ``      | Docker image tag   |
| `git_branch_name`   | yes      | ``      | Git branch name    |
| `git_commit`        | yes      | ``      | Git commit hash    |
| `git_commit_msg`    | yes      | ``      | Git commit message |
| `git_commit_author` | yes      | ``      | Git commit author  |
| `git_commit_url`    | yes      | ``      | Git commit url     |

## [`deploy-node.yaml`](.github/workflows/deploy-node.yaml)

Deploy NodeJS services

```yaml
jobs:
  build:
    uses: rees46/workflow/.github/workflows/deploy-node.yaml@master
    with:
      # ...
```

| name               | required | default | description                                  |
| ------------------ | -------- | ------- | -------------------------------------------- |
| `changeLookUpPath` | no       | ``      | Which service to look for changes and deploy |
| `branch`           | yes      | ``      | Git branch name                              |

## [`deploy-php.yaml`](.github/workflows/deploy-php.yaml)

Deploy PHP services

```yaml
jobs:
  build:
    uses: rees46/workflow/.github/workflows/deploy-php.yaml@master
    with:
      # ...
```

| name               | required | default | description                                  |
| ------------------ | -------- | ------- | -------------------------------------------- |
| `changeLookUpPath` | no       | ``      | Which service to look for changes and deploy |
| `branch`           | yes      | ``      | Git branch name                              |

## [`deploy-ruby.yaml`](.github/workflows/deploy-ruby.yaml)

Deploy Ruby services

```yaml
jobs:
  build:
    uses: rees46/workflow/.github/workflows/deploy-ruby.yaml@master
    with:
      # ...
```

| name          | required | default | description        |
| ------------- | -------- | ------- | ------------------ |
| `branch`      | yes      | ``      | Git branch name    |
| `job_name`    | yes      | ``      | Jenkins job name   |
| `commit_hash` | yes      | ``      | Github commit hash |

## [`docker-publish.yaml`](.github/workflows/docker-publish.yaml)

Reusable docker publish

```yaml
jobs:
  build:
    uses: rees46/workflow/.github/workflows/docker-publish.yaml@master
    with:
      # ...
```

| name          | required | default | description                    |
| ------------- | -------- | ------- | ------------------------------ |
| `packageName` | no       | ``      | Name of the package to publish |

## [`repo-sync.yaml`](.github/workflows/repo-sync.yaml)

Repository synchronization

```yaml
jobs:
  build:
    uses: rees46/workflow/.github/workflows/repo-sync.yaml@master
    with:
      # ...
```

## [`reusable-android-checks.yaml`](.github/workflows/reusable-android-checks.yaml)

Reusable Android SDK publish to Sona

```yaml
jobs:
  build:
    uses: rees46/workflow/.github/workflows/reusable-android-checks.yaml@master
    with:
      # ...
```

| name                                    | required | default                 | description                               |
| --------------------------------------- | -------- | ----------------------- | ----------------------------------------- |
| `PROPERTIES_FILE`                       | no       | `gradle.properties`     | Relative file path for putting in secrets |
| `SIGNING_SECRET_KEY_RING_FILE`          | no       | `com.rees46.key.gpg`    | Location and name for signature file      |
| `SIGNING_SECRET_KEY_RING_FILE_LOCATION` | yes      | `./personalization-sdk` | Location and name for signature file      |
| `GOOGLE_SERVICES_FILE_LOCATION`         | no       | `sample`                | Location for google services file         |
| `GOOGLE_SERVICES_FILE_NAME`             | no       | `google-services.json`  | Name for google services file             |
| `GRADLE_VERSION`                        | no       | ``                      |                                           |
| `VARIANT_NAME`                          | yes      | ``                      | REES46 or PersonaClick                    |
| `URL`                                   | yes      | ``                      | GitHub repo URL                           |
| `MAVEN_REPOSITORY_URL`                  | yes      | ``                      | Maven repository publish to               |
| `OSSRH_USERNAME`                        | no       | `github-bot@rees46.com` |                                           |

## [`reusable-android-google-play-publish.yaml`](.github/workflows/reusable-android-google-play-publish.yaml)

Reusable Android Demo Shop Publish

```yaml
jobs:
  build:
    uses: rees46/workflow/.github/workflows/reusable-android-google-play-publish.yaml@master
    with:
      # ...
```

| name                 | required | default | description |
| -------------------- | -------- | ------- | ----------- |
| `githubAppId`        | yes      | ``      |             |
| `packageName`        | yes      | ``      |             |
| `aabReleasePath`     | yes      | ``      |             |
| `propertiesFilePath` | yes      | ``      |             |

## [`reusable-android-publish.yaml`](.github/workflows/reusable-android-publish.yaml)

Reusable Android SDK publish to Sona

```yaml
jobs:
  build:
    uses: rees46/workflow/.github/workflows/reusable-android-publish.yaml@master
    with:
      # ...
```

| name                                    | required | default                 | description                               |
| --------------------------------------- | -------- | ----------------------- | ----------------------------------------- |
| `appId`                                 | yes      | ``                      | App ID for committing and pushing         |
| `PROPERTIES_FILE`                       | no       | `gradle.properties`     | Relative file path for putting in secrets |
| `SIGNING_SECRET_KEY_RING_FILE`          | no       | `com.rees46.key.gpg`    | Location and name for signature file      |
| `SIGNING_SECRET_KEY_RING_FILE_LOCATION` | no       | `./personalization-sdk` | Location and name for signature file      |
| `GRADLE_VERSION`                        | no       | ``                      |                                           |
| `VARIANT_NAME`                          | yes      | ``                      | REES46 or PersonaClick                    |
| `URL`                                   | yes      | ``                      | GitHub repo URL                           |
| `MAVEN_REPOSITORY_URL`                  | yes      | ``                      | Maven repository publish to               |
| `OSSRH_USERNAME`                        | no       | `github-bot@rees46.com` |                                           |

## [`reusable-android-release-apk.yaml`](.github/workflows/reusable-android-release-apk.yaml)

Reusable Android SDK publish to Sona

```yaml
jobs:
  build:
    uses: rees46/workflow/.github/workflows/reusable-android-release-apk.yaml@master
    with:
      # ...
```

| name    | required | default | description                       |
| ------- | -------- | ------- | --------------------------------- |
| `appId` | yes      | ``      | App ID for committing and pushing |

## [`reusable-auto-merge-pr.yaml`](.github/workflows/reusable-auto-merge-pr.yaml)

Reusable Ruby publish migrated DB

```yaml
jobs:
  build:
    uses: rees46/workflow/.github/workflows/reusable-auto-merge-pr.yaml@master
    with:
      # ...
```

| name    | required | default | description                      |
| ------- | -------- | ------- | -------------------------------- |
| `appId` | yes      | ``      | App token for committing changes |

## [`reusable-deploy-docker.yaml`](.github/workflows/reusable-deploy-docker.yaml)

Start Jenkins

```yaml
jobs:
  build:
    uses: rees46/workflow/.github/workflows/reusable-deploy-docker.yaml@master
    with:
      # ...
```

| name       | required | default | description      |
| ---------- | -------- | ------- | ---------------- |
| `branch`   | no       | ``      | Git branch name  |
| `packages` | yes      | ``      | List of packages |
| `tag`      | no       | ``      | Docker image tag |

## [`reusable-docker-publish-infrastructure.yaml`](.github/workflows/reusable-docker-publish-infrastructure.yaml)

Build and Publish Docker Images

```yaml
jobs:
  build:
    uses: rees46/workflow/.github/workflows/reusable-docker-publish-infrastructure.yaml@master
    with:
      # ...
```

## [`reusable-docker-publish.yaml`](.github/workflows/reusable-docker-publish.yaml)

Reusable docker publish

```yaml
jobs:
  build:
    uses: rees46/workflow/.github/workflows/reusable-docker-publish.yaml@master
    with:
      # ...
```

| name               | required | default | description                                                             |
| ------------------ | -------- | ------- | ----------------------------------------------------------------------- |
| `node-version`     | no       | `18`    | Node version to run this workflow. Default: 18 as it is in action cache |
| `changeLookUpPath` | no       | ``      | Which folder to look for changes and publish                            |
| `branch`           | yes      | ``      | Git branch name                                                         |

## [`reusable-infrastructure-checks-ansible.yaml`](.github/workflows/reusable-infrastructure-checks-ansible.yaml)

Reusable infrastructure checks ansible

```yaml
jobs:
  build:
    uses: rees46/workflow/.github/workflows/reusable-infrastructure-checks-ansible.yaml@master
    with:
      # ...
```

| name           | required | default   | description |
| -------------- | -------- | --------- | ----------- |
| `ANSIBLE_PATH` | no       | `ansible` |             |

## [`reusable-infrastructure-checks-elasticsearch.yaml`](.github/workflows/reusable-infrastructure-checks-elasticsearch.yaml)

Reusable infrastructure checks elasticsearch

```yaml
jobs:
  build:
    uses: rees46/workflow/.github/workflows/reusable-infrastructure-checks-elasticsearch.yaml@master
    with:
      # ...
```

## [`reusable-infrastructure-checks-haproxy.yaml`](.github/workflows/reusable-infrastructure-checks-haproxy.yaml)

Reusable infrastructure checks HAProxy

```yaml
jobs:
  build:
    uses: rees46/workflow/.github/workflows/reusable-infrastructure-checks-haproxy.yaml@master
    with:
      # ...
```

## [`reusable-infrastructure-checks-k8s.yaml`](.github/workflows/reusable-infrastructure-checks-k8s.yaml)

Reusable infrastructure checks k8s

```yaml
jobs:
  build:
    uses: rees46/workflow/.github/workflows/reusable-infrastructure-checks-k8s.yaml@master
    with:
      # ...
```

| name   | required | default | description |
| ------ | -------- | ------- | ----------- |
| `PATH` | yes      | `specs` |             |

## [`reusable-infrastructure-checks-nginx.yaml`](.github/workflows/reusable-infrastructure-checks-nginx.yaml)

Reusable infrastructure checks NGINX

```yaml
jobs:
  build:
    uses: rees46/workflow/.github/workflows/reusable-infrastructure-checks-nginx.yaml@master
    with:
      # ...
```

## [`reusable-infrastructure-checks-pgbouncer.yaml`](.github/workflows/reusable-infrastructure-checks-pgbouncer.yaml)

Reusable infrastructure checks PGBouncer

```yaml
jobs:
  build:
    uses: rees46/workflow/.github/workflows/reusable-infrastructure-checks-pgbouncer.yaml@master
    with:
      # ...
```

## [`reusable-infrastructure-manual-ansible-check.yaml`](.github/workflows/reusable-infrastructure-manual-ansible-check.yaml)

Reusable Ansible playbook dry-run

```yaml
jobs:
  build:
    uses: rees46/workflow/.github/workflows/reusable-infrastructure-manual-ansible-check.yaml@master
    with:
      # ...
```

| name             | required | default | description |
| ---------------- | -------- | ------- | ----------- |
| `PLAYBOOK_NAME`  | yes      | ``      |             |
| `FOLDER`         | yes      | ``      |             |
| `PLAYBOOKS_PATH` | yes      | ``      |             |

## [`reusable-infrastructure-manual-ansible-run.yaml`](.github/workflows/reusable-infrastructure-manual-ansible-run.yaml)

Reusable Ansible playbook run

```yaml
jobs:
  build:
    uses: rees46/workflow/.github/workflows/reusable-infrastructure-manual-ansible-run.yaml@master
    with:
      # ...
```

| name             | required | default | description |
| ---------------- | -------- | ------- | ----------- |
| `PLAYBOOK_NAME`  | yes      | ``      |             |
| `FOLDER`         | yes      | ``      |             |
| `PLAYBOOKS_PATH` | yes      | ``      |             |

## [`reusable-ios-checks.yaml`](.github/workflows/reusable-ios-checks.yaml)

iOS checks

```yaml
jobs:
  build:
    uses: rees46/workflow/.github/workflows/reusable-ios-checks.yaml@master
    with:
      # ...
```

| name                         | required | default                                  | description |
| ---------------------------- | -------- | ---------------------------------------- | ----------- |
| `googleServicesFileLocation` | no       | `./DemoApp/REES46Demo/Supporting Files/` |             |
| `googleServicesFileName`     | no       | `GoogleService-Info.plist`               |             |

## [`reusable-ios-publish.yaml`](.github/workflows/reusable-ios-publish.yaml)

iOS publish Swift pacakge and Cocoapods

```yaml
jobs:
  build:
    uses: rees46/workflow/.github/workflows/reusable-ios-publish.yaml@master
    with:
      # ...
```

| name    | required | default | description                      |
| ------- | -------- | ------- | -------------------------------- |
| `appId` | yes      | ``      | App token for committing changes |

## [`reusable-ios-release.yaml`](.github/workflows/reusable-ios-release.yaml)

iOS create release

```yaml
jobs:
  build:
    uses: rees46/workflow/.github/workflows/reusable-ios-release.yaml@master
    with:
      # ...
```

| name              | required | default          | description                      |
| ----------------- | -------- | ---------------- | -------------------------------- |
| `podSpecFilePath` | no       | `REES46.podspec` | File path to podspec file        |
| `appId`           | yes      | ``               | App token for committing changes |

## [`reusable-ios-testflight-publish.yaml`](.github/workflows/reusable-ios-testflight-publish.yaml)

Reusable iOS TestFlight Publish

```yaml
jobs:
  build:
    uses: rees46/workflow/.github/workflows/reusable-ios-testflight-publish.yaml@master
    with:
      # ...
```

| name                           | required | default | description |
| ------------------------------ | -------- | ------- | ----------- |
| `xcworkspace`                  | yes      | ``      |             |
| `scheme`                       | yes      | ``      |             |
| `codeSignIdentity`             | yes      | ``      |             |
| `developmentTeam`              | yes      | ``      |             |
| `provisioningProfileSpecifier` | yes      | ``      |             |

## [`reusable-ios-version.yaml`](.github/workflows/reusable-ios-version.yaml)

iOS bump version

```yaml
jobs:
  build:
    uses: rees46/workflow/.github/workflows/reusable-ios-version.yaml@master
    with:
      # ...
```

| name              | required | default          | description                      |
| ----------------- | -------- | ---------------- | -------------------------------- |
| `podSpecFilePath` | no       | `REES46.podspec` | File path to podspec file        |
| `appId`           | yes      | ``               | App token for committing changes |

## [`reusable-issue-management.yaml`](.github/workflows/reusable-issue-management.yaml)

Resuable issue management

```yaml
jobs:
  build:
    uses: rees46/workflow/.github/workflows/reusable-issue-management.yaml@master
    with:
      # ...
```

| name            | required | default | description |
| --------------- | -------- | ------- | ----------- |
| `retries`       | no       | `3`     |             |
| `projectNumber` | yes      | ``      |             |
| `appId`         | yes      | ``      |             |

## [`reusable-js-checks.yaml`](.github/workflows/reusable-js-checks.yaml)

Reusable JS/TS PR checks

```yaml
jobs:
  build:
    uses: rees46/workflow/.github/workflows/reusable-js-checks.yaml@master
    with:
      # ...
```

| name               | required | default | description                                                             |
| ------------------ | -------- | ------- | ----------------------------------------------------------------------- |
| `app-id`           | yes      | ``      | github app id                                                           |
| `node-version`     | no       | `22`    | Node version to run this workflow. Default: 19 as it is in action cache |
| `workingDirectory` | no       | `./`    | Working direction for action                                            |

## [`reusable-js-docker.yaml`](.github/workflows/reusable-js-docker.yaml)

Reusable JS/TS Docker

```yaml
jobs:
  build:
    uses: rees46/workflow/.github/workflows/reusable-js-docker.yaml@master
    with:
      # ...
```

| name               | required | default  | description                                                            |
| ------------------ | -------- | -------- | ---------------------------------------------------------------------- |
| `branch`           | no       | `master` | Working branch                                                         |
| `nodeVersion`      | no       | `20`     | Node version to run this workflow. Default 20 as it is in action cache |
| `workingDirectory` | no       | `./`     | Where the script should execute                                        |
| `tag`              | no       | `latest` | Docker tag                                                             |

## [`reusable-js-publish.yaml`](.github/workflows/reusable-js-publish.yaml)

Reusable JS/TS version bump & create PR

```yaml
jobs:
  build:
    uses: rees46/workflow/.github/workflows/reusable-js-publish.yaml@master
    with:
      # ...
```

| name               | required | default   | description                                                             |
| ------------------ | -------- | --------- | ----------------------------------------------------------------------- |
| `appId`            | yes      | ``        | github app id                                                           |
| `node-version`     | no       | `22`      | Node version to run this workflow. Default: 19 as it is in action cache |
| `workingDirectory` | no       | `./`      | Working direction for action                                            |
| `exclude`          | no       | `nothing` | Which workspaces to exclude                                             |

## [`reusable-js-version.yaml`](.github/workflows/reusable-js-version.yaml)

Reusable JS/TS version bump & create PR

```yaml
jobs:
  build:
    uses: rees46/workflow/.github/workflows/reusable-js-version.yaml@master
    with:
      # ...
```

| name               | required | default | description                                                             |
| ------------------ | -------- | ------- | ----------------------------------------------------------------------- |
| `appId`            | yes      | ``      | github app id                                                           |
| `node-version`     | no       | `22`    | Node version to run this workflow. Default: 19 as it is in action cache |
| `workingDirectory` | no       | `./`    | Working direction for action                                            |
| `reviewerUsername` | no       | `./`    | Working direction for action                                            |
| `exclude`          | no       | `.`     | Exclude to bump                                                         |
| `checkChanges`     | no       | `true`  | Should run 'yarn --since'?                                              |
| `private`          | no       | `false` | Should apply only to private?                                           |

## [`reusable-multiplatform-version-bump.yaml`](.github/workflows/reusable-multiplatform-version-bump.yaml)

Reusable version bump

```yaml
jobs:
  build:
    uses: rees46/workflow/.github/workflows/reusable-multiplatform-version-bump.yaml@master
    with:
      # ...
```

| name               | required | default        | description                      |
| ------------------ | -------- | -------------- | -------------------------------- |
| `appId`            | yes      | ``             | App token for committing changes |
| `reviewerUsername` | no       | `TorinAsakura` | Pull request reviewer            |

## [`reusable-php-checks.yaml`](.github/workflows/reusable-php-checks.yaml)

Reusable PHP PR checks

```yaml
jobs:
  build:
    uses: rees46/workflow/.github/workflows/reusable-php-checks.yaml@master
    with:
      # ...
```

## [`reusable-php-docker-publish.yaml`](.github/workflows/reusable-php-docker-publish.yaml)

Reusable PHP docker publish

```yaml
jobs:
  build:
    uses: rees46/workflow/.github/workflows/reusable-php-docker-publish.yaml@master
    with:
      # ...
```

| name     | required | default | description     |
| -------- | -------- | ------- | --------------- |
| `branch` | yes      | ``      | Git branch name |

## [`reusable-pr-check-only-from-branch.yaml`](.github/workflows/reusable-pr-check-only-from-branch.yaml)

Enforce merge source rule

```yaml
jobs:
  build:
    uses: rees46/workflow/.github/workflows/reusable-pr-check-only-from-branch.yaml@master
    with:
      # ...
```

| name            | required | default  | description                               |
| --------------- | -------- | -------- | ----------------------------------------- |
| `allowedBranch` | yes      | `stage`  | Which branch is allowed to be merged from |
| `allowedTarget` | no       | `master` | Which target branch is allowed            |

## [`reusable-release-commit-finder.yaml`](.github/workflows/reusable-release-commit-finder.yaml)

Release commit finder

```yaml
jobs:
  build:
    uses: rees46/workflow/.github/workflows/reusable-release-commit-finder.yaml@master
    with:
      # ...
```

| name               | required | default                  | description                                                |
| ------------------ | -------- | ------------------------ | ---------------------------------------------------------- |
| `fetchDepth`       | no       | `2`                      | Checkout fetch depth                                       |
| `commitMessage`    | no       | `feat(release): version` | Commit message to find                                     |
| `cancelRunIfFound` | no       | `True`                   | Abort workflow execution when the target commit is missing |

## [`reusable-ruby-checks.yaml`](.github/workflows/reusable-ruby-checks.yaml)

Reusable Ruby PR checks

```yaml
jobs:
  build:
    uses: rees46/workflow/.github/workflows/reusable-ruby-checks.yaml@master
    with:
      # ...
```

| name               | required | default | description                  |
| ------------------ | -------- | ------- | ---------------------------- |
| `workingDirectory` | no       | `./`    | Working direction for action |
| `rubyVersion`      | no       | `2.7.5` | Ruby version to use          |
| `nodeVersion`      | no       | `20`    | Node version to use          |

## [`reusable-ruby-publish-migrated-db.yaml`](.github/workflows/reusable-ruby-publish-migrated-db.yaml)

Reusable Ruby publish migrated DB

```yaml
jobs:
  build:
    uses: rees46/workflow/.github/workflows/reusable-ruby-publish-migrated-db.yaml@master
    with:
      # ...
```

| name               | required | default | description                  |
| ------------------ | -------- | ------- | ---------------------------- |
| `workingDirectory` | no       | `./`    | Working direction for action |
| `rubyVersion`      | no       | `2.7.5` | Ruby version to use          |
| `nodeVersion`      | no       | `20`    | Node version to use          |
