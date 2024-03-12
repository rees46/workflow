import { getInput }     from '@actions/core'
import { setFailed }    from '@actions/core'
import { context }      from '@actions/github'
import { getClient }    from '@space/client'
import { errorHandler } from '@space/error-handler'
import { findTicketID } from './parsers'
import { getIssueBody } from './parsers'

export const run = () => {
  try {
    const issueBody = getIssueBody(context)

    console.log(JSON.stringify(context))

    const issueTitleWithTicketID = getInput('blockWithTicketID', { required: true })

    const spaceIssueId = findTicketID(issueBody, issueTitleWithTicketID)

    const client = getClient({ basePath: process.env.SPACE_URL, apiKey: process.env.SPACE_SECRET })

    // client.projectsProjectPlanningIssuesIssueIdCommitsPost(projectID, spaceIssueId, {})
  } catch (error) {
    errorHandler(error, setFailed)
  }
}
