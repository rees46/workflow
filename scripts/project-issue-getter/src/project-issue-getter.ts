import { client } from '@global/github-client'

type GetProjectIssueItemId = (
  projectId: string,
  oissueNumber?: number,
  owner?: string,
  repo?: string
) => Promise<string | undefined>

export const getProjectIssueItemId: GetProjectIssueItemId = async (
  projectId,
  issueNumber,
  owner = 'rees46',
  repo = 'planning'
) => {
  const query = `#graphql
    query($owner: String!, $repo: String!, $issueNumber: Int!) {
      repository(owner: $owner, name: $repo) {
        issue(number: $issueNumber) {
          id
          projectItems(first: 10) {
            nodes {
              id
              project {
                id
              }
            }
          }
        }
      }
    }
  `

  const response = await client.graphql(query, {
    owner,
    repo,
    issueNumber,
  })

  const issue = response.repository.issue

  if (!issue) {
    throw new Error(`Issue с номером ${issueNumber} не найден`)
  }

  const projectItem = issue.projectItems.nodes.find((item) => item.project.id === projectId)

  if (!projectItem) {
    throw new Error(`Project item для issue #${issueNumber} не найден в проекте ${projectId}`)
  }

  return projectItem.id
}
