import { getInput }     from '@actions/core'
import { setFailed }    from '@actions/core'
import { context }      from '@actions/github'
import { getClient }    from '@space/client'
import { errorHandler } from '@space/error-handler'
import { findTicketID } from './find-ticket-id'
import { getIssueBody } from './get-issue-body'

export const run = () => {
  try {
    const issueBody = getIssueBody(context)

    console.log(issueBody)

    const issueTitleWithTicketID = getInput('blockWithTicketID', { required: true })
    const projectID = getInput('projectID', { required: true })

    const spaceIssueId = findTicketID(issueBody, issueTitleWithTicketID)

    const client = getClient({ basePath: process.env.SPACE_URL, apiKey: process.env.SPACE_SECRET })

    // client.projectsProjectPlanningIssuesIssueIdCommitsPost(projectID, spaceIssueId, {})

    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(context.payload, undefined, 2)
  } catch (error) {
    errorHandler(error, setFailed)
  }
}
