import { Configuration } from 'jetbrains-space-api'
import { SpaceApi }      from 'jetbrains-space-api'
import { ApiRepository } from './api.repository'

export class SpaceApiClient extends ApiRepository {
  protected client: SpaceApi

  public constructor(url?: string, key?: string) {
    if (!process.env.SPACE_URL && !url) {
      throw Error('URL must be provided')
    }

    if (!process.env.SPACE_KEY && !key) {
      throw Error('Space key must be provided')
    }

    super(process.env.SPACE_URL ?? url!, process.env.SPACE_KEY ?? key!)

    const configuration = new Configuration({ basePath: this.url, apiKey: this.key })

    this.client = new SpaceApi(configuration)
  }

  async sendComment(issue: string, project: string, text: string, author: string): Promise<unknown> {
    return this.client.chatsMessagesSendMessagePost({
      content: {
        text,
        sections: [
          {
            footer: 'Sent by',
            className: '',
            elements: [
              {
                content: author,
                className: '',
                elements: [],
                fields: [],
              }],
          }],
        className: '',
      },
      channel: {
        issue: {
          key: `DEV-T-${issue}`,
          project: {
            key: project.toUpperCase(),
            className: '',
            id: '',
          },
          className: '',
          externalId: '',
          id: '',
        },
        id: '',
        message: '',
        codeReview: {
          className: '',
          id: '',
          key: '',
          number: 0,
        },
        member: {
          className: '',
          externalId: '',
          id: '',
          username: '',
        },
        contactKey: '',
        article: '',
        channel: {
          className: '',
          id: '',
          name: '',
        },
        className: '',
        application: {
          className: '',
          clientId: '',
          id: '',
        }
      }
    })
  }

  updateLabel(issue: string, label: string): Promise<unknown> {
    throw new Error('Method not implemented.')
  }

  updateStatus(issue: string, status: string): Promise<unknown> {
    throw new Error('Method not implemented.')
  }
}
