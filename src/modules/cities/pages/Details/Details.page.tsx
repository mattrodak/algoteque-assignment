import { useCallback } from 'react'
import { useParams } from 'react-router-dom'

import { LoadingIcon } from '@/components/LoadingIcon/LoadingIcon'
import { PageHeader } from '@/components/PageHeader/PageHeader'
import { Select } from '@/components/Select/Select'

import { useAppDispatch, useAppSelector } from '@/store/hooks'

import { useGetCityByLocationIdQuery } from '../../api/citiesApi'
import { ForecastCard } from '../../components/ForecastCard/ForecastCard'
import { WeatherDetailsCard } from '../../components/WeatherDetailsCard/WeatherDetailsCard'
import type { CitiesState } from '../../store/citiesStore.slice'
import { setTemperatureUnit } from '../../store/citiesStore.slice'

export function Component() {
  const dispatch = useAppDispatch()
  const unitType = useAppSelector(state => state.cities.unitType)

  const { locationKey = '' } = useParams<{ locationKey: string }>()

  const { data, isError, isFetching, isLoading } =
    useGetCityByLocationIdQuery(locationKey)

  const handleUnitTypeChange = useCallback(
    (value: CitiesState['unitType']) => {
      dispatch(setTemperatureUnit(value))
    },
    [dispatch],
  )

  if (isFetching || isLoading) {
    return (
      <div className="flex justify-center">
        <LoadingIcon />
      </div>
    )
  }

  if (isError || !data) {
    return (
      <div
        className="mt-4 rounded-lg bg-red-50 p-4 text-sm text-red-800"
        role="alert"
      >
        There was an error fetching forecast data. Please try refreshing the
        page.
      </div>
    )
  }

  return (
    <div>
      <PageHeader title={`${data.EnglishName}, ${data.Country.EnglishName}`}>
        <Select
          className="w-28"
          id="unitType"
          onChange={handleUnitTypeChange}
          options={[
            { label: 'Metric', value: 'Metric' },
            { label: 'Imperial', value: 'Imperial' },
          ]}
          value={unitType}
        />
      </PageHeader>

      <div className="grid gap-4 md:grid-cols-12">
        <WeatherDetailsCard locationKey={locationKey} />

        <ForecastCard locationKey={locationKey} />
      </div>
    </div>
  )
}

Component.displayName = 'CityDetailsPage'
