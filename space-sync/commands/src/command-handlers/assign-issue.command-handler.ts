import { ApiRepository }          from '@space/api'
import { AssignIssueProps }       from '../commands'
import { AssignIssueCommand }     from '../commands'
import { findUser }               from '../finders'

export class AssignIssueCommandHandler extends AssignIssueCommand {
  constructor(props: AssignIssueProps, client: ApiRepository) {
    super(props, client)
  }

  async execute() {
    const { issue, project, assignee } = this.props

    const spaceUserID = findUser(assignee)

    if (!spaceUserID) {
      throw Error(`User with Github username ${assignee} not found in SPACE_USERS`)
    }

    return this.client.updateAssignee(issue, project, spaceUserID)
  }
}
