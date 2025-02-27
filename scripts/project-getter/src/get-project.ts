import { client } from '@global/github-client'

type GetProjectId = (
  projectNumber?: number,
  owner?: string,
  repo?: string
) => Promise<string | undefined>

export const getProjectId: GetProjectId = async (
  projectNumber = 5,
  owner = 'rees46',
  repo = 'planning'
) => {
  try {
    const response = await client.graphql(
      `
      query($owner: String!, $repo: String!, $projectNumber: Int!) {
            repository(owner: $owner, name: $repo) {
              projectV2(number: $projectNumber) {
                id
              }
            }
          }
      `,
      {
        owner,
        repo,
        projectNumber: 5,
      }
    )

    // @ts-ignore
    return response.repository.projectV2.id
  } catch (error) {
    console.error('Ошибка получения проекта', error.message)
  }
}
