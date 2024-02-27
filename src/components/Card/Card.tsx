import { twMerge } from 'tailwind-merge'

export type CardProps = {
  children?: React.ReactNode
  className?: string
  errorMessage?: string
  isError?: boolean
}

export function Card({
  children,
  className,
  errorMessage,
  isError: hasError,
}: CardProps) {
  return (
    <div
      className={twMerge(
        'rounded-lg border border-gray-200 bg-white px-4 py-6 shadow-lg md:px-6',
        className,
      )}
    >
      {hasError && errorMessage ? (
        <div
          className="rounded-lg bg-red-50 p-4 text-sm text-red-800"
          role="alert"
        >
          {errorMessage}
        </div>
      ) : (
        children
      )}
    </div>
  )
}
