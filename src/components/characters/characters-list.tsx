import React, { useState } from 'react'
import { FlatList, Platform, SafeAreaView, View } from 'react-native'
import { useQuery } from '@apollo/client'
import styled, { useTheme } from 'styled-components/native'

import { GET_ALL_CHARACTERS } from 'src/apollo'
import { CharacterItem, ErrorMessage } from 'src/components'
import { useFilteresCharacters } from 'src/context'
import { CharactersQueryType } from 'src/types'

export const CharactersList: React.FC = () => {
  const { extra_blue } = useTheme()
  const [loadingMore, setLoadingMore] = useState(false)
  const { filtersValues } = useFilteresCharacters()

  const newRequestVariables = {
    page: 1,
    filter: {
      name: filtersValues.name,
      status: filtersValues.status,
      species: filtersValues.species,
      gender: filtersValues.gender,
    },
  }

  const {
    data: characters,
    loading,
    error,
    fetchMore,
    refetch,
  } = useQuery<CharactersQueryType>(GET_ALL_CHARACTERS, {
    variables: newRequestVariables,
  })

  const nextPage = characters?.characters.info.next
  const charactersResult = characters?.characters

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

  const renderFooter = () => {
    return loadingMore ? <Loader /> : null
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
    <SafeAreaView>
      {characters && (
        <FlatList
          numColumns={2}
          contentContainerStyle={{
            backgroundColor: 'white',
            justifyContent: 'space-between',
            paddingTop: 20,
            paddingBottom: 20,
          }}
          keyExtractor={(item) => item.id.toString()}
          data={charactersResult?.results}
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
          onRefresh={() => refetch()}
        />
      )}
    </SafeAreaView>
  )
}

const Loader = styled.ActivityIndicator`
  width: 100%;
  height: 100%;
`
