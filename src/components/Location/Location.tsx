import React, { useEffect } from 'react'
import { FlatList, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useQuery } from '@apollo/client'
import styled from 'styled-components/native'

import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { GET_ALL_LOCATION } from '../../apollo/locations'
import { stateLocations } from '../../store/dataLocations/dataLocations'
import { ListLocation } from './ListLocation/ListLocation'

export const Location: React.FC = () => {
  const { data, loading } = useQuery(GET_ALL_LOCATION)
  const dispath = useAppDispatch()

  useEffect(() => {
    if (!loading) {
      dispath(stateLocations(data.locations.results))
    }
  }, [data])

  const dataLocations = useAppSelector((state) => state.dataLocations.dataLocal)

  if (loading) {
    return (
      <SafeAreaView>
        <Loader size="large" color="#00ff00" />
      </SafeAreaView>
    )
  }

  return (
    <Wrapper>
      <FlatList
        numColumns={2}
        contentContainerStyle={{ width: '100%' }}
        keyExtractor={(item) => item.id.toString()}
        data={dataLocations}
        renderItem={({ item }) => <ListLocation item={item} />}
      />
    </Wrapper>
  )
}

const Wrapper = styled.SafeAreaView`
  background-color: white;
  padding: 20px 15px 20px 15px;
  width: 100%;
  height: 100%;
`

const Loader = styled.ActivityIndicator`
  width: 100%;
  height: 100%;
`
