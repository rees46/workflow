import { Octokit } from 'octokit'

export const client = new Octokit({
  auth: process.env.GITHUB_TOKEN,
})
