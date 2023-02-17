import React from 'react'
import { FlatList, Image, SafeAreaView, View } from 'react-native'
import styled, { useTheme } from 'styled-components/native'

import { EpisodeItem, Separator } from 'src/components'
import { CharacterTypes } from 'src/types'

import { Title } from './styled'
import { InformationCharacter } from './ui'

interface Props {
  characterDetail: CharacterTypes
}

export const CharacterDetail = ({ characterDetail }: Props) => {
  const { white } = useTheme()

  const renderHeader = () => {
    return (
      <>
        <Container>
          {characterDetail.image && (
            <>
              <BgImg
                source={require('assets/images/background-character.png')}
                resizeMode={'cover'}
              />
              <Img source={{ uri: characterDetail.image }} />
            </>
          )}
          <StatusText>{characterDetail.status}</StatusText>
          <NameText>{characterDetail.name}</NameText>
          <GenderText>{characterDetail.species}</GenderText>
        </Container>

        <InformationCharacter characterDetail={characterDetail} />

        <Title>Episodes</Title>
        <Separator />
      </>
    )
  }

  return (
    <SafeAreaView style={{ backgroundColor: white[0] }}>
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

const Container = styled(View)`
  background-color: ${({ theme }) => theme.grey[3]};
  justify-content: center;
  align-items: center;
  padding-top: 14px;
  padding-bottom: 20px;
`

const BgImg = styled(Image)`
  width: 100%;
  height: 84px;
  position: absolute;
  top: 0;
  left: 0;
`

const Img = styled(Image)`
  width: 130px;
  height: 130px;
  border-radius: 65px;
  border-width: 5px;
  border-color: ${({ theme }) => theme.grey[3]};
  margin-bottom: 20px;
`

const Wrapper = styled.View`
  width: 100%;
  height: 100%;
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
