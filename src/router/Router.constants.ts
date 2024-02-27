import { CitiesRoutePathsEnum } from '@/modules/cities/routes/citiesRouteConfig.types'
import { DashboardRoutePathsEnum } from '@/modules/dashboard/routes/dashbaordRouteConfig.types'

export const GLOBAL_ROUTE_PATHS = {
  citiesDetails: `${CitiesRoutePathsEnum.DETAILS}`,
  citiesSearchResults: `${CitiesRoutePathsEnum.SEARCH_RESULTS}`,
  dashboard: `${DashboardRoutePathsEnum.DASHBOARD}`,
} as const
