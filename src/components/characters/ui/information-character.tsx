import React from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'

import { ArrowIcon } from 'src/icons'
import { Screens, Stacks, useNavigation } from 'src/navigation'
import { CharacterTypes } from 'src/types'

import { InfoDesc, InformationLine, InfoText, Title } from '../styled'

interface Props {
  characterDetail: CharacterTypes
}

export const InformationCharacter = ({ characterDetail }: Props) => {
  const { push } = useNavigation()

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

          <ContainerLocation
            onPress={() =>
              push(Stacks.Locations, {
                screen: Screens.LocationDetail,
                params: {
                  id: characterDetail.location.id,
                  name: characterDetail.name,
                },
              })
            }>
            <View>
              <InfoText>Location</InfoText>
              <InfoDesc>{characterDetail.location?.name}</InfoDesc>
            </View>
            <ArrowIcon />
          </ContainerLocation>
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

const ContainerLocation = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 16px;
`
