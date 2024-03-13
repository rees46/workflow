import { ApiRepository }          from '@space/api'
import { SPACE_USERS }            from '@space/constants'
import { SPACE_STATUSES }         from '@space/constants'
import { UpdateIssueBodyProps }   from '../commands'
import { UpdateIssueBodyCommand } from '../commands'

export class UpdateIssueBodyCommandHandler extends UpdateIssueBodyCommand {
  constructor(props: UpdateIssueBodyProps, client: ApiRepository) {
    super(props, client)
  }

  async execute() {
    const { issue, project, body, title, assignee, status } = this.props

    let spaceStatusID

    if (status) {
      spaceStatusID = SPACE_STATUSES.find((item) => {
        const githubStatus = status.toLowerCase()
        const spaceStatus = item.name.toLowerCase()

        return spaceStatus.includes(githubStatus) || githubStatus.includes(spaceStatus)
      })?.id
    }

    let spaceAssigneeID

    if (assignee) {
      spaceAssigneeID = SPACE_USERS.find((item) => {
        const githubName = assignee.toLowerCase()
        const spaceUsername = item.username.toLowerCase()
        const spaceLastname = item.name.lastName.toLowerCase()

        return githubName.includes(spaceUsername) ||
          spaceUsername.includes(githubName) ||
          spaceLastname.includes(githubName) ||
          githubName.includes(spaceLastname)
      })?.id

      if (!spaceAssigneeID) {
        console.log(`🔎🔎🔎  User with GitHub name ${assignee} not found in Space nor in username nor in last name`)
      }
    }

    const changes = {
      body,
      title,
      assignee: spaceAssigneeID,
      status: spaceStatusID,
    }

    console.log(changes)

    return this.client.updateIssueBody(issue, project, changes)
  }
}
