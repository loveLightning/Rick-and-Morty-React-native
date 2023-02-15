import React, { useState } from 'react'
import {
  ActivityIndicator,
  FlatList,
  Platform,
  SafeAreaView,
  View,
} from 'react-native'
import { useTheme } from 'styled-components/native'
import styled from 'styled-components/native'

import { useFetchLocationsQuery } from 'src/apollo'
import { ErrorMessage, Loader, NotFound } from 'src/components'
import { useFiltersContext } from 'src/context'
import { Screens, useNavigation } from 'src/navigation'
import { FilterTypes } from 'src/types'

import { ItemLocation } from './ui'

export const LocationsList: React.FC = () => {
  const { extra_blue, white } = useTheme()
  const [loadingMore, setLoadingMore] = useState(false)
  const { push } = useNavigation()

  const { appliedFilters, clearFilters } = useFiltersContext()

  const {
    data: locations,
    loading,
    error,
    fetchMore,
  } = useFetchLocationsQuery({
    variables: appliedFilters[FilterTypes.location],
  })
  const nextPage = locations?.locations.info.next
  const locationsResult = locations?.locations

  const getByScrollCharacters = async () => {
    setLoadingMore(true)

    try {
      await fetchMore({
        variables: {
          page: nextPage,
        },
      })
    } catch {
    } finally {
      setLoadingMore(false)
    }
  }

  const refetchData = () => {
    clearFilters(FilterTypes.location)
  }

  const openScreen = (id: string) => {
    push(Screens.LocationDetail, {
      id,
    })
  }

  const renderFooter = () => {
    return loadingMore ? (
      <ActivityIndicator size="large" color={extra_blue} />
    ) : null
  }

  if (loading) {
    return (
      <View>
        <Loader size="large" color={extra_blue} />
      </View>
    )
  }

  if (error) {
    return <ErrorMessage>Error</ErrorMessage>
  }

  return (
    <SafeAreaView style={{ backgroundColor: white[0], flex: 1 }}>
      {locationsResult?.results.length ? (
        <FlatList
          numColumns={2}
          contentContainerStyle={{
            backgroundColor: white[0],
            justifyContent: 'space-between',
            paddingTop: 20,
            paddingBottom: 50,
          }}
          keyExtractor={(item) => item.id.toString()}
          data={locationsResult?.results}
          renderItem={({ item }) => (
            <ContainerLocations>
              <ItemLocation
                name={item.name}
                type={item.type}
                onPress={() => openScreen(item.id)}
              />
            </ContainerLocations>
          )}
          onEndReached={nextPage ? getByScrollCharacters : null}
          onEndReachedThreshold={Platform.OS == 'ios' ? 0.1 : 0.2}
          ListFooterComponent={renderFooter}
          refreshing={loading}
          onRefresh={refetchData}
        />
      ) : (
        <NotFound>Locations not found</NotFound>
      )}
    </SafeAreaView>
  )
}

const ContainerLocations = styled.View`
  flex: 1;
  flex-direction: row;
  margin: 15px;
`
