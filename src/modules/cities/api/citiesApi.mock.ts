import type { RequestHandler } from 'msw'
import { http, HttpResponse } from 'msw'

import { getCityByLocationIdResults } from '@/testData/getCityByLocationId.results'
import { getCurrentConditionsByLocationIdResults } from '@/testData/getCurrentConditionsByLocationId.results'

export const getCurrentConditionsByLocationIdMockSuccessHandler: RequestHandler =
  http.get(
    `http://dataservice.accuweather.com/currentconditions/v1/:locationKey`,
    () => HttpResponse.json(getCurrentConditionsByLocationIdResults),
  )

export const getCurrentConditionsByLocationIdMockErrorHandler: RequestHandler =
  http.get(
    `http://dataservice.accuweather.com/currentconditions/v1/:locationKey`,
    () => HttpResponse.error(),
  )

export const getCityByLocationIdMockSuccessHandler: RequestHandler = http.get(
  `http://dataservice.accuweather.com/locations/v1/:locationKey`,
  () => HttpResponse.json(getCityByLocationIdResults),
)

export const citiesApiMockHandlers = [
  getCurrentConditionsByLocationIdMockSuccessHandler,
  getCityByLocationIdMockSuccessHandler,
]
