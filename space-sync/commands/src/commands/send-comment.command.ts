import { ApiRepository } from '@space/api'

export type SendCommentProps = {
  issue: string
  project: string
  text: string
  author: string
}

export abstract class SendCommentCommand {
  protected constructor(
    readonly props: SendCommentProps,
    readonly client: ApiRepository,
  ) {
  }
}
