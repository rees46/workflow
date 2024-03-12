import { ApiRepository }      from '@space/api'
import { SendCommentProps }   from '../commands'
import { SendCommentCommand } from '../commands'

export class SendCommentCommandHandler extends SendCommentCommand {
  constructor(props: SendCommentProps, client: ApiRepository) {
    super(props, client)
  }

  async execute() {
    const { issue, project, text, author } = this.props

    return this.client.sendComment(issue, project, text, author)
  }
}
