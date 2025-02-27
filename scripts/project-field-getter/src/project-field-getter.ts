import { client } from '@global/github-client'

type GetFieldAndOptionIds = (
  projectId: string,
  fieldName: string,
  optionName: string
) => Promise<{ fieldId: string; optionId: string } | undefined>

export const getFieldAndOptionIds: GetFieldAndOptionIds = async (
  projectId,
  fieldName = 'Status',
  optionName = 'Postponed'
) => {
  const query = `
    query($projectId: ID!) {
      node(id: $projectId) {
        ... on ProjectV2 {
          fields(first: 20) {
            nodes {
              ... on ProjectV2SingleSelectField {
                id
                name
                options {
                  id
                  name
                }
              }
            }
          }
        }
      }
    }
  `

  const response = await client.graphql(query, {
    projectId,
  })

  const fields = response.node.fields.nodes
  const field = fields.find((field) => field.name === fieldName)
  if (!field) {
    throw new Error(`Поле с именем ${fieldName} не найдено`)
  }

  const option = field.options.find((option) => option.name === optionName)
  if (!option) {
    throw new Error(`Опция с именем ${optionName} не найдена`)
  }

  return { fieldId: field.id, optionId: option.id }
}
