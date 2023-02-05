import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

import { CharacterTypes } from 'src/types'

import { InfoDesc, InformationLine, InfoText, Title } from '../styled'

interface Props {
  characterDetail: CharacterTypes
}

export const InformationCharacter = ({ characterDetail }: Props) => {
  return (
    <InformationWrapper>
      <Title>Informations</Title>
      <InformationLine>
        <WrapperInfo>
          <WrapLine>
            <InfoText>Gender</InfoText>
            <InfoDesc>{characterDetail.gender}</InfoDesc>
          </WrapLine>

          <WrapLine>
            <InfoText>Origin</InfoText>
            <InfoDesc>{characterDetail.origin?.name}</InfoDesc>
          </WrapLine>

          <WrapLine>
            <InfoText>Type</InfoText>
            <InfoDesc>
              {characterDetail.type ? (
                characterDetail.type
              ) : (
                <Text>Unknown</Text>
              )}
            </InfoDesc>
          </WrapLine>

          <InfoText>Location</InfoText>
          <InfoDesc>{characterDetail.location?.name}</InfoDesc>
        </WrapperInfo>
      </InformationLine>
    </InformationWrapper>
  )
}

const InformationWrapper = styled.View``

const WrapperInfo = styled.View`
  padding-left: 15px;
`

const WrapLine = styled.View`
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-bottom-width: 1px;
`
