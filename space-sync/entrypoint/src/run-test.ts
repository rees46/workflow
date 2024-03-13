import { setFailed }                     from '@actions/core'
import { context }                       from '@actions/github'
import { SpaceApiClient }                from '@space/api'
import { UpdateIssueBodyCommandHandler } from '@space/commands'
import { errorHandler }                  from '@space/error-handler'

export const runTest = async () => {
  try {
    process.env.SPACE_URL = 'https://rees46.jetbrains.space'
    process.env.SPACE_SECRET
      = 'eyJhbGciOiJSUzUxMiJ9.eyJzdWIiOiIxMHg2TmQwcll4aW4iLCJhdWQiOiJjaXJjbGV0LXdlYi11aSIsIm9yZ0RvbWFpbiI6InJlZXM0NiIsIm5hbWUiOiJuZWxmaW1vdiIsImlzcyI6Imh0dHBzOlwvXC9yZWVzNDYuamV0YnJhaW5zLnNwYWNlIiwicGVybV90b2tlbiI6IjQ2ajgzSzNxc3RhVyIsInByaW5jaXBhbF90eXBlIjoiVVNFUiIsImlhdCI6MTcxMDMwOTUyMH0.XitSrgBUJEIUaC4SFZyf7_GosupDw_zQOj2DAwYKmY1diysp5KuKn9Z0EwVPno9Jws4ayrUwDq9HcDLLvGCAiNtRbzpCKKQ_fPpbmXEI0ojumr0SXlUZckxY5i3LQquGgQXw1ZHACUsG_38mlLf9ib7ow1SDlOgwD1L1sZyykfk'

    console.log(JSON.stringify(context, undefined, 2))

    const issue = '2653'

    const project = 'dev'

    const client = new SpaceApiClient()

    const text: string = 'test comment'
    const author = 'nelfimov'

    const command = new UpdateIssueBodyCommandHandler({
      issue,
      project,
      status: 'incoming',
      title: 'new title test',
      assignee: 'gochicus',
      body: 'This is from api',
    }, client)

    await command.execute()
  } catch (error) {
    errorHandler(error, setFailed)
  }
}
