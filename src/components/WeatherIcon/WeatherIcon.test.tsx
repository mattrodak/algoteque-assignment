import { render, screen } from '@testing-library/react'

import type { WeatherIconProps } from './WeatherIcon'
import { WeatherIcon } from './WeatherIcon'

const defaultProps: WeatherIconProps = {
  description: 'Sunny',
  iconId: 1,
}

const setup = (props = defaultProps) => ({
  ...render(<WeatherIcon {...props} />),
})

describe('WeatherIcon', () => {
  it('renders an image with the correct alt text', () => {
    setup()

    expect(screen.getByAltText('Sunny')).toBeInTheDocument()
  })

  it('renders an image with the correct src', () => {
    setup()

    expect(
      screen.getByRole('img', {
        name: 'Sunny',
      }),
    ).toHaveAttribute(
      'src',
      'https://developer.accuweather.com/sites/default/files/01-s.png',
    )
  })

  it('passes through className', () => {
    setup({ ...defaultProps, className: 'text-red-500' })

    expect(screen.getByRole('img')).toHaveClass('text-red-500')
  })
})
