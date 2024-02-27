import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { mockServer } from '@/tests/mockServer'
import { renderWithProviders } from '@/tests/utils/test-utils'

import { getCurrentConditionsByLocationIdMockErrorHandler } from '../../api/citiesApi.mock'
import type { WeatherDetailsCardProps } from './WeatherDetailsCard'
import { WeatherDetailsCard } from './WeatherDetailsCard'

const defaultProps: WeatherDetailsCardProps = {
  locationKey: '123',
}

const setup = (props = defaultProps) => ({
  user: userEvent.setup(),
  ...renderWithProviders(<WeatherDetailsCard {...props} />),
})

describe('WeatherDetailsCard', () => {
  it('renders the loading icon when fetching data', async () => {
    setup()

    await waitFor(() => {
      expect(screen.getByRole('status')).toBeInTheDocument()
    })
  })

  it('renders the weather details card', async () => {
    setup()

    await waitFor(() => {
      expect(screen.getByText('Weather')).toBeInTheDocument()
      expect(screen.getByText('Cloudy')).toBeInTheDocument()

      expect(screen.getByText('Wind')).toBeInTheDocument()
      expect(screen.getByText('3.9 km/h')).toBeInTheDocument()
    })
  })

  it('renders the error message when there is an error fetching data', async () => {
    mockServer.use(getCurrentConditionsByLocationIdMockErrorHandler)

    setup()

    await waitFor(() => {
      expect(
        screen.getByText(
          'There was an error fetching forecast data. Please try refreshing the page.',
        ),
      ).toBeInTheDocument()
    })
  })
})
