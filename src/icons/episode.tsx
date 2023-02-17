import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { useTheme } from 'styled-components/native'

export const EpisodeIcon = ({ focused = false }) => {
  const { grey, extra_blue } = useTheme()

  return (
    <Svg width="28" height="28" fill="none">
      {!focused ? (
        <>
          <Path
            d="M23.33 8.17H4.67a2.33 2.33 0 0 0-2.34 2.33v12.83a2.33 2.33 0 0 0 2.34 2.34h18.66a2.33 2.33 0 0 0 2.34-2.34V10.5a2.33 2.33 0 0 0-2.34-2.33Z"
            stroke={grey[0]}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M19.83 2.33 14 8.17 8.17 2.33"
            stroke={grey[0]}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      ) : (
        <>
          <Path
            d="M23.33 8.17H4.67a2.33 2.33 0 0 0-2.34 2.33v12.83a2.33 2.33 0 0 0 2.34 2.34h18.66a2.33 2.33 0 0 0 2.34-2.34V10.5a2.33 2.33 0 0 0-2.34-2.33Z"
            fill={extra_blue}
          />
          <Path
            d="M19.83 2.33 14 8.17 8.17 2.33"
            stroke={extra_blue}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
    </Svg>
  )
}
