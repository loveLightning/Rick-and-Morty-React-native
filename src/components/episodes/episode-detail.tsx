import React from 'react'
import { FlatList, View } from 'react-native'
import styled from 'styled-components/native'

import { CharacterItem, DescriptionDetail } from 'src/components'
import { EpisodeTypesWithCharacters } from 'src/types'

interface Props {
  episodeDetail: EpisodeTypesWithCharacters
}

export const EpisodeDetail = ({ episodeDetail }: Props) => {
  const renderHeader = () => {
    return <Subtitle>Characters</Subtitle>
  }

  return (
    <View>
      <ContainerHeaderImage>
        <DescriptionDetail
          status={episodeDetail?.episode}
          name={episodeDetail?.name}
          species={episodeDetail?.air_date}
        />
      </ContainerHeaderImage>

      <FlatList
        ListHeaderComponent={renderHeader()}
        contentContainerStyle={{
          backgroundColor: 'white',
          justifyContent: 'space-between',
          paddingBottom: 250,
        }}
        data={episodeDetail?.characters}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CharacterItem
            key={item.id}
            name={item.name}
            image={item.image}
            status={item.status}
            id={item.id}
          />
        )}
      />
    </View>
  )
}

const Subtitle = styled.Text`
  padding: 20px 0 9.5px 16px;
  text-align: left;
  font-size: 20px;
  line-height: 25px;
  color: ${({ theme }) => theme.grey[5]};
`

const ContainerHeaderImage = styled.View`
  background: ${({ theme }) => theme.grey[3]};
`
