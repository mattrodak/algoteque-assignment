import { baseApi } from '@/api/baseApi'

import type { Get5DayForecastByLocationIdResponse } from '@/types/get5DaysForecastByLocationId.types'
import type { CurrentConditionsResponse } from '@/types/getCurrentConditionsByLocationId.types'
import type { SearchByCityResponse } from '@/types/searchByCity.types'

// 8 hours in seconds
const KEEP_UNUSED_DATA_FOR = 8 * 60 * 60

export const citiesApi = baseApi.injectEndpoints({
  endpoints: build => ({
    get5DayForecastByLocationId: build.query<
      Get5DayForecastByLocationIdResponse,
      { locationKey: string; useMetric: boolean }
    >({
      keepUnusedDataFor: KEEP_UNUSED_DATA_FOR,
      query: ({ locationKey, useMetric }) =>
        `forecasts/v1/daily/5day/${locationKey}?apikey=${import.meta.env.VITE_ACCUWEATHER_API_KEY}&metric=${useMetric}`,
    }),
    getCityByLocationId: build.query<SearchByCityResponse, string>({
      keepUnusedDataFor: KEEP_UNUSED_DATA_FOR,
      query: (locationKey: string) =>
        `locations/v1/${locationKey}?apikey=${import.meta.env.VITE_ACCUWEATHER_API_KEY}`,
    }),
    getCurrentConditionsByLocationId: build.query<
      CurrentConditionsResponse[],
      string
    >({
      keepUnusedDataFor: KEEP_UNUSED_DATA_FOR,
      query: (locationKey: string) =>
        `currentconditions/v1/${locationKey}?apikey=${import.meta.env.VITE_ACCUWEATHER_API_KEY}&details=true`,
    }),
    searchByCity: build.query<SearchByCityResponse[], string>({
      keepUnusedDataFor: KEEP_UNUSED_DATA_FOR,
      query: (city: string) =>
        `locations/v1/cities/search?apikey=${import.meta.env.VITE_ACCUWEATHER_API_KEY}&q=${city}`,
    }),
  }),
})

export const {
  useGet5DayForecastByLocationIdQuery,
  useGetCityByLocationIdQuery,
  useGetCurrentConditionsByLocationIdQuery,
  useSearchByCityQuery,
} = citiesApi
