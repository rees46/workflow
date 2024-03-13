import { SPACE_USERS } from '@space/constants'

export type FindUser = (githubUsername: string) => string | null

export const findUser: FindUser = (githubUsername) => {
  const spaceUserID = SPACE_USERS.find((item) => {
    const githubName = githubUsername.toLowerCase()
    const spaceUsername = item.username.toLowerCase()
    const spaceLastname = item.name.lastName.toLowerCase()

    return githubName.includes(spaceUsername) ||
      spaceUsername.includes(githubName) ||
      spaceLastname.includes(githubName) ||
      githubName.includes(spaceLastname)
  })?.id

  if (!spaceUserID) {
    console.error(`🔎🔎🔎  User with GitHub name ${githubUsername} not found in Space nor in username nor in last name`)
    return null
  }

  return spaceUserID
}
