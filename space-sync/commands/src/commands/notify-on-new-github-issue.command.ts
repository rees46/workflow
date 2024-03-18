import { ApiRepository } from '@space/api'

export type NotifyOnNewGithubIssueProps = {
  issue: string
  project: string
  author: string
  url: string
}

export abstract class NotifyOnNewGithubIssueCommand {
  protected constructor(
    readonly props: NotifyOnNewGithubIssueProps,
    readonly client: ApiRepository,
  ) {
  }
}
