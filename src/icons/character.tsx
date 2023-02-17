import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { useTheme } from 'styled-components/native'

interface Props {
  focused: boolean
}

export const CharacterIcon = ({ focused = false }: Props) => {
  const { extra_blue, grey } = useTheme()

  return (
    <Svg width="28" height="28" fill="none">
      {!focused ? (
        <>
          <Path
            d="M10.92 14.97a2.22 2.22 0 1 0 0-4.45 2.22 2.22 0 0 0 0 4.45ZM17.59 14.97a2.22 2.22 0 1 0 0-4.45 2.22 2.22 0 0 0 0 4.45Z"
            fill={grey[0]}
          />
          <Path
            d="M14.1 4A9.06 9.06 0 0 0 5 13l.05 8c.25 1.7 1.7 3 3.49 3 1.18 0 2.09-.42 2.7-1.17a4.03 4.03 0 0 0 5.72-.02c.6.76 1.52 1.19 2.69 1.19a3.52 3.52 0 0 0 3.53-3.5V13c0-4.96-4.08-9-9.09-9Z"
            stroke={grey[0]}
            strokeWidth="2"
          />
        </>
      ) : (
        <>
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.1 4A9.06 9.06 0 0 0 5 13l.05 8c.25 1.7 1.7 3 3.49 3 1.18 0 2.09-.42 2.7-1.17a4.03 4.03 0 0 0 5.72-.02c.6.76 1.52 1.19 2.69 1.19a3.52 3.52 0 0 0 3.53-3.5V13c0-4.96-4.08-9-9.09-9Zm-3.18 10.97a2.22 2.22 0 1 0 0-4.45 2.22 2.22 0 0 0 0 4.45Zm8.9-2.23a2.22 2.22 0 1 1-4.45 0 2.22 2.22 0 0 1 4.44 0Z"
            fill={extra_blue}
          />
        </>
      )}
    </Svg>
  )
}
