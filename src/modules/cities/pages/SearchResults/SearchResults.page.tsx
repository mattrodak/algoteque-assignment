import { useCallback, useMemo } from 'react'
import { generatePath, useNavigate, useParams } from 'react-router-dom'
import type { ColumnDef, Row } from '@tanstack/react-table'

import { GLOBAL_ROUTE_PATHS } from '@/router/Router.constants'

import { Card } from '@/components/Card/Card'
import { PageHeader } from '@/components/PageHeader/PageHeader'
import { Table } from '@/components/Table/Table'

import { useSearchByCityQuery } from '../../api/citiesApi'
import type { CityWithId } from '../../types/cities.types'

export function Component() {
  const navigate = useNavigate()
  const { city = '' } = useParams<{ city: string }>()
  const {
    data: items,
    isError,
    isFetching,
    isLoading,
  } = useSearchByCityQuery(city)

  const handleOnRowClick = useCallback(
    (row: Row<CityWithId>) => {
      const path = generatePath(GLOBAL_ROUTE_PATHS.citiesDetails, {
        locationKey: row.original.Key,
      })

      navigate(path)
    },
    [navigate],
  )

  const data = useMemo<CityWithId[]>(() => {
    if (!items?.length) {
      return []
    }

    return items.map(item => ({
      ...item,
      id: item.Key,
    }))
  }, [items])

  const columns = useMemo<ColumnDef<CityWithId>[]>(
    () => [
      {
        cell: ({ cell }) => cell.row.original.LocalizedName,
        header: 'City',
        id: 'city',
      },
      {
        cell: ({ cell }) => cell.row.original.Country.LocalizedName,
        header: 'Country',
        id: 'country',
      },
      {
        cell: ({ cell }) => cell.row.original.AdministrativeArea.LocalizedName,
        header: 'State',
        id: 'state',
      },
    ],
    [],
  )

  return (
    <>
      <PageHeader title={`Search results for '${city}':`} />

      <Card
        errorMessage="There was an error fetching forecast data. Please try refreshing the page."
        isError={isError}
      >
        <Table
          columns={columns}
          data={data}
          isFetching={isFetching}
          isLoading={isLoading}
          onRowClick={handleOnRowClick}
        />
      </Card>
    </>
  )
}

Component.displayName = 'CitiesSearchResultsPage'
