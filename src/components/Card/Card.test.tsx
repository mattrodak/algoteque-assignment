import { render, screen } from '@testing-library/react'

import type { CardProps } from './Card'
import { Card } from './Card'

const defaultProps: CardProps = {
  children: 'Card content',
}

const setup = (props = defaultProps) => ({
  ...render(<Card {...props} />),
})

describe('Card', () => {
  it('renders the children', () => {
    setup()

    expect(screen.getByText('Card content')).toBeInTheDocument()
  })

  it('passes through className', () => {
    setup({ ...defaultProps, className: 'text-red-500' })

    expect(screen.getByText('Card content')).toHaveClass('text-red-500')
  })

  it('renders an error message when isError is true', () => {
    setup({ ...defaultProps, errorMessage: 'Error message', isError: true })

    expect(screen.getByText('Error message')).toBeInTheDocument()
  })
})
