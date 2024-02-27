export interface Get5DayForecastByLocationIdResponse {
  DailyForecasts: DailyForecast[]
  Headline: Headline
}

export interface Headline {
  Category: string
  EffectiveDate: string
  EffectiveEpochDate: number
  EndDate: string
  EndEpochDate: number
  Link: string
  MobileLink: string
  Severity: number
  Text: string
}

export interface DailyForecast {
  Date: string
  Day: Day
  EpochDate: number
  Link: string
  MobileLink: string
  Night: Night
  Sources: string[]
  Temperature: Temperature
}

export interface Temperature {
  Maximum: Maximum
  Minimum: Minimum
}

export interface Minimum {
  Unit: string
  UnitType: number
  Value: number
}

export interface Maximum {
  Unit: string
  UnitType: number
  Value: number
}

export interface Day {
  HasPrecipitation: boolean
  Icon: number
  IconPhrase: string
  PrecipitationIntensity?: string
  PrecipitationType?: string
}

export interface Night {
  HasPrecipitation: boolean
  Icon: number
  IconPhrase: string
  PrecipitationIntensity?: string
  PrecipitationType?: string
}
