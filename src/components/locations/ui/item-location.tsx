import React, { memo } from 'react'
import styled from 'styled-components/native'

interface PropLocation {
  name: string
  type: string
}

const Container = styled.View`
  border-width: 1px;
  border-color: ${({ theme }) => theme.white[2]};
  border-radius: 8px;
  width: 100%;
  max-width: 165px;
  height: 80px;
`
const TextType = styled.Text`
  max-height: 30px;
  padding: 12px 12px 0 12px;
  font-family: ${({ theme }) => theme.roboto400};
  font-size: 11px;
  line-height: 13px;
  border-color: ${({ theme }) => theme.grey[4]};
`
const TextName = styled(TextType)`
  padding: 0 12px 0 12px;
  max-height: 50px;
  font-family: ${({ theme }) => theme.roboto900};
  font-size: 17px;
  line-height: 22px;
  color: ${({ theme }) => theme.green_dark};
`
// eslint-disable-next-line react/display-name
const ItemLocation = memo(({ name, type }: PropLocation) => {
  return (
    <Container>
      <TextType numberOfLines={1}>{type}</TextType>
      <TextName numberOfLines={2}>{name}</TextName>
    </Container>
  )
})

export { ItemLocation }
