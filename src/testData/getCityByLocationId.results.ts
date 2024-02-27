import type { SearchByCityResponse } from '@/types/searchByCity.types'

/* eslint-disable sort-keys-plus/sort-keys */
export const getCityByLocationIdResults: SearchByCityResponse = {
  Version: 1,
  Key: '328328',
  Type: 'City',
  Rank: 10,
  LocalizedName: 'London',
  EnglishName: 'London',
  PrimaryPostalCode: 'EC4A 2',
  Region: {
    ID: 'EUR',
    LocalizedName: 'Europe',
    EnglishName: 'Europe',
  },
  Country: {
    ID: 'GB',
    LocalizedName: 'United Kingdom',
    EnglishName: 'United Kingdom',
  },
  AdministrativeArea: {
    ID: 'LND',
    LocalizedName: 'London',
    EnglishName: 'London',
    Level: 1,
    LocalizedType: 'London Borough',
    EnglishType: 'London Borough',
    CountryID: 'GB',
  },
  TimeZone: {
    Code: 'GMT',
    Name: 'Europe/London',
    GmtOffset: 0,
    IsDaylightSaving: false,
    NextOffsetChange: '2024-03-31T01:00:00Z',
  },
  GeoPosition: {
    Latitude: 51.514,
    Longitude: -0.107,
    Elevation: {
      Metric: {
        Value: 18,
        Unit: 'm',
        UnitType: 5,
      },
      Imperial: {
        Value: 59,
        Unit: 'ft',
        UnitType: 0,
      },
    },
  },
  IsAlias: false,
  SupplementalAdminAreas: [
    {
      Level: 0,
      LocalizedName: 'England',
      EnglishName: 'England',
    },
    {
      Level: 3,
      LocalizedName: 'Castle Baynard',
      EnglishName: 'Castle Baynard',
    },
  ],
  DataSets: [
    'AirQualityCurrentConditions',
    'AirQualityForecasts',
    'Alerts',
    'DailyPollenForecast',
    'ForecastConfidence',
    'FutureRadar',
    'MinuteCast',
    'Radar',
    'TidalForecast',
  ],
}
