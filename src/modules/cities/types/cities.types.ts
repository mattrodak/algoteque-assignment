import type { SearchByCityResponse } from '@/types/searchByCity.types'

export interface CityWithId extends SearchByCityResponse {
  id: string
}
