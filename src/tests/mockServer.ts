import { setupServer } from 'msw/node'

import { citiesApiMockHandlers } from '@/modules/cities/api/citiesApi.mock'

export const mockServer = setupServer(...citiesApiMockHandlers)
