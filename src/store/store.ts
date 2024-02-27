import type { Action, ThunkAction } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { baseApi } from '@/api/baseApi'

import rootReducer from './rootReducer'

export type RootState = ReturnType<typeof rootReducer>

export const makeStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(baseApi.middleware),
    preloadedState,
    reducer: rootReducer,
  })

  if (process.env.NODE_ENV !== 'production' && import.meta.hot) {
    import.meta.hot.accept(async () => {
      const nextRootReducer = await import('./rootReducer')

      store.replaceReducer(nextRootReducer.default)
    })
  }

  setupListeners(store.dispatch)

  return store
}

export const store = makeStore()

// Infer the type of `store`
export type AppStore = typeof store
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
