import React from 'react'
import styled from 'styled-components/native'

interface Props {
  children: React.ReactNode
}

export const ErrorMessage = ({ children }: Props) => {
  return (
    <>
      <Wrapper>
        <ErrorText>{children}</ErrorText>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.View`
  flex-direction: row;
  padding: 16px;
`

const ErrorText = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.grey[0]};
`
