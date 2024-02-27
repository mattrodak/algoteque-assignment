import { Card } from '@/components/Card/Card'
import { LoadingIcon } from '@/components/LoadingIcon/LoadingIcon'
import { WeatherIcon } from '@/components/WeatherIcon/WeatherIcon'

import { useAppSelector } from '@/store/hooks'

import { useGetCurrentConditionsByLocationIdQuery } from '../../api/citiesApi'

export type WeatherDetailsCardProps = {
  locationKey: string
}

export function WeatherDetailsCard({ locationKey }: WeatherDetailsCardProps) {
  const unitType = useAppSelector(state => state.cities.unitType)
  const { data, isError, isFetching, isLoading } =
    useGetCurrentConditionsByLocationIdQuery(locationKey)
  const cityData = data?.[0]

  return (
    <Card
      className="col-span-12 md:col-span-4"
      errorMessage="There was an error fetching forecast data. Please try refreshing the page."
      isError={isError}
    >
      {isFetching || isLoading || !cityData ? (
        <div className="flex justify-center">
          <LoadingIcon />
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-3xl font-bold md:text-5xl">
                {cityData.Temperature[unitType].Value}°
                {cityData.Temperature[unitType].Unit}
              </span>
            </div>

            <div className="flex justify-center">
              <WeatherIcon
                description={cityData.WeatherText}
                iconId={cityData.WeatherIcon}
              />
            </div>
          </div>

          <div className="mt-4 md:mt-6">
            <dt className="text-sm font-medium text-gray-500">Weather</dt>
            <dd className="mt-1 text-lg font-bold">{cityData.WeatherText}</dd>

            <dt className="mt-4 text-sm font-medium text-gray-500">
              Visibility
            </dt>
            <dd className="mt-1 text-lg font-bold">
              {cityData.Visibility[unitType].Value}{' '}
              {cityData.Visibility[unitType].Unit}
            </dd>

            <dt className="mt-4 text-sm font-medium text-gray-500">Humidity</dt>
            <dd className="mt-1 text-lg font-bold">
              {cityData.RelativeHumidity}%
            </dd>

            <dt className="mt-4 text-sm font-medium text-gray-500">Wind</dt>
            <dd className="mt-1 text-lg font-bold">
              {cityData.Wind.Speed[unitType].Value}{' '}
              {cityData.Wind.Speed[unitType].Unit}
            </dd>
          </div>
        </>
      )}
    </Card>
  )
}
