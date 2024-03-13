import { log } from 'node:util'

type Method = 'POST' | 'PATCH' | 'GET'

export class Fetcher {
  constructor(private readonly url: string, private readonly secret: string) {
  }

  async fetch(
    postfix: string,
    method: Method,
    data: Object,
    shouldReturnData: boolean = false,
  ): Promise<unknown> {
    const response = await fetch(this.url + postfix, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.secret}`,
      },
      body: JSON.stringify(data),
    })

    return shouldReturnData ? await response.json() : response.statusText
  }
}
