import React, { ReactElement } from 'react'
import styled from 'styled-components/native'

interface Props {
  status: string | undefined
  name: string | undefined
  species: string | undefined
  marginTop: number
}

export const DescriptionDetail = ({
  status,
  name,
  species,
  marginTop,
}: Props): ReactElement => {
  return (
    <DescriptionImage style={{ marginTop }}>
      <TextStatus>{status}</TextStatus>
      <TextName>{name}</TextName>
      <TextSpecies>{species}</TextSpecies>
    </DescriptionImage>
  )
}

const Title = styled.Text`
  max-width: 200px;
  font-size: 15px;
  font-family: ${({ theme }) => theme.roboto900};
  line-height: 20px;
  text-align: center;
  color: ${({ theme }) => theme.light_black};
`
const TextSpecies = styled(Title)`
  font-size: 13px;
  line-height: 18px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.grey[5]};
`
const TextName = styled.Text`
  max-width: 100%;
  font-family: ${({ theme }) => theme.roboto700};
  font-size: 28px;
  line-height: 34px;
  color: ${({ theme }) => theme.light_black};
`
const TextStatus = styled.Text`
  font-size: 11px;
  line-height: 13px;
  font-family: ${({ theme }) => theme.roboto400};
  color: ${({ theme }) => theme.grey[4]};
`
const DescriptionImage = styled.View`
  align-items: center;
  margin-bottom: 20px;
`
