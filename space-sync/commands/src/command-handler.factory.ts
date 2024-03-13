import { CommandHandlerFactory }                from './command-handler.interfaces'
import { CloseIssueCommandHandler }             from './command-handlers'
import { NotifyOnNewGithubIssueCommandHandler } from './command-handlers'
import { AssignIssueCommandHandler }            from './command-handlers'
import { SendCommentCommandHandler }            from './command-handlers'
import { UpdateIssueBodyCommandHandler }        from './command-handlers'
import { UnassignIssueCommandHandler }          from './command-handlers'
import { getSpaceUrl }                          from './parsers'
import { getIssueBody }                         from './parsers'
import { getSpaceProject }                      from './parsers'
import { getIssueID }                           from './parsers'

export const commandHandlerFactory: CommandHandlerFactory = (
  context,
  client,
  blockWithURL,
) => {
  const action = context.payload.action

  if (!action) {
    throw Error('Action not provided')
  }

  const eventName = context.eventName

  const issueBody = getIssueBody(context)
  const spaceURL = getSpaceUrl(issueBody, blockWithURL)
  const issue = getIssueID(spaceURL)
  const project = getSpaceProject(spaceURL)

  let author: string = ''

  switch (eventName) {
    case 'issue_comment':
      switch (action) {
        case 'created':
          if (!context.payload.comment) {
            throw Error('Comment not found in payload')
          }

          const author = context.payload.comment.user.login
          const text = context.payload.comment.body

          return new SendCommentCommandHandler({ author, text, issue, project }, client)

        case 'deleted':
        case 'edited':
        default:
          throw Error('Unknown action')
      }
    case 'issues':
      switch (action) {
        case 'edited':
          const changes = context.payload.changes
          const issuePayload = context.payload.issue

          if (!changes) {
            throw Error('No changes found')
          }

          if (!issuePayload) {
            throw Error('No issue data found')
          }

          const changesData: Record<string, any> = {}

          for (const [key, value] of Object.entries(changes)) {
            if (value.from !== '') {
              // @ts-ignore
              changesData[key] = issuePayload[key]
            }
          }

          return new UpdateIssueBodyCommandHandler({
            issue,
            project,
            assignee: changesData['assignee'],
            body: changesData['body'],
            status: changesData['status'],
            title: changesData['title'],
          }, client)

        case 'assigned':
          const assignee = context.payload.issue?.assignee?.login ?? ''

          return new AssignIssueCommandHandler({ issue, project, assignee }, client)

        case 'unassigned':
          return new UnassignIssueCommandHandler({ issue, project }, client)

        case 'created':
          author = context.payload.issue?.assignee?.login ?? ''
          const url = context.payload.issue?.html_url ?? ''

          return new NotifyOnNewGithubIssueCommandHandler({ issue, project, url, author }, client)

        case 'closed':
          author = context.payload.issue?.assignee?.login ?? ''

          return new CloseIssueCommandHandler({ author, project, issue }, client)

        case 'reopened':
        case 'opened':


        case 'milestoned':
        case 'demilestoned':
        case 'labeled':
        default:
          throw Error('Unimplemented action')
      }
    default:
      throw Error('Unknown event name')
  }
}
