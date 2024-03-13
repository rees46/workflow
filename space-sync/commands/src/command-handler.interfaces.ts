import { ApiRepository }                 from '@space/api'
import { SendCommentCommandHandler }     from './command-handlers'
import { UpdateIssueBodyCommandHandler } from './command-handlers'

export type CommandHandlerFactory = (
  context: Context,
  client: ApiRepository,
  blockWithURL: string,
) => SendCommentCommandHandler | UpdateIssueBodyCommandHandler

export type Comment = {
  [key: string]: any,
  id: number,
}

export type Assignee = {
  login: string
}

export type Issue = {
  body?: string | undefined
  html_url?: string | undefined
  assignee?: Assignee
}

export type Context = {
  payload: {
    comment?: Comment
    action?: string
    issue?: Issue
    changes?: Record<string, any>
    assignee?: Record<string, any>
  }
  changes?: Object
  eventName: string
}
