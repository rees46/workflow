import { ApiRepository } from '@space/api'

export type AssignIssueProps = {
  issue: string
  project: string
  assignee: string
}

export abstract class AssignIssueCommand {
  protected constructor(
    readonly props: AssignIssueProps,
    readonly client: ApiRepository,
  ) {
  }
}
