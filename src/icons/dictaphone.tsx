import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
import { useTheme } from 'styled-components/native'

export const DisctaphoneIcon = (props: SvgProps) => {
  const { grey } = useTheme()

  return (
    <Svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 1.364c1.657 0 3 1.22 3 2.727v6.364c0 1.506-1.343 2.727-3 2.727s-3-1.221-3-2.727V4.09c0-1.506 1.343-2.727 3-2.727Zm5.25 5.909c-.414 0-.75.305-.75.682v2.5c0 2.259-2.015 4.09-4.5 4.09s-4.5-1.831-4.5-4.09v-2.5c0-.377-.336-.682-.75-.682S4 7.578 4 7.955v2.5c.001 2.747 2.251 5.065 5.25 5.409v1.409h-2c-.414 0-.75.305-.75.682 0 .376.336.681.75.681h5.5c.414 0 .75-.305.75-.681 0-.377-.336-.682-.75-.682h-2v-1.41c2.999-.343 5.248-2.66 5.25-5.408v-2.5c0-.377-.336-.682-.75-.682Z"
        fill={grey[6]}
      />
    </Svg>
  )
}
