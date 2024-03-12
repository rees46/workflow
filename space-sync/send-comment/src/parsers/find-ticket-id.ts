import { ticketValidator } from '../validators'

type FindTicketId = (body: string, title: string) => string

export const findTicketID: FindTicketId = (body, whereToLook) => {
  const titleRegex = new RegExp(whereToLook)

  if (!titleRegex.test(body)) {
    throw Error('Issue does not have provided block where to look for ticket ID')
  }

  const spaceURL = body.split(whereToLook)[1]

  const ticketID = spaceURL.split('/').slice(-1)[0]
  const ticketValid = ticketValidator(ticketID)

  if (!ticketValid) {
    throw Error('Issue URL is faulty')
  }

  return ticketID
}
