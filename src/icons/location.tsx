import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

export const LocationIcon = (props: SvgProps) => {
  return (
    <Svg
      width={28}
      height={28}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M21.702 15.816c3.066 2.46 4.771 4.635 4.183 5.653-.93 1.607-7.228-.285-14.068-4.226S.187 8.804 1.115 7.198c.581-1.004 3.26-.642 6.856.734"
        stroke={props.color}
        strokeWidth={2}
        strokeMiterlimit={10}
      />
      <Path
        d="M13.5 22.666A8.333 8.333 0 1 0 13.5 6a8.333 8.333 0 0 0 0 16.666Z"
        stroke={props.color}
        strokeWidth={2}
        strokeMiterlimit={10}
      />
    </Svg>
  )
}
