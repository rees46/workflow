import { client } from '@global/github-client'

interface Issue {
  number: number
  labels: {
    name: string
    id: string
  }[]
}

interface IssuesResponse {
  data: {
    issues: Issue[]
  }
}

type GetIssueIdsByLabel = (
  labels: string[],
  owner?: string,
  repo?: string
) => Promise<number[] | undefined>

export const getIssueIdsByLabel: GetIssueIdsByLabel = async (
  labels,
  owner = 'rees46',
  repo = 'planning'
) => {
  try {
    const response = client.paginate.iterator<Issue>(
      'GET /repos/{owner}/{repo}/issues?labels={labels}',
      {
        owner,
        repo,
        headers: { 'X-GitHub-Api-Version': '2022-11-28' },
        labels: labels.join(','),
        per_page: 100,
      }
    )

    const result: number[] = []

    for await (const { data: issues } of response) {
      for (const issue of issues) {
        console.log(`${issue.number} ${issue.labels.map((label) => label.name)}`)
        result.push(issue.number)
      }
    }

    return result
  } catch (error) {
    console.error('Ошибка при получении issues:', (error as Error).message)
    return null
  }
}
