import React from 'react'
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native'
import { useTheme } from 'styled-components/native'

export const Loader = ({
  size = 'large',
  color,
  ...props
}: ActivityIndicatorProps) => {
  const { blue } = useTheme()

  return <ActivityIndicator size={size} color={color ?? blue} {...props} />
}
