import React from 'react'
import styled from 'styled-components/native'

interface Props {
  children: React.ReactNode
}

export const NotFound = ({ children }: Props) => {
  return (
    <Container>
      <NotFoundText>{children}</NotFoundText>
    </Container>
  )
}

const Container = styled.View`
  padding: 16px;
`

const NotFoundText = styled.Text`
  font-family: ${({ theme }) => theme.roboto400};
  font-size: 14px;
  text-align: center;
`
