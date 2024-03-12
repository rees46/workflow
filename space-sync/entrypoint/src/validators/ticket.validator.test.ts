import { expect }          from 'vitest'
import { it }              from 'vitest'
import { describe }        from 'vitest'
import { ticketValidator } from './ticket.validator'

describe('Ticket validator', () => {
  it('Checks correctly', () => {
    const result = ticketValidator('123')
    expect(result).toBeTruthy()
  })
})
