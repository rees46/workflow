import { setFailed }                     from '@actions/core'
import { context }                       from '@actions/github'
import { SpaceApiClient }                from '@space/api'
import { UpdateIssueBodyCommandHandler } from '@space/commands'
import { errorHandler }                  from '@space/error-handler'

export const runTest = async () => {
  try {
    process.env.SPACE_URL = 'https://rees46.jetbrains.space'
    process.env.SPACE_SECRET
      = ''

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
