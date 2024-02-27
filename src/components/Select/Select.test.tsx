import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import type { SelectProps } from './Select'
import { Select } from './Select'

type Value = 'option-1' | 'option-2'

const defaultProps: SelectProps<Value> = {
  id: 'id',
  label: 'Label',
  onChange: vi.fn(),
  options: [
    { label: 'Option 1', value: 'option-1' },
    { label: 'Option 2', value: 'option-2' },
  ],
  value: 'option-1',
}

const setup = (props = defaultProps) => ({
  user: userEvent.setup(),
  ...render(<Select {...props} />),
})

describe('Select', () => {
  it('renders label and options', () => {
    setup()

    expect(screen.getByText('Label')).toBeInTheDocument()
    expect(screen.getByText('Option 1')).toBeInTheDocument()
    expect(screen.getByText('Option 2')).toBeInTheDocument()
  })

  it('calls onChange with the selected value', async () => {
    const { user } = setup()

    await user.selectOptions(screen.getByRole('combobox'), 'option-2')

    expect(defaultProps.onChange).toHaveBeenCalledWith('option-2')
  })
})
