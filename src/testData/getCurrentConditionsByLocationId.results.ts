import type { CurrentConditionsResponse } from '@/types/getCurrentConditionsByLocationId.types'

/* eslint-disable sort-keys-plus/sort-keys */
export const getCurrentConditionsByLocationIdResults: CurrentConditionsResponse[] =
  [
    {
      LocalObservationDateTime: '2024-02-27T08:46:00+00:00',
      EpochTime: 1709023560,
      WeatherText: 'Cloudy',
      WeatherIcon: 7,
      HasPrecipitation: false,
      PrecipitationType: null,
      IsDayTime: true,
      Temperature: {
        Metric: {
          Value: 4.9,
          Unit: 'C',
          UnitType: 17,
        },
        Imperial: {
          Value: 41,
          Unit: 'F',
          UnitType: 18,
        },
      },
      RealFeelTemperature: {
        Metric: {
          Value: 6.5,
          Unit: 'C',
          UnitType: 17,
          Phrase: 'Chilly',
        },
        Imperial: {
          Value: 44,
          Unit: 'F',
          UnitType: 18,
          Phrase: 'Chilly',
        },
      },
      RealFeelTemperatureShade: {
        Metric: {
          Value: 6.5,
          Unit: 'C',
          UnitType: 17,
          Phrase: 'Chilly',
        },
        Imperial: {
          Value: 44,
          Unit: 'F',
          UnitType: 18,
          Phrase: 'Chilly',
        },
      },
      RelativeHumidity: 82,
      IndoorRelativeHumidity: 30,
      DewPoint: {
        Metric: {
          Value: 2,
          Unit: 'C',
          UnitType: 17,
        },
        Imperial: {
          Value: 36,
          Unit: 'F',
          UnitType: 18,
        },
      },
      Wind: {
        Direction: {
          Degrees: 338,
          Localized: 'NNW',
          English: 'NNW',
        },
        Speed: {
          Metric: {
            Value: 3.9,
            Unit: 'km/h',
            UnitType: 7,
          },
          Imperial: {
            Value: 2.4,
            Unit: 'mi/h',
            UnitType: 9,
          },
        },
      },
      WindGust: {
        Speed: {
          Metric: {
            Value: 8.1,
            Unit: 'km/h',
            UnitType: 7,
          },
          Imperial: {
            Value: 5,
            Unit: 'mi/h',
            UnitType: 9,
          },
        },
      },
      UVIndex: 1,
      UVIndexText: 'Low',
      Visibility: {
        Metric: {
          Value: 24.1,
          Unit: 'km',
          UnitType: 6,
        },
        Imperial: {
          Value: 15,
          Unit: 'mi',
          UnitType: 2,
        },
      },
      ObstructionsToVisibility: '',
      CloudCover: 91,
      Ceiling: {
        Metric: {
          Value: 12192,
          Unit: 'm',
          UnitType: 5,
        },
        Imperial: {
          Value: 40000,
          Unit: 'ft',
          UnitType: 0,
        },
      },
      Pressure: {
        Metric: {
          Value: 1022,
          Unit: 'mb',
          UnitType: 14,
        },
        Imperial: {
          Value: 30.18,
          Unit: 'inHg',
          UnitType: 12,
        },
      },
      PressureTendency: {
        LocalizedText: 'Rising',
        Code: 'R',
      },
      Past24HourTemperatureDeparture: {
        Metric: {
          Value: -0.2,
          Unit: 'C',
          UnitType: 17,
        },
        Imperial: {
          Value: 0,
          Unit: 'F',
          UnitType: 18,
        },
      },
      ApparentTemperature: {
        Metric: {
          Value: 6.7,
          Unit: 'C',
          UnitType: 17,
        },
        Imperial: {
          Value: 44,
          Unit: 'F',
          UnitType: 18,
        },
      },
      WindChillTemperature: {
        Metric: {
          Value: 5,
          Unit: 'C',
          UnitType: 17,
        },
        Imperial: {
          Value: 41,
          Unit: 'F',
          UnitType: 18,
        },
      },
      WetBulbTemperature: {
        Metric: {
          Value: 3.7,
          Unit: 'C',
          UnitType: 17,
        },
        Imperial: {
          Value: 39,
          Unit: 'F',
          UnitType: 18,
        },
      },
      WetBulbGlobeTemperature: {
        Metric: {
          Value: 4.9,
          Unit: 'C',
          UnitType: 17,
        },
        Imperial: {
          Value: 41,
          Unit: 'F',
          UnitType: 18,
        },
      },
      Precip1hr: {
        Metric: {
          Value: 0,
          Unit: 'mm',
          UnitType: 3,
        },
        Imperial: {
          Value: 0,
          Unit: 'in',
          UnitType: 1,
        },
      },
      PrecipitationSummary: {
        Precipitation: {
          Metric: {
            Value: 0,
            Unit: 'mm',
            UnitType: 3,
          },
          Imperial: {
            Value: 0,
            Unit: 'in',
            UnitType: 1,
          },
        },
        PastHour: {
          Metric: {
            Value: 0,
            Unit: 'mm',
            UnitType: 3,
          },
          Imperial: {
            Value: 0,
            Unit: 'in',
            UnitType: 1,
          },
        },
        Past3Hours: {
          Metric: {
            Value: 0,
            Unit: 'mm',
            UnitType: 3,
          },
          Imperial: {
            Value: 0,
            Unit: 'in',
            UnitType: 1,
          },
        },
        Past6Hours: {
          Metric: {
            Value: 0,
            Unit: 'mm',
            UnitType: 3,
          },
          Imperial: {
            Value: 0,
            Unit: 'in',
            UnitType: 1,
          },
        },
        Past9Hours: {
          Metric: {
            Value: 0,
            Unit: 'mm',
            UnitType: 3,
          },
          Imperial: {
            Value: 0,
            Unit: 'in',
            UnitType: 1,
          },
        },
        Past12Hours: {
          Metric: {
            Value: 0,
            Unit: 'mm',
            UnitType: 3,
          },
          Imperial: {
            Value: 0,
            Unit: 'in',
            UnitType: 1,
          },
        },
        Past18Hours: {
          Metric: {
            Value: 0,
            Unit: 'mm',
            UnitType: 3,
          },
          Imperial: {
            Value: 0,
            Unit: 'in',
            UnitType: 1,
          },
        },
        Past24Hours: {
          Metric: {
            Value: 0,
            Unit: 'mm',
            UnitType: 3,
          },
          Imperial: {
            Value: 0,
            Unit: 'in',
            UnitType: 1,
          },
        },
      },
      TemperatureSummary: {
        Past6HourRange: {
          Minimum: {
            Metric: {
              Value: 1.5,
              Unit: 'C',
              UnitType: 17,
            },
            Imperial: {
              Value: 35,
              Unit: 'F',
              UnitType: 18,
            },
          },
          Maximum: {
            Metric: {
              Value: 5.4,
              Unit: 'C',
              UnitType: 17,
            },
            Imperial: {
              Value: 42,
              Unit: 'F',
              UnitType: 18,
            },
          },
        },
        Past12HourRange: {
          Minimum: {
            Metric: {
              Value: 1.5,
              Unit: 'C',
              UnitType: 17,
            },
            Imperial: {
              Value: 35,
              Unit: 'F',
              UnitType: 18,
            },
          },
          Maximum: {
            Metric: {
              Value: 5.6,
              Unit: 'C',
              UnitType: 17,
            },
            Imperial: {
              Value: 42,
              Unit: 'F',
              UnitType: 18,
            },
          },
        },
        Past24HourRange: {
          Minimum: {
            Metric: {
              Value: 1.5,
              Unit: 'C',
              UnitType: 17,
            },
            Imperial: {
              Value: 35,
              Unit: 'F',
              UnitType: 18,
            },
          },
          Maximum: {
            Metric: {
              Value: 8.3,
              Unit: 'C',
              UnitType: 17,
            },
            Imperial: {
              Value: 47,
              Unit: 'F',
              UnitType: 18,
            },
          },
        },
      },
      MobileLink:
        'http://www.accuweather.com/en/gb/london/ec4a-2/current-weather/328328?lang=en-us',
      Link: 'http://www.accuweather.com/en/gb/london/ec4a-2/current-weather/328328?lang=en-us',
    },
  ]
