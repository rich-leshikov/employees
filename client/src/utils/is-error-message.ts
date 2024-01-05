import {ErrorMessage} from '../types'

export const isErrorMessage = (error: unknown): error is ErrorMessage => {
  return (
    typeof error === 'object' &&
    error !== null &&
    'data' in error &&
    typeof (error as Record<string, unknown>).data === 'object'
  )
}