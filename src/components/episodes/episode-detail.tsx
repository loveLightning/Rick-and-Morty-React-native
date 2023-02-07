import React from 'react'
import { FlatList, View } from 'react-native'
import styled from 'styled-components/native'

import { CharacterItem, DescriptionDetail } from 'src/components'
import { EpisodeTypesWithCharacters } from 'src/types'

interface Props {
  episodeDetail: EpisodeTypesWithCharacters
}

export const EpisodeDetail = ({ episodeDetail }: Props) => {
  return (
    <View style={{ marginBottom: 400 }}>
      <ContainerHeaderImage>
        <DescriptionDetail
          marginTop={20}
          status={episodeDetail?.episode}
          name={episodeDetail?.name}
          species={episodeDetail?.air_date}
        />
      </ContainerHeaderImage>

      <Subtitle>Residents</Subtitle>

      <FlatList
        data={episodeDetail?.characters}
        numColumns={2}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <ContainerEpisode>
            <CharacterItem
              key={item.id}
              name={item.name}
              image={item.image}
              status={item.status}
              id={item.id}
            />
          </ContainerEpisode>
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
  background: rgba(118, 118, 128, 0.12);
`
const ContainerEpisode = styled.View`
  flex: 1;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 15px;
`
