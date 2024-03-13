import { ApiRepository }             from '@space/api'
import { SendCommentCommandHandler } from './command-handlers'
import { UpdateIssueBodyCommandHandler } from './command-handlers/update-issue-body.command-handler'

export type CommandHandlerFactory = (
  context: Context,
  client: ApiRepository,
  blockWithURL: string,
) => SendCommentCommandHandler | UpdateIssueBodyCommandHandler

export type Comment = {
  [key: string]: any,
  id: number,
}

export type Issue = {
  body?: string | undefined
}

export type Context = {
  payload: {
    comment?: Comment
    action?: string
    issue?: Issue
    changes?: Record<string, any>
  }
  changes?: Object
  eventName: string
}
