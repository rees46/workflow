import { SpaceApi }      from 'jetbrains-space-api'
import { Configuration } from 'jetbrains-space-api'
import { GetClient }     from './get-client.interfaces'

export const getClient: GetClient = (config) => {
  const configuration = new Configuration(config)

  return new SpaceApi(configuration)
}
