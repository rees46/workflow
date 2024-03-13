import { ApiRepository }          from '@space/api'
import { UnassignIssueProps }     from '../commands'
import { UnassignIssueCommand }   from '../commands'

export class UnassignIssueCommandHandler extends UnassignIssueCommand {
  constructor(props: UnassignIssueProps, client: ApiRepository) {
    super(props, client)
  }

  async execute() {
    const { issue, project } = this.props

    return this.client.updateAssignee(issue, project)
  }
}
