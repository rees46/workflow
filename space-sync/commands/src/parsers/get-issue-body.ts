import { Context } from '../command-handler.interfaces'


export type GetIssueBody = (context: Context) => string

export const getIssueBody: GetIssueBody = (context) => {
  const body = context.payload.issue?.body

  if (!body || body === '') {
    throw Error('Space issue not found in the issue body')
  }

  return body
}
