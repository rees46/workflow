import { getInput }                  from '@actions/core'
import { setFailed }                 from '@actions/core'
import { context }                   from '@actions/github'
import { SpaceApiClient }            from '@space/api'
import { SendCommentCommandHandler } from '@space/commands'
import { errorHandler }              from '@space/error-handler'
import { getSpaceProject }           from './parsers'
import { getSpaceUrl }               from './parsers'
import { getIssueID }                from './parsers'
import { getIssueBody }              from './parsers'

export const run = async () => {
  try {
    const issueBody = getIssueBody(context)

    console.log(JSON.stringify(context, undefined, 2))

    const issueTitleWithTicketID = getInput('blockWithTicketID', { required: true })

    const spaceURL = getSpaceUrl(issueBody, issueTitleWithTicketID)

    const issue = getIssueID(spaceURL)

    const project = getSpaceProject(spaceURL)

    const client = new SpaceApiClient()

    if (context.payload.action === 'created' && context.payload.comment) {
      const text: string = context.payload.comment.body
      const author = context.payload.comment.user.login

      const command = new SendCommentCommandHandler({ author, text, project, issue }, client)

      const result = await command.execute()

      console.log(JSON.stringify(result, undefined, 2))
    }
  } catch (error) {
    errorHandler(error, setFailed)
  }
}
