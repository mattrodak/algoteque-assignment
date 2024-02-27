export type PageHeaderProps = {
  title: string
  children?: React.ReactNode
}

export function PageHeader({ children, title }: PageHeaderProps) {
  return (
    <header className="py-6 md:flex md:items-center md:justify-between">
      <h1 className="mb-2 md:mb-0">{title}</h1>

      {children}
    </header>
  )
}
