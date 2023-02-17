import React, { useState } from 'react'
import {
  ActivityIndicator,
  FlatList,
  Platform,
  SafeAreaView,
  View,
} from 'react-native'
import { useTheme } from 'styled-components/native'

import { useFetchCharactersQuery } from 'src/apollo'
import { CharacterItem, ErrorMessage, Loader, NotFound } from 'src/components'
import { useCharacterFiltersContext } from 'src/context'

export const CharactersList: React.FC = () => {
  const { extra_blue, white } = useTheme()
  const [loadingMore, setLoadingMore] = useState(false)
  const { appliedFilters, clearFilters } = useCharacterFiltersContext()
  const {
    data: characters,
    loading,
    error,
    fetchMore,
  } = useFetchCharactersQuery({
    variables: appliedFilters,
  })

  const nextPage = characters?.characters.info.next
  const charactersResult = characters?.characters.results

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
    clearFilters()
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
      {charactersResult?.length ? (
        <FlatList
          numColumns={2}
          contentContainerStyle={{
            backgroundColor: white[0],
            justifyContent: 'space-between',
            paddingTop: 20,
            paddingBottom: 50,
          }}
          keyExtractor={(item) => item.id.toString()}
          data={charactersResult}
          renderItem={({ item }) => (
            <CharacterItem
              id={item.id}
              name={item.name}
              image={item.image}
              status={item.status}
            />
          )}
          onEndReached={nextPage ? getByScrollCharacters : null}
          onEndReachedThreshold={Platform.OS == 'ios' ? 0.1 : 0.2}
          ListFooterComponent={renderFooter}
          refreshing={loading}
          onRefresh={refetchData}
        />
      ) : (
        <NotFound>Characters not found</NotFound>
      )}
    </SafeAreaView>
  )
}
