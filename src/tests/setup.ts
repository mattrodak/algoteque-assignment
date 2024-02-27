import { mockServer } from '@/tests/mockServer'

import '@testing-library/jest-dom/vitest'

beforeAll(() => {
  mockServer.listen({ onUnhandledRequest: 'error' })
})

afterEach(() => {
  mockServer.resetHandlers()
})

afterAll(() => {
  mockServer.close()
})
