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
    const issueTitleWithTicketID = getInput('blockWithTicketID', { required: true })

    process.env.SPACE_URL = getInput('spaceURL', { required: true })
    process.env.SPACE_SECRET = getInput('spaceSecret', { required: true })

    const issueBody = getIssueBody(context)

    console.log(JSON.stringify(context, undefined, 2))


    const url = getSpaceUrl(issueBody, issueTitleWithTicketID)

    const issue = getIssueID(url)

    const project = getSpaceProject(url)

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
