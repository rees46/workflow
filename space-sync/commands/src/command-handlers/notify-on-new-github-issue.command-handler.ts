import { ApiRepository }      from '@space/api'
import { NotifyOnNewGithubIssueProps } from '../commands'
import { NotifyOnNewGithubIssueCommand } from '../commands'

export class NotifyOnNewGithubIssueCommandHandler extends NotifyOnNewGithubIssueCommand {
  constructor(props: NotifyOnNewGithubIssueProps, client: ApiRepository) {
    super(props, client)
  }

  async execute() {
    const { issue, project, author, url } = this.props

    const notificationText = `This issue has been mentioned in a newly created GitHub issue: ${url}`

    return this.client.sendComment(issue, project, notificationText, author)
  }
}
