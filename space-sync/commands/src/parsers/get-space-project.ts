type GetSpaceProject = (spaceURL: string) => string

export const getSpaceProject: GetSpaceProject = (spaceURL) => {
  const projectId = spaceURL.split('/p/')[1].split('/')[0]

  if (!projectId || projectId === '') {
    throw Error('Project ID in URL not found')
  }

  return projectId
}
