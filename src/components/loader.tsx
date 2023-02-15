import React from 'react'
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native'
import styled from 'styled-components/native'
import { useTheme } from 'styled-components/native'

export const Loader = ({
  size = 'large',
  color,
  ...props
}: ActivityIndicatorProps) => {
  const { blue } = useTheme()

  return (
    <Wrapper>
      <ActivityIndicator size={size} color={color ?? blue} {...props} />
    </Wrapper>
  )
}

const Wrapper = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`
