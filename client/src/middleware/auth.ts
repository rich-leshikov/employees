import {createListenerMiddleware} from '@reduxjs/toolkit'
import {authApi} from '../app/services/auth'

export const listenerMiddleware = createListenerMiddleware()

listenerMiddleware.startListening({
  matcher: authApi.endpoints.login.matchFulfilled,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners()
  }
})