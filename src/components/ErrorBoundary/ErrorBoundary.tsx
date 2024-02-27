import { useRouteError } from 'react-router-dom'

export function ErrorBoundary() {
  const error = useRouteError()

  // eslint-disable-next-line no-console
  console.log(error)

  return (
    <div className="flex h-dvh items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Oops!</h1>
        <p className="mt-4 text-lg">
          An error occured. Please try reloading the page.
        </p>
      </div>
    </div>
  )
}
