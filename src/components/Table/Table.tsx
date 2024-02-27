import type { ColumnDef, Row } from '@tanstack/react-table'
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { twMerge } from 'tailwind-merge'

import { LoadingIcon } from '@/components/LoadingIcon/LoadingIcon'

export type TableProps<
  T extends {
    id: string | number
  },
> = {
  columns: ColumnDef<T>[]
  data: T[]
  isFetching?: boolean
  isLoading?: boolean
  onRowClick?: (
    row: Row<T>,
    event?: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
  ) => void
}

export function Table<T extends { id: string | number }>({
  columns,
  data,
  isFetching,
  isLoading,
  onRowClick,
}: TableProps<T>) {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  })

  const hasOnRowClickHandler = typeof onRowClick === 'function'

  return (
    <div className="overflow-y-auto border border-t-0 border-gray-200">
      <table className="w-full min-w-96 table-fixed border-collapse bg-white text-left text-sm text-gray-500">
        <thead className="bg-gray-100">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th
                  key={header.id}
                  className="border-t px-6 py-4 align-top text-gray-900"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        {!isLoading && (
          <tbody className="relative divide-y divide-gray-100 border-t border-gray-100">
            {table.getRowModel().rows.map(row => (
              <tr
                key={row.id}
                className={twMerge(
                  'odd:bg-white even:bg-gray-50 hover:bg-gray-100',
                  hasOnRowClickHandler && 'cursor-pointer',
                )}
                onClick={event => {
                  onRowClick?.(row, event)
                }}
              >
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className="px-6 py-4">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}

            {data.length === 0 && (
              <tr>
                <td colSpan={columns.length}>
                  <div className="flex items-center justify-center px-6 py-4">
                    <p className="font-bold">No results were found.</p>
                  </div>
                </td>
              </tr>
            )}

            {isFetching && data.length > 0 && (
              <tr>
                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <td>
                  <div className="absolute left-0 top-0 flex size-full cursor-not-allowed items-center justify-center bg-gray-600/40">
                    <LoadingIcon />
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        )}
      </table>

      {isLoading && (
        <div className="flex items-center justify-center p-6">
          <LoadingIcon />
        </div>
      )}
    </div>
  )
}
