import { ApiRepository } from '@space/api'

export type CloseIssueProps = {
  issue: string
  project: string
  author?: string
}

export abstract class CloseIssueCommand {
  protected constructor(
    readonly props: CloseIssueProps,
    readonly client: ApiRepository,
  ) {
  }
}
