type GetSpaceUrl = (body: string, whereToLook: string) => string

export const getSpaceUrl: GetSpaceUrl = (body, whereToLook) => {
  const titleRegex = new RegExp(whereToLook)

  if (!titleRegex.test(body)) {
    throw Error('Issue does not have provided block where to look for ticket ID')
  }

  const spaceURL = body.split(whereToLook)[1]

  if (!spaceURL || spaceURL === '') {
    throw Error('Space URL not found or is faulty')
  }

  return spaceURL.replaceAll('\n', '')
}
