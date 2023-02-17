import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { useTheme } from 'styled-components/native'

export const LocationIcon = ({ focused = false }) => {
  const { extra_blue, grey } = useTheme()

  return (
    <Svg width="28" height="28" fill="none">
      {!focused ? (
        <>
          <Path
            d="M21.7 15.82c3.07 2.46 4.77 4.63 4.18 5.65-.93 1.6-7.22-.29-14.06-4.23C4.98 13.3.19 8.8 1.12 7.2c.58-1 3.25-.64 6.85.73"
            stroke={grey[0]}
            strokeWidth="2"
            strokeMiterlimit="10"
          />

          <Path
            d="M13.5 22.67A8.33 8.33 0 1 0 13.5 6a8.33 8.33 0 0 0 0 16.67Z"
            stroke={grey[0]}
            strokeWidth="2"
            strokeMiterlimit="10"
          />
        </>
      ) : (
        <>
          <Path
            d="m19.5 14.5 2.2 1.32c3.07 2.46 4.77 4.63 4.18 5.65-.93 1.6-7.22-.29-14.06-4.23C4.98 13.3.19 8.8 1.12 7.2c.58-1 3.25-.64 6.85.73C8.81 8.3 10.6 9.1 11 9.5"
            stroke={extra_blue}
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 21.35c.61-.4 1.17-.86 1.65-1.4a53.1 53.1 0 0 1-7.33-3.55 53.04 53.04 0 0 1-6.77-4.57c-.21.67-.34 1.4-.38 2.13a52.1 52.1 0 0 0 6.15 4.1A51.98 51.98 0 0 0 18 21.36Zm-2.55 1.09a57.55 57.55 0 0 1-9.94-5.72 8.34 8.34 0 0 0 9.94 5.72Zm-2.13-7.77a49.89 49.89 0 0 0 7.53 3.6A8.33 8.33 0 0 0 6.42 9.95c1.79 1.5 4.17 3.15 6.9 4.72Z"
            fill={extra_blue}
          />
        </>
      )}
    </Svg>
  )
}
