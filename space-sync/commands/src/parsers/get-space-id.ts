import { ticketValidator } from '../validators'

type GetIssueID = (spaceURL: string) => string

export const getIssueID: GetIssueID = (spaceURL) => {
  const ticketID = spaceURL.split('issues/')[1].split('/')[0]
  const ticketValid = ticketValidator(ticketID)

  if (!ticketValid) {
    throw Error('Issue ID in Space URL not found')
  }

  return ticketID
}
