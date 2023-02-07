import React from 'react'
import styled from 'styled-components/native'

interface Props {
  navigateScreen: () => void
}

export const ApplyBtn = ({ navigateScreen }: Props) => {
  return (
    <Wrapper onPress={navigateScreen}>
      <Title>APPLY</Title>
    </Wrapper>
  )
}

const Wrapper = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.extra_blue};
  border-radius: 14px;
  padding: 5px 12px;
`

const Title = styled.Text`
  font-family: ${({ theme }) => theme.roboto900};
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.08px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.white[0]};
`
