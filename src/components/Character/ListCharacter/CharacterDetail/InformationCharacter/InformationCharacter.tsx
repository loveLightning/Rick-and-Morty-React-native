import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'
import { IRouteCharacter } from '../../../character.type'

export const InformationCharacter: React.FC<{ route: IRouteCharacter }> = ({ route }) => {
  return (
    <InformationWrapper>
      <TextInformation>Informations</TextInformation>
      <InformationLine>
        <WrapperInfo>
          <InfoText>Gender</InfoText>
          <InfoDesc>{route.params.character.gender}</InfoDesc>
          <InfoText>Origin</InfoText>
          <InfoDesc>{route.params.character.origin}</InfoDesc>
          <InfoText>Type</InfoText>
          <InfoDesc>{route.params.character.type.length ? route.params.character.type : <Text>Unknown</Text>}</InfoDesc>
          <InfoText>Location</InfoText>
          <InfoDescLast>{route.params.character.namePlanet}</InfoDescLast>
        </WrapperInfo>
      </InformationLine>
      <WrapperEpisodes>
        <TextEpisodes>Episodes</TextEpisodes>
      </WrapperEpisodes>
    </InformationWrapper>
  )
}

const InformationWrapper = styled.View`
  border-bottom-width: 1px;
  border-color: rgba(0, 0, 0, 0.2);
`

const TextInformation = styled.Text`
  letter-spacing: 0.38px;
  color: #8E8E93;
  font-weight: 700;
  font-size: 20px;
  padding-left: 15px;
  margin-bottom: 10px;
`

export const InformationLine = styled.View`
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-bottom-width: 1px;
  border-top-color: rgba(0, 0, 0, 0.2);
  border-top-width: 1px;
`

const WrapperInfo = styled.View`
  padding-left: 15px;
`

const InfoText = styled.Text`
  color: #081F32;
  letter-spacing: -0.41px;
  font-weight: 900;
  font-size: 17px;
  padding-top: 10px;
`

const InfoDesc = styled.Text`
  padding-bottom: 10px;
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-bottom-width: 1px;
`

const InfoDescLast = styled(InfoDesc)`
  border-bottom-width: 0px;
`

const WrapperEpisodes = styled.View`

`

const TextEpisodes = styled(TextInformation)`
  margin-top: 30px;
`

