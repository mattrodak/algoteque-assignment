export type UnitDescription = {
  Unit: string
  UnitType: number
  Value: number
  Phrase?: string
}

export interface ApparentTemperature {
  Imperial: UnitDescription
  Metric: UnitDescription
}

export interface Ceiling {
  Imperial: UnitDescription
  Metric: UnitDescription
}

export interface DewPoint {
  Imperial: UnitDescription
  Metric: UnitDescription
}

export interface Past24HourTemperatureDeparture {
  Imperial: UnitDescription
  Metric: UnitDescription
}

export interface Precip1hr {
  Imperial: UnitDescription
  Metric: UnitDescription
}

export interface Past3Hours {
  Imperial: UnitDescription
  Metric: UnitDescription
}

export interface Past6Hours {
  Imperial: UnitDescription
  Metric: UnitDescription
}

export interface Past9Hours {
  Imperial: UnitDescription
  Metric: UnitDescription
}

export interface Past12Hours {
  Imperial: UnitDescription
  Metric: UnitDescription
}

export interface Past18Hours {
  Imperial: UnitDescription
  Metric: UnitDescription
}

export interface Past24Hours {
  Imperial: UnitDescription
  Metric: UnitDescription
}

export interface Precipitation {
  Imperial: UnitDescription
  Metric: UnitDescription
}

export interface PastHour {
  Imperial: UnitDescription
  Metric: UnitDescription
}

export interface PrecipitationSummary {
  Past3Hours: Past3Hours
  Past6Hours: Past6Hours
  Past9Hours: Past9Hours
  Past12Hours: Past12Hours
  Past18Hours: Past18Hours
  Past24Hours: Past24Hours
  PastHour: PastHour
  Precipitation: Precipitation
}

export interface Pressure {
  Imperial: UnitDescription
  Metric: UnitDescription
}

export interface PressureTendency {
  Code: string
  LocalizedText: string
}

export interface RealFeelTemperature {
  Imperial: UnitDescription
  Metric: UnitDescription
}

export interface RealFeelTemperatureShade {
  Imperial: UnitDescription
  Metric: UnitDescription
}

export interface Temperature {
  Imperial: UnitDescription
  Metric: UnitDescription
}

export type Maximum = {
  Imperial: UnitDescription
  Metric: UnitDescription
}

export type Minimum = {
  Imperial: UnitDescription
  Metric: UnitDescription
}

export interface Past6HourRange {
  Maximum: Maximum
  Minimum: Minimum
}

export interface Past12HourRange {
  Maximum: Maximum
  Minimum: Minimum
}

export interface Past24HourRange {
  Maximum: Maximum
  Minimum: Minimum
}

export interface TemperatureSummary {
  Past6HourRange: Past6HourRange
  Past12HourRange: Past12HourRange
  Past24HourRange: Past24HourRange
}

export interface Visibility {
  Imperial: UnitDescription
  Metric: UnitDescription
}

export interface WetBulbGlobeTemperature {
  Imperial: UnitDescription
  Metric: UnitDescription
}

export interface WetBulbTemperature {
  Imperial: UnitDescription
  Metric: UnitDescription
}

export interface Direction {
  Degrees: number
  English: string
  Localized: string
}

export interface Speed {
  Imperial: UnitDescription
  Metric: UnitDescription
}

export interface Wind {
  Direction: Direction
  Speed: Speed
}

export interface WindChillTemperature {
  Imperial: UnitDescription
  Metric: UnitDescription
}

export interface WindGust {
  Speed: Speed
}

export interface CurrentConditionsResponse {
  ApparentTemperature: ApparentTemperature
  Ceiling: Ceiling
  CloudCover: number
  DewPoint: DewPoint
  EpochTime: number
  HasPrecipitation: boolean
  IndoorRelativeHumidity: number
  IsDayTime: boolean
  Link: string
  LocalObservationDateTime: string
  MobileLink: string
  ObstructionsToVisibility: string
  Past24HourTemperatureDeparture: Past24HourTemperatureDeparture
  Precip1hr: Precip1hr
  PrecipitationSummary: PrecipitationSummary
  PrecipitationType: any
  Pressure: Pressure
  PressureTendency: PressureTendency
  RealFeelTemperature: RealFeelTemperature
  RealFeelTemperatureShade: RealFeelTemperatureShade
  RelativeHumidity: number
  Temperature: Temperature
  TemperatureSummary: TemperatureSummary
  UVIndex: number
  UVIndexText: string
  Visibility: Visibility
  WeatherIcon: number
  WeatherText: string
  WetBulbGlobeTemperature: WetBulbGlobeTemperature
  WetBulbTemperature: WetBulbTemperature
  Wind: Wind
  WindChillTemperature: WindChillTemperature
  WindGust: WindGust
}
