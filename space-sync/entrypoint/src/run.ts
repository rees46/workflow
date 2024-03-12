import { getInput }        from '@actions/core'
import { setFailed }       from '@actions/core'
import { context }         from '@actions/github'
import { getClient }       from '@space/client'
import { errorHandler }    from '@space/error-handler'
import { getSpaceProject } from './parsers'
import { getSpaceUrl }     from './parsers'
import { getIssueID }      from './parsers'
import { getIssueBody }    from './parsers'

export const run = async () => {
  try {
    const issueBody = getIssueBody(context)

    console.log(JSON.stringify(context, undefined, 2))

    const issueTitleWithTicketID = getInput('blockWithTicketID', { required: true })

    const spaceURL = getSpaceUrl(issueBody, issueTitleWithTicketID)

    const spaceIssueId = getIssueID(spaceURL)

    const spaceProjectId = getSpaceProject(spaceURL)
    const client = getClient({ basePath: process.env.SPACE_URL, accessToken: process.env.SPACE_SECRET })

    if (context.payload.action === 'created' && context.payload.comment) {
      const chatMessage: string = context.payload.comment.body

      const response = await client.chatsMessagesSendMessagePost({
        content: {
          text: chatMessage,
          sections: [
            {
              footer: 'Sent by',
              className: '',
              elements: [
                {
                  content: 'Sent by Github Actions',
                  className: '',
                  elements: [],
                  fields: [],
                }],
            }],
          className: '',
        },
        channel: {
          issue: {
            key: `DEV-T-${spaceIssueId}`,
            project: {
              key: spaceProjectId.toUpperCase(),
              className: '',
              id: '',
            },
            className: '',
            externalId: '',
            id: '',
          },
          id: '',
          message: '',
          codeReview: {
            className: '',
            id: '',
            key: '',
            number: 0,
          },
          member: {
            className: '',
            externalId: '',
            id: '',
            username: '',
          },
          contactKey: '',
          article: '',
          channel: {
            className: '',
            id: '',
            name: '',
          },
          className: '',
          application: {
            className: '',
            clientId: '',
            id: '',
          }
        }
      })

      console.log(JSON.stringify(response, undefined,  2))
    }
  } catch (error) {
    errorHandler(error, setFailed)
  }
}
