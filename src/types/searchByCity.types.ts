export interface Region {
  EnglishName: string
  ID: string
  LocalizedName: string
}

export interface Country {
  EnglishName: string
  ID: string
  LocalizedName: string
}

export interface AdministrativeArea {
  CountryID: string
  EnglishName: string
  EnglishType: string
  ID: string
  Level: number
  LocalizedName: string
  LocalizedType: string
}

export interface TimeZone {
  Code: string
  GmtOffset: number
  IsDaylightSaving: boolean
  Name: string
  NextOffsetChange: string | null
}

export interface GeoPosition {
  Elevation: Elevation
  Latitude: number
  Longitude: number
}

export interface Elevation {
  Imperial: Imperial
  Metric: Metric
}

export interface Metric {
  Unit: string
  UnitType: number
  Value: number
}

export interface Imperial {
  Unit: string
  UnitType: number
  Value: number
}

export interface SupplementalAdminArea {
  EnglishName: string
  Level: number
  LocalizedName: string
}

export interface SearchByCityResponse {
  AdministrativeArea: AdministrativeArea
  Country: Country
  DataSets: string[]
  EnglishName: string
  GeoPosition: GeoPosition
  IsAlias: boolean
  Key: string
  LocalizedName: string
  PrimaryPostalCode: string
  Rank: number
  Region: Region
  SupplementalAdminAreas: SupplementalAdminArea[]
  TimeZone: TimeZone
  Type: string
  Version: number
}
