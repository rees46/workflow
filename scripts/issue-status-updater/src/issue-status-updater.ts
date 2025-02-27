import { client } from '@global/github-client'

type UpdateIssueStatus = (
  projectId: string,
  projectIssueId: string,
  fieldId: string,
  optionId: string
) => Promise<void>

export const updateIssueStatus: UpdateIssueStatus = async (
  projectId,
  issueId,
  fieldId,
  optionId
) => {
  const mutation = `#graphql
    mutation($projectId: ID!, $issueId: ID!, $fieldId: ID!, $optionId: String!) {
      updateProjectV2ItemFieldValue(input: {projectId: $projectId, itemId: $issueId, fieldId: $fieldId, value: {singleSelectOptionId: $optionId}}) {
        projectV2Item {
          id
        }
      }
    }
  `

  await client.graphql(mutation, {
    issueId,
    fieldId,
    optionId,
    projectId,
  })

  console.log(`Issue ${issueId} перемещён в статус`)
}
