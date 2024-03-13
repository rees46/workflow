export type Changes = {
  body?: string,
  title?: string,
  status?: string,
  assignee?: string,
}

export abstract class ApiRepository {
  protected constructor(readonly url: string, readonly key: string) {
  }

  abstract sendComment(issue: string, project: string, text: string, author: string): Promise<unknown>

  abstract updateIssueBody(issue: string, project: string, changes: Changes): Promise<unknown>

  abstract updateLabel(issue: string, label: string): Promise<unknown>

  abstract updateStatus(issue: string, status: string): Promise<unknown>
}
