type Callback = (value: string | Error) => unknown

type ErrorHandler = (error: unknown, callback: Callback) => void

export const errorHandler: ErrorHandler = (error, callback) => {
  if (error instanceof Error || typeof error === 'string') {
    callback(error)
    return
  }

  const errorMessage = 'Something went wrong'

  callback(errorMessage)
}
