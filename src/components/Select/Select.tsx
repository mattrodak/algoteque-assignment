import { forwardRef } from 'react'

export type SelectOption = {
  label: string
  value: string
}

export type SelectProps<T extends string> = {
  id: string
  onChange: (value: T) => void
  options: SelectOption[]
  value: T
  className?: string
  label?: string
}

export function ForwardSelect<T extends string>(
  { className, id, label, onChange, options, value }: SelectProps<T>,
  ref: React.Ref<HTMLSelectElement>,
) {
  return (
    <div className={className}>
      {label && (
        <label
          className="mb-2 block text-sm font-medium text-gray-900"
          htmlFor={id}
        >
          {label}
        </label>
      )}

      <select
        ref={ref}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        id={id}
        onChange={event => onChange(event.target.value as T)}
        value={value}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export const Select = forwardRef(ForwardSelect) as <T extends string>(
  props: SelectProps<T> & { ref?: React.Ref<HTMLSelectElement> },
) => JSX.Element
