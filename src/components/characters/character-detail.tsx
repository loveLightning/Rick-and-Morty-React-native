import React from 'react'
import { FlatList, Image, SafeAreaView } from 'react-native'
import styled from 'styled-components/native'

import { EpisodeItem, Separator } from 'src/components'
import { CharacterTypes } from 'src/types'

import { Title } from './styled'
import { InformationCharacter } from './ui'

interface Props {
  characterDetail: CharacterTypes
}

export const CharacterDetail = ({ characterDetail }: Props) => {
  const renderHeader = () => {
    return (
      <>
        <WrapperImages>
          <ImageBackground
            source={require('assets/images/background-character.png')}
          />

          <WrapImageCharacter>
            <ImageCharacter source={{ uri: characterDetail.image }} />
          </WrapImageCharacter>

          <BackgroundGrey>
            <WrapTexts>
              <StatusText>{characterDetail.status}</StatusText>
              <NameText>{characterDetail.name}</NameText>
              <GenderText>{characterDetail.species}</GenderText>
            </WrapTexts>
          </BackgroundGrey>
        </WrapperImages>

        <InformationCharacter characterDetail={characterDetail} />

        <Title>Episodes</Title>
        <Separator />
      </>
    )
  }

  return (
    <SafeAreaView>
      <Wrapper>
        <FlatList
          contentContainerStyle={{ paddingBottom: 30 }}
          data={characterDetail.episode}
          ListHeaderComponent={renderHeader()}
          ListFooterComponent={() => <Separator />}
          renderItem={({ item, index }) => (
            <EpisodeItem
              id={item.id}
              episode={item.episode}
              name={item.name}
              air_date={item.air_date}
              isLast={characterDetail.episode.length - 1 !== index}
            />
          )}
          keyExtractor={(item) => item.id?.toString()}
        />
      </Wrapper>
    </SafeAreaView>
  )
}

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.white[0]};
  width: 100%;
  height: 100%;
`

const WrapperImages = styled.View`
  position: relative;
  width: 100%;
`

const ImageBackground = styled(Image)`
  width: 100%;
`

const WrapImageCharacter = styled.View`
  position: absolute;
  flex-direction: row;
  justify-content: center;
  top: 20px;
  left: 0;
  right: 0;
  z-index: 1;
`

const ImageCharacter = styled(Image)`
  width: 130px;
  height: 130px;
  border-radius: 65px;
  border-width: 4px;
  border-color: ${({ theme }) => theme.grey[3]};
`

const BackgroundGrey = styled.View`
  background-color: ${({ theme }) => theme.grey[3]};
  width: 100%;
  height: 170px;
`

const WrapTexts = styled.View`
  margin-top: 80px;
  flex-direction: column;
  align-items: center;
`

const StatusText = styled.Text`
  font-size: 11px;
  line-height: 13px;
  letter-spacing: 0.07px;
  font-family: ${({ theme }) => theme.roboto400};
  color: ${({ theme }) => theme.grey[4]};
`

const NameText = styled.Text`
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 0.337647px;
  color: ${({ theme }) => theme.light_black};
  font-family: ${({ theme }) => theme.roboto700};
`

const GenderText = styled.Text`
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.08px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.roboto900};
  color: ${({ theme }) => theme.grey[4]};
`
