import { Outlet } from 'react-router-dom'

import { Search } from '@/components/Search/Search'

export function DefaultLayout() {
  return (
    <div className="mx-auto min-h-screen max-w-7xl px-4">
      <Search />

      <Outlet />
    </div>
  )
}
