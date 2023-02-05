import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

export const EpisodeIcon = (props: SvgProps) => {
  return (
    <Svg
      width={28}
      height={28}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M23.333 8.167H4.667A2.333 2.333 0 0 0 2.333 10.5v12.833a2.333 2.333 0 0 0 2.334 2.334h18.666a2.333 2.333 0 0 0 2.334-2.334V10.5a2.333 2.333 0 0 0-2.334-2.333Z"
        stroke={props.color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.833 2.333 14 8.167 8.167 2.333"
        stroke={props.color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
