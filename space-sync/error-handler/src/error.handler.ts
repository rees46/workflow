import { AxiosError } from 'axios'

type Callback = (value: string | Error) => unknown

type ErrorHandler = (error: unknown, callback: Callback) => void

export const errorHandler: ErrorHandler = (error, callback) => {
  if (error instanceof AxiosError) {
    callback(error.message)
    error.status && callback(error.status)
    callback('Response: ')
    callback(JSON.stringify(error.response?.data, undefined, 2))
    callback('Request: ')
    callback(JSON.stringify(error.response?.request, undefined, 2))
    return
  }

  if (error instanceof Error || typeof error === 'string') {
    callback(error)
    return
  }

  const errorMessage = 'Something went wrong'

  callback(errorMessage)
}
