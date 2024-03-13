import { Changes }       from './api.repository'
import { ApiRepository } from './api.repository'
import { Fetcher }       from './fetcher'

export class SpaceApiClient extends ApiRepository {
  protected client: Fetcher

  public constructor(url?: string, key?: string) {
    if (!process.env.SPACE_URL && !url) {
      throw Error('URL must be provided')
    }

    if (!process.env.SPACE_SECRET && !key) {
      throw Error('Space key must be provided')
    }

    super(process.env.SPACE_URL ?? url!, process.env.SPACE_SECRET ?? key!)

    this.client = new Fetcher(this.url, this.key)
  }

  async sendComment(
    issue: string,
    project: string,
    text: string,
    author: string,
  ): Promise<unknown> {
    const data = {
      channel: `issue:key:${project.toUpperCase()}-T-${issue}`,
      content: {
        className: 'ChatMessage.Block',
        sections: [
          {
            className: 'MessageSection',
            elements: [
              {
                className: 'MessageText',
                content: text,
                accessory: {
                  className: 'MessageIcon',
                  icon: {
                    icon: 'github-small',
                  },
                },
              },
            ],
            footer: `Sent by GitHub from ${author}`,
          },
        ],
      },
    }

    return await this.client.fetch('/api/http/chats/messages/send-message', 'POST', data)
  }

  async updateIssueBody(issue: string, project: string, changes: Changes): Promise<unknown> {
    const data = {
      assignee: changes.assignee,
      description: changes.body,
      title: changes.title,
      status: changes.status,
    }

    return await this.client.fetch(
      `/api/http/projects/key:${project.toUpperCase()}/planning/issues/key:${project.toUpperCase()}-T-${issue}`,
      'PATCH',
      data,
    )
  }

  updateLabel(issue: string, label: string): Promise<unknown> {
    throw new Error('Method not implemented.')
  }

  updateStatus(issue: string, status: string): Promise<unknown> {
    throw new Error('Method not implemented.')
  }
}
