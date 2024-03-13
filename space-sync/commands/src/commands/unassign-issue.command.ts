import { ApiRepository } from '@space/api'

export type UnassignIssueProps = {
  issue: string
  project: string
}

export abstract class UnassignIssueCommand {
  protected constructor(
    readonly props: UnassignIssueProps,
    readonly client: ApiRepository,
  ) {
  }
}
