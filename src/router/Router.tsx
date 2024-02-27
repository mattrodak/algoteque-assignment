import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import { CITIES_ROUTES } from '@/modules/cities/routes/citiesRouteConfig'
import { DASHBOARD_ROUTES } from '@/modules/dashboard/routes/dashboardRouteConfig'

import { ErrorBoundary } from '@/components/ErrorBoundary/ErrorBoundary'

import { DefaultLayout } from '@/layouts/DefaultLayout/DefaultLayout'

import { GLOBAL_ROUTE_PATHS } from './Router.constants'

const router = createBrowserRouter([
  {
    children: [
      ...CITIES_ROUTES,
      ...DASHBOARD_ROUTES,
      { element: <Navigate to={GLOBAL_ROUTE_PATHS.dashboard} />, path: '*' },
    ],
    element: <DefaultLayout />,
    errorElement: <ErrorBoundary />,
  },
])

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose())
}

export function Router() {
  return <RouterProvider router={router} />
}
