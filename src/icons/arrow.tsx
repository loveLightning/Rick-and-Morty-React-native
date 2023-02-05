import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
import { useTheme } from 'styled-components/native'

export const ArrowIcon = (props: SvgProps) => {
  const { grey } = useTheme()

  return (
    <Svg
      width={6}
      height={8}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M5.936 4.115 1.199 7.641l-.342-.42 2.618-3.106L.857.58 1.2.297l4.737 3.818Z"
        fill={grey[2]}
      />
    </Svg>
  )
}
