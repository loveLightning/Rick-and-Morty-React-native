import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
import { useTheme } from 'styled-components/native'

export const RadioButtonInActiveIcon = (props: SvgProps) => {
  const { grey, white } = useTheme()

  return (
    <Svg
      width={28}
      height={30}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M24.25 15c0 5.66-4.59 10.25-10.25 10.25S3.75 20.66 3.75 15 8.34 4.75 14 4.75 24.25 9.34 24.25 15Z"
        fill={white}
        stroke={grey[6]}
      />
    </Svg>
  )
}

export const RadioButtonActiveIcon = (props: SvgProps) => {
  const { extra_blue } = useTheme()

  return (
    <Svg
      width={28}
      height={30}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 15c0 6.075 4.925 11 11 11s11-4.925 11-11S20.075 4 14 4 3 8.925 3 15Zm-1 0C2 8.373 7.373 3 14 3s12 5.373 12 12-5.373 12-12 12S2 21.627 2 15Z"
        fill={extra_blue}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 22a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z"
        fill={extra_blue}
      />
    </Svg>
  )
}
