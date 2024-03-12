import { AxiosError } from 'axios'

type Callback = (value: string | Error) => unknown

type ErrorHandler = (error: unknown, callback: Callback) => void

export const errorHandler: ErrorHandler = (error, callback) => {
  if (error instanceof AxiosError) {
    callback(error.message)
    error.status && callback(error.status)
    callback(JSON.stringify(error.response?.data, undefined, 2))
  }

  if (error instanceof Error || typeof error === 'string') {
    callback(error)
  }

  let errorMessage = 'Something went wrong'

  callback(errorMessage)
}
