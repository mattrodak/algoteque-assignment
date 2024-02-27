import { render, screen } from '@testing-library/react'

import type { PageHeaderProps } from './PageHeader'
import { PageHeader } from './PageHeader'

const defaultProps: PageHeaderProps = {
  title: 'Page Title',
}

const setup = (props = defaultProps) => ({
  ...render(<PageHeader {...props} />),
})

describe('PageHeader', () => {
  it('renders the title', () => {
    setup()

    expect(
      screen.getByRole('heading', { name: 'Page Title' }),
    ).toBeInTheDocument()
  })

  it('renders the children', () => {
    setup({ ...defaultProps, children: <div>Children</div> })

    expect(screen.getByText('Children')).toBeInTheDocument()
  })
})
