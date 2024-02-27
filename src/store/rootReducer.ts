import { combineReducers } from '@reduxjs/toolkit'

import { citiesSlice } from '@/modules/cities/store/citiesStore.slice'

import { baseApi } from '@/api/baseApi'

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  [citiesSlice.name]: citiesSlice.reducer,
})

export default rootReducer
