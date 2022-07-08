import { useQuery } from '@apollo/client'
import React, { useEffect } from 'react'
import { FlatList, View } from 'react-native'
import styled from 'styled-components/native'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { GET_ALL_EPISODES } from '../../query/episodes'
import { stateEpisodes } from '../../store/dataEpisodes/dataEpisodes'
import { ListEpisode } from './ListEpisode/ListEpisode'

export const Episode: React.FC = () => {
  const { data, loading, error } = useQuery(GET_ALL_EPISODES)
  const dispath = useAppDispatch()

  useEffect(() => {
    if (!loading) {
      dispath(stateEpisodes(data.episodes.results))
    }
  }, [data])
  const dataEpisodes = useAppSelector((state) => state.dataEpisodes.dataEpisode)

  if (loading) {
    return <View>
      <Loader size="large" color="#00ff00" />
    </View>
  }

  return (
    <Wrapper>
      <FlatList
        numColumns={2}
        contentContainerStyle={{ width: '100%' }}
        keyExtractor={item => item.id.toString()}
        data={dataEpisodes}
        renderItem={({ item }) => (
          <ListEpisode item={item} />
        )}
      />
    </Wrapper>
  )
}

const Wrapper = styled.View`
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 20px 0px 20px 15px;
`

const Loader = styled.ActivityIndicator`
    width: 100%;
    height: 100%;
`
