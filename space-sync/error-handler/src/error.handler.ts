type Callback = (value: string) => unknown

type ErrorHandler = (error: unknown, callback: Callback) => void

export const errorHandler: ErrorHandler = (error, callback) => {
  let errorMessage = 'Something went wrong'

  if (error instanceof Error) errorMessage = error.message

  callback(errorMessage)
}
