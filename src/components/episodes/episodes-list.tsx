import React, { useCallback, useState } from 'react'
import {
  ActivityIndicator,
  FlatList,
  Platform,
  SafeAreaView,
  View,
} from 'react-native'
import { useTheme } from 'styled-components/native'
import styled from 'styled-components/native'

import { useFetchEpisodesQuery } from 'src/apollo'
import {
  EpisodeItem,
  ErrorMessage,
  Loader,
  NotFound,
  Separator,
} from 'src/components'
import { useEpisodeFiltersContext } from 'src/context'

export const EpisodesList: React.FC = () => {
  const { extra_blue, white } = useTheme()
  const [loadingMore, setLoadingMore] = useState(false)
  const { appliedFilters, clearFilters } = useEpisodeFiltersContext()

  const {
    data: episodes,
    loading,
    error,
    fetchMore,
  } = useFetchEpisodesQuery({ variables: appliedFilters })
  const nextPage = episodes?.episodes.info.next
  const epsiodesResult = episodes?.episodes

  const getByScrollCharacters = useCallback(async () => {
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
  }, [fetchMore, nextPage])

  const refetchData = () => {
    clearFilters()
  }

  const renderFooter = () => {
    return (
      <>
        <Separator />

        {loadingMore ? (
          <ActivityIndicator size="large" color={extra_blue} />
        ) : null}
      </>
    )
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
    <SafeAreaView style={{ backgroundColor: white[0] }}>
      <Wrapper>
        {epsiodesResult?.results.length ? (
          <FlatList
            contentContainerStyle={{
              backgroundColor: white[0],
              justifyContent: 'space-between',
              paddingTop: 20,
              paddingBottom: 50,
            }}
            keyExtractor={(item) => item.id.toString()}
            data={epsiodesResult?.results}
            renderItem={({ item, index }) => (
              <EpisodeItem
                id={item.id}
                episode={item.episode}
                name={item.name}
                air_date={item.air_date}
                isLast={epsiodesResult.results.length - 1 !== index}
              />
            )}
            onEndReached={nextPage ? getByScrollCharacters : null}
            onEndReachedThreshold={Platform.OS == 'ios' ? 0.1 : 0.2}
            ListFooterComponent={renderFooter}
            ListHeaderComponent={<Separator />}
            refreshing={loading}
            onRefresh={refetchData}
          />
        ) : (
          <NotFound>Episodes not found</NotFound>
        )}
      </Wrapper>
    </SafeAreaView>
  )
}

const Wrapper = styled.View`
  width: 100%;
  height: 100%;
`

// const SeasonText = styled.Text`
//   color: ${({ theme }) => theme.grey[5]};
//   font-family: ${({ theme }) => theme.roboto700};
//   font-size: 20px;
//   line-height: 25px;
//   letter-spacing: 0.38px;
// `
