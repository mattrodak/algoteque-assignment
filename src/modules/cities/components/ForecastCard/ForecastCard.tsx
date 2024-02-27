import { Card } from '@/components/Card/Card'
import { LoadingIcon } from '@/components/LoadingIcon/LoadingIcon'
import { LoadingOverlay } from '@/components/LoadingOverlay/LoadingOverlay'
import { WeatherIcon } from '@/components/WeatherIcon/WeatherIcon'

import { useAppSelector } from '@/store/hooks'

import { useGet5DayForecastByLocationIdQuery } from '../../api/citiesApi'

export type ForecastCardProps = {
  locationKey: string
}

export function ForecastCard({ locationKey }: ForecastCardProps) {
  const unitType = useAppSelector(state => state.cities.unitType)
  const { data, isError, isFetching, isLoading } =
    useGet5DayForecastByLocationIdQuery({
      locationKey,
      useMetric: unitType === 'Metric',
    })
  const forecastData = data?.DailyForecasts

  return (
    <LoadingOverlay
      className="col-span-12 md:col-span-8 md:self-start"
      isLoading={isFetching}
    >
      <Card
        errorMessage="There was an error fetching forecast data. Please try refreshing the page."
        isError={isError}
      >
        {isLoading || !forecastData ? (
          <div className="flex justify-center">
            <LoadingIcon />
          </div>
        ) : (
          <div>
            <h4 className="text-3xl font-bold md:text-5xl">5 day forecast</h4>

            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-5">
              {forecastData.map(forecast => (
                <div
                  key={forecast.EpochDate}
                  className="flex flex-col items-center"
                >
                  <span>
                    {new Date(forecast.Date).toLocaleDateString('en-US', {
                      weekday: 'short',
                    })}
                  </span>

                  <WeatherIcon
                    description={forecast.Day.IconPhrase}
                    iconId={forecast.Day.Icon}
                  />
                  <span>
                    {forecast.Temperature.Minimum.Value}° -{' '}
                    {forecast.Temperature.Maximum.Value}°
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </Card>
    </LoadingOverlay>
  )
}
