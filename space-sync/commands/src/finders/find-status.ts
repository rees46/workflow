import { SPACE_STATUSES } from '@space/constants'

type FindStatus = (status: string) => string | null

export const findStatus: FindStatus = (status) => {
  const githubStatus = status.toLowerCase()

  const spaceStatusID = SPACE_STATUSES.find((item) => {
    const spaceStatus = item.name.toLowerCase()

    return spaceStatus.includes(githubStatus) || githubStatus.includes(spaceStatus)
  })?.id

  return spaceStatusID ?? null
}
