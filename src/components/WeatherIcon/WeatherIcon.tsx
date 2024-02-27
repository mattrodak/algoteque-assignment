export type WeatherIconProps = {
  description: string
  iconId: number
  className?: string
}

export function WeatherIcon({
  className,
  description,
  iconId,
}: WeatherIconProps) {
  return (
    <img
      alt={description}
      className={className}
      src={`https://developer.accuweather.com/sites/default/files/${iconId.toString().padStart(2, '0')}-s.png`}
    />
  )
}
