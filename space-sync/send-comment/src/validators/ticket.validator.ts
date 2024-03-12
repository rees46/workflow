type TicketValidator = (input: string) => boolean

export const ticketValidator: TicketValidator = (input) => /\d/.test(input)
