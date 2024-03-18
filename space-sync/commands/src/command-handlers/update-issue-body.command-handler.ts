import { ApiRepository }          from '@space/api'
import { UpdateIssueBodyProps }   from '../commands'
import { UpdateIssueBodyCommand } from '../commands'
import { findStatus }             from '../finders'
import { findUser }               from '../finders'

export class UpdateIssueBodyCommandHandler extends UpdateIssueBodyCommand {
  constructor(props: UpdateIssueBodyProps, client: ApiRepository) {
    super(props, client)
  }

  async execute() {
    const { issue, project, body, title, assignee, status } = this.props

    let spaceStatusID = null

    if (status) {
      spaceStatusID = findStatus(status)
    }

    let spaceAssigneeID = null

    if (assignee) {
      spaceAssigneeID = findUser(assignee)
    }

    const changes = {
      body,
      title,
      assignee: spaceAssigneeID,
      status: spaceStatusID,
    }

    return this.client.updateIssueBody(issue, project, changes)
  }
}
