import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { getCityByLocationIdResults } from '@/testData/getCityByLocationId.results'

import { renderWithProviders } from '@/tests/utils/test-utils'

import { Component } from './Details.page'

vi.mock('@/modules/cities/components/ForecastCard/ForecastCard', () => ({
  ForecastCard: () => <div data-testid="forecast-card" />,
}))

vi.mock(
  '@/modules/cities/components/WeatherDetailsCard/WeatherDetailsCard',
  () => ({
    WeatherDetailsCard: () => <div data-testid="weather-details-card" />,
  }),
)

vi.mock('react-router-dom', () => ({
  useParams: () => ({ locationKey: '12345' }),
}))

const setup = () => ({
  user: userEvent.setup(),
  ...renderWithProviders(<Component />),
})

describe('Details Page', () => {
  it('should render page header with correct data', async () => {
    setup()

    expect(screen.getByText('Loading...')).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
        `${getCityByLocationIdResults.EnglishName}, ${getCityByLocationIdResults.Country.EnglishName}`,
      )
    })
  })

  it('should render the forecast card', async () => {
    setup()

    await waitFor(() => {
      expect(screen.getByTestId('forecast-card')).toBeInTheDocument()
    })
  })

  it('should render the weather details card', async () => {
    setup()

    await waitFor(() => {
      expect(screen.getByTestId('weather-details-card')).toBeInTheDocument()
    })
  })

  it('should dispatch the setTemperatureUnit action on unitType change', async () => {
    const { user } = setup()

    await waitFor(() => {
      expect(screen.getByRole('combobox')).toBeInTheDocument()
    })

    await user.selectOptions(screen.getByRole('combobox'), 'Imperial')

    expect(screen.getByRole('combobox')).toHaveValue('Imperial')
  })
})
