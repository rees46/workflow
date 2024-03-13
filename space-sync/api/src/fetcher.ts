type Method = 'POST' | 'PATCH' | 'GET'

export class Fetcher {
  constructor(private readonly url: string, private readonly secret: string) {
  }

  async fetch(postfix: string, method: Method, data: Object): Promise<unknown> {
    const response = await fetch(this.url + postfix, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.secret}`,
      },
      body: JSON.stringify(data),
    })

    console.log(await response.json())

    return await response.json()
  }
}
