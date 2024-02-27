import { useForm } from 'react-hook-form'
import { generatePath, useNavigate, useParams } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import { twMerge } from 'tailwind-merge'

import { GLOBAL_ROUTE_PATHS } from '@/router/Router.constants'

import type { SearchSchema } from './Search.schema'
import { searchSchema } from './Search.schema'

export function Search() {
  const navigate = useNavigate()
  const { city = '' } = useParams<{ city: string }>()
  const formMethods = useForm<SearchSchema>({
    resolver: zodResolver(searchSchema),
    values: { city },
  })
  const { formState, register } = formMethods
  const { errors } = formState

  const handleSubmit = formMethods.handleSubmit(data => {
    navigate(
      generatePath(GLOBAL_ROUTE_PATHS.citiesSearchResults, { city: data.city }),
    )
  })

  return (
    <form
      aria-label="form"
      className="flex justify-center border-b py-4"
      noValidate
      onSubmit={handleSubmit}
    >
      <div className="w-full max-w-md">
        <input
          className={twMerge(
            'h-10 w-full rounded-lg',
            errors.city && 'border-red-500',
          )}
          placeholder="Search for a city..."
          type="text"
          {...register('city')}
        />

        {errors.city && (
          <p className="mt-1 text-sm text-red-500">{errors.city.message}</p>
        )}
      </div>

      <button
        className="ml-2 h-10 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
        type="submit"
      >
        Search
      </button>
    </form>
  )
}
