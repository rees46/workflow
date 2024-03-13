import { getInput }              from '@actions/core'
import { setFailed }             from '@actions/core'
import { context }               from '@actions/github'
import { SpaceApiClient }        from '@space/api'
import { commandHandlerFactory } from '@space/commands'
import { errorHandler }          from '@space/error-handler'

export const run = async () => {
  try {
    const issueTitleWithTicketID = getInput('blockWithTicketID', { required: true })

    process.env.SPACE_URL = getInput('spaceURL', { required: true })
    process.env.SPACE_SECRET = getInput('spaceSecret', { required: true })

    console.log(JSON.stringify(context, undefined, 2))

    const client = new SpaceApiClient()

    const command = commandHandlerFactory(context, client, issueTitleWithTicketID)

    const result = await command.execute()

    console.log(result)
  } catch (error) {
    errorHandler(error, setFailed)
  }
}
