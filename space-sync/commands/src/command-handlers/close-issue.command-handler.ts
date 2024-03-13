import { ApiRepository }     from '@space/api'
import { CloseIssueProps }   from '../commands'
import { CloseIssueCommand } from '../commands'

export class CloseIssueCommandHandler extends CloseIssueCommand {
  constructor(props: CloseIssueProps, client: ApiRepository) {
    super(props, client)
  }

  async execute() {
    const { issue, project, author } = this.props

    const changes = {
      status: 'closed'
    }

    // TODO: add new method to close issue with comment on author
    return this.client.updateIssueBody(issue, project, changes)
  }
}
