import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export type CitiesState = {
  unitType: 'Metric' | 'Imperial'
}

const initialState: CitiesState = {
  unitType: 'Metric',
}

export const citiesSlice = createSlice({
  initialState,
  name: 'cities',
  reducers: {
    setTemperatureUnit: (
      state,
      action: PayloadAction<CitiesState['unitType']>,
    ) => {
      state.unitType = action.payload
    },
  },
})

export const { setTemperatureUnit } = citiesSlice.actions
