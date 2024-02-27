import type { RouteObject } from 'react-router-dom'

import { DashboardRoutePathsEnum } from './dashbaordRouteConfig.types'

export const DASHBOARD_ROUTES: RouteObject[] = [
  {
    lazy: () => import('../pages/Dashboard/Dashboard.page'),
    path: `${DashboardRoutePathsEnum.DASHBOARD}`,
  },
]
