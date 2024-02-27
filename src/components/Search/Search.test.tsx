import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Search } from './Search'

const navigate = vi.fn()

vi.mock('react-router-dom', async () => {
  const actual = await import('react-router-dom')

  return {
    ...actual,
    useNavigate: () => navigate,
  }
})

const setup = () => ({
  user: userEvent.setup(),
  ...render(<Search />),
})

describe('Search', () => {
  it('should render the search form', () => {
    setup()

    expect(
      screen.getByPlaceholderText('Search for a city...'),
    ).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('should have correct form values', async () => {
    const { user } = setup()

    await user.type(
      screen.getByPlaceholderText('Search for a city...'),
      'New York',
    )
    await user.click(screen.getByRole('button', { name: /search/i }))

    expect(screen.getByRole('form')).toHaveFormValues({ city: 'New York' })
  })

  it('should navigate to the search results page', async () => {
    const { user } = setup()

    await user.type(
      screen.getByPlaceholderText('Search for a city...'),
      'New York',
    )
    await user.click(screen.getByRole('button', { name: /search/i }))

    expect(navigate).toHaveBeenCalledWith('/cities/search/New York')
  })
})
