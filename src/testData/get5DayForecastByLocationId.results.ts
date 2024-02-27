import type { Get5DayForecastByLocationIdResponse } from '@/types/get5DaysForecastByLocationId.types'

/* eslint-disable sort-keys-plus/sort-keys */
export const get5DayForecastByLocationIdResults: Get5DayForecastByLocationIdResponse =
  {
    Headline: {
      EffectiveDate: '2024-02-29T07:00:00+00:00',
      EffectiveEpochDate: 1709190000,
      Severity: 3,
      Text: 'Expect showers Thursday',
      Category: 'rain',
      EndDate: '2024-02-29T19:00:00+00:00',
      EndEpochDate: 1709233200,
      MobileLink:
        'http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?unit=c&lang=en-us',
      Link: 'http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?unit=c&lang=en-us',
    },
    DailyForecasts: [
      {
        Date: '2024-02-27T07:00:00+00:00',
        EpochDate: 1709017200,
        Temperature: {
          Minimum: {
            Value: 3.3,
            Unit: 'C',
            UnitType: 17,
          },
          Maximum: {
            Value: 8.3,
            Unit: 'C',
            UnitType: 17,
          },
        },
        Day: {
          Icon: 6,
          IconPhrase: 'Mostly cloudy',
          HasPrecipitation: false,
        },
        Night: {
          Icon: 38,
          IconPhrase: 'Mostly cloudy',
          HasPrecipitation: false,
        },
        Sources: ['AccuWeather'],
        MobileLink:
          'http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=1&unit=c&lang=en-us',
        Link: 'http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=1&unit=c&lang=en-us',
      },
      {
        Date: '2024-02-28T07:00:00+00:00',
        EpochDate: 1709103600,
        Temperature: {
          Minimum: {
            Value: 9.2,
            Unit: 'C',
            UnitType: 17,
          },
          Maximum: {
            Value: 10.6,
            Unit: 'C',
            UnitType: 17,
          },
        },
        Day: {
          Icon: 7,
          IconPhrase: 'Cloudy',
          HasPrecipitation: false,
        },
        Night: {
          Icon: 18,
          IconPhrase: 'Rain',
          HasPrecipitation: true,
          PrecipitationType: 'Rain',
          PrecipitationIntensity: 'Light',
        },
        Sources: ['AccuWeather'],
        MobileLink:
          'http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=2&unit=c&lang=en-us',
        Link: 'http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=2&unit=c&lang=en-us',
      },
      {
        Date: '2024-02-29T07:00:00+00:00',
        EpochDate: 1709190000,
        Temperature: {
          Minimum: {
            Value: 3.8,
            Unit: 'C',
            UnitType: 17,
          },
          Maximum: {
            Value: 10.7,
            Unit: 'C',
            UnitType: 17,
          },
        },
        Day: {
          Icon: 12,
          IconPhrase: 'Showers',
          HasPrecipitation: true,
          PrecipitationType: 'Rain',
          PrecipitationIntensity: 'Moderate',
        },
        Night: {
          Icon: 39,
          IconPhrase: 'Partly cloudy w/ showers',
          HasPrecipitation: true,
          PrecipitationType: 'Rain',
          PrecipitationIntensity: 'Light',
        },
        Sources: ['AccuWeather'],
        MobileLink:
          'http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=3&unit=c&lang=en-us',
        Link: 'http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=3&unit=c&lang=en-us',
      },
      {
        Date: '2024-03-01T07:00:00+00:00',
        EpochDate: 1709276400,
        Temperature: {
          Minimum: {
            Value: 2.5,
            Unit: 'C',
            UnitType: 17,
          },
          Maximum: {
            Value: 8.1,
            Unit: 'C',
            UnitType: 17,
          },
        },
        Day: {
          Icon: 18,
          IconPhrase: 'Rain',
          HasPrecipitation: true,
          PrecipitationType: 'Rain',
          PrecipitationIntensity: 'Moderate',
        },
        Night: {
          Icon: 35,
          IconPhrase: 'Partly cloudy',
          HasPrecipitation: true,
          PrecipitationType: 'Rain',
          PrecipitationIntensity: 'Moderate',
        },
        Sources: ['AccuWeather'],
        MobileLink:
          'http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=4&unit=c&lang=en-us',
        Link: 'http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=4&unit=c&lang=en-us',
      },
      {
        Date: '2024-03-02T07:00:00+00:00',
        EpochDate: 1709362800,
        Temperature: {
          Minimum: {
            Value: 3.2,
            Unit: 'C',
            UnitType: 17,
          },
          Maximum: {
            Value: 9,
            Unit: 'C',
            UnitType: 17,
          },
        },
        Day: {
          Icon: 12,
          IconPhrase: 'Showers',
          HasPrecipitation: true,
          PrecipitationType: 'Rain',
          PrecipitationIntensity: 'Light',
        },
        Night: {
          Icon: 36,
          IconPhrase: 'Intermittent clouds',
          HasPrecipitation: false,
        },
        Sources: ['AccuWeather'],
        MobileLink:
          'http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=5&unit=c&lang=en-us',
        Link: 'http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=5&unit=c&lang=en-us',
      },
    ],
  }
