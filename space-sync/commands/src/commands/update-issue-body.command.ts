import { ApiRepository } from '@space/api'

export type UpdateIssueBodyProps = {
  issue: string
  project: string
  body?: string
  title?: string
  assignee?: string
  status?: string
}

export abstract class UpdateIssueBodyCommand {
  protected constructor(
    readonly props: UpdateIssueBodyProps,
    readonly client: ApiRepository,
  ) {
  }
}
