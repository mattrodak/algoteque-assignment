import type { ColumnDef } from '@tanstack/react-table'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Table, type TableProps } from './Table'

type User = {
  city: string
  id: number
  name: string
}

const data: User[] = [
  { city: 'New York', id: 1, name: 'John Doe' },
  { city: 'Los Angeles', id: 2, name: 'Jane Doe' },
  { city: 'Chicago', id: 3, name: 'Sam Smith' },
]

const columns: ColumnDef<User>[] = [
  {
    cell: ({ cell }) => cell.row.original.id,
    header: 'ID',
    id: 'id',
  },
  {
    cell: ({ cell }) => cell.row.original.name,
    header: 'Name',
    id: 'name',
  },
  {
    cell: ({ cell }) => cell.row.original.city,
    header: 'City',
    id: 'city',
  },
]

const defaultProps: TableProps<User> = {
  columns,
  data,
  isFetching: false,
  isLoading: false,
  onRowClick: vi.fn(),
}

const setup = (props = defaultProps) => ({
  user: userEvent.setup(),
  ...render(<Table {...props} />),
})

describe('Table component', () => {
  it('should render the table with the correct data', () => {
    setup()

    expect(screen.getByText('ID')).toBeInTheDocument()
    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('City')).toBeInTheDocument()

    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('New York')).toBeInTheDocument()

    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('Jane Doe')).toBeInTheDocument()
    expect(screen.getByText('Los Angeles')).toBeInTheDocument()

    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.getByText('Sam Smith')).toBeInTheDocument()
    expect(screen.getByText('Chicago')).toBeInTheDocument()
  })

  it('should call onRowClick when a row is clicked', async () => {
    const onRowClick = vi.fn()

    const { user } = setup({ ...defaultProps, onRowClick })

    const firstRow = screen.getByText('1').closest('tr')

    if (!firstRow) {
      throw new Error('Row not found')
    }

    await user.click(firstRow)

    expect(onRowClick).toHaveBeenCalled()
  })

  it('should not call onRowClick when a row is clicked and onRowClick is not provided', async () => {
    const { user } = setup({ ...defaultProps, onRowClick: undefined })

    const firstRow = screen.getByText('1').closest('tr')

    if (!firstRow) {
      throw new Error('Row not found')
    }

    await user.click(firstRow)

    expect(vi.fn()).not.toHaveBeenCalled()
  })

  it('should render the loading icon when isLoading is true', () => {
    setup({ ...defaultProps, isLoading: true })

    expect(screen.getByRole('status')).toBeInTheDocument()
  })

  it('should render the loading icon when isFetching is true', () => {
    setup({ ...defaultProps, isFetching: true })

    expect(screen.getByRole('status')).toBeInTheDocument()
  })

  it('should not render the loading icon when isLoading and isFetching are false', () => {
    setup({ ...defaultProps, isFetching: false, isLoading: false })

    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('should render no results message when data is empty', () => {
    setup({ ...defaultProps, data: [] })

    expect(screen.getByText('No results were found.')).toBeInTheDocument()
  })
})
