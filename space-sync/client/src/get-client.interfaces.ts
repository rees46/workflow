import { SpaceApi }                from 'jetbrains-space-api'
import { ConfigurationParameters } from 'jetbrains-space-api'

export type GetClient = (config: ConfigurationParameters) => SpaceApi
