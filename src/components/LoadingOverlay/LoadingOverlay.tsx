import { twMerge } from 'tailwind-merge'

import { LoadingIcon } from '../LoadingIcon/LoadingIcon'

export type LoadingOverlayProps = {
  isLoading: boolean
  children?: React.ReactNode
  className?: string
}

export function LoadingOverlay({
  children,
  className,
  isLoading,
}: LoadingOverlayProps) {
  return (
    <div className={twMerge('relative', className)}>
      {children}

      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-600/40">
          <LoadingIcon />
        </div>
      )}
    </div>
  )
}
