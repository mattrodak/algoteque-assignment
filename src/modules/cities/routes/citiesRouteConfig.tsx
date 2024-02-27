import { Navigate, type RouteObject } from 'react-router-dom'

import { GLOBAL_ROUTE_PATHS } from '@/router/Router.constants'

import { CitiesRoutePathsEnum } from './citiesRouteConfig.types'

export const CITIES_ROUTES: RouteObject[] = [
  {
    lazy: () => import('../pages/SearchResults/SearchResults.page'),
    path: `${CitiesRoutePathsEnum.SEARCH_RESULTS}`,
  },
  {
    element: <Navigate to={GLOBAL_ROUTE_PATHS.dashboard} />,
    path: `/cities/search`,
  },
  {
    lazy: () => import('../pages/Details/Details.page'),
    path: `${CitiesRoutePathsEnum.DETAILS}`,
  },
]
