import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Platform, View } from 'react-native'
import styled, { useTheme } from 'styled-components/native'

import { useFetchEpisodesLazyQuery } from 'src/apollo'
import {
  HeaderCard,
  InputWithVoiceRecorder,
  Loader,
  NotFound,
  ReusableModal,
  Separator,
} from 'src/components'
import { useFiltersContext } from 'src/context'
import { useDebounce } from 'src/hooks'
import { FilterTypes } from 'src/types'
import { defaultEpisodeFiltersValues, generateUniqueValues } from 'src/utils'

interface Props {
  filterStatus: 'name' | 'episode'
  inputValue: string
  titleName: string
  isVisible: boolean
  setIsVisible: (val: boolean) => void
  setFiltersValues: (val: string) => void
}

export const SearchInputModalEpisodes = ({
  filterStatus,
  inputValue,
  titleName,
  isVisible,
  setIsVisible,
  setFiltersValues,
}: Props) => {
  const [getAllEpisodes, { data, loading: isLoading, fetchMore }] =
    useFetchEpisodesLazyQuery()

  const { extra_blue } = useTheme()
  const [loadingMore, setLoadingMore] = useState(false)

  const searchInputQuery = useDebounce(inputValue, 1000)
  const { filters, updateFilters } = useFiltersContext()
  const resultEpisodes = generateUniqueValues(
    data?.episodes.results,
    filterStatus,
  )
  const nextPage = data?.episodes.info.next

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
    return (
      <>
        {loadingMore && <ActivityIndicator size="large" color={extra_blue} />}
      </>
    )
  }

  const renderList = () => {
    if (isLoading) {
      return (
        <View>
          <Loader size="small" color={extra_blue} />
        </View>
      )
    }

    if (!isLoading && !resultEpisodes.length) {
      return <NotFound>Not found</NotFound>
    }
  }

  useEffect(() => {
    updateFilters(filterStatus, searchInputQuery, FilterTypes.episode)
    getAllEpisodes({
      variables: {
        ...defaultEpisodeFiltersValues,
        filter: {
          ...defaultEpisodeFiltersValues.filter,
          [filterStatus]: filters.episode.filter[filterStatus],
        },
      },
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInputQuery])

  return (
    <ReusableModal isVisible={isVisible} setIsVisible={setIsVisible}>
      <HeaderCard
        isBack
        title={titleName}
        pressOnBack={() => {
          setIsVisible(!isVisible)
        }}
      />
      <InputWithVoiceRecorder
        setFiltersValues={setFiltersValues}
        inputValue={inputValue}
      />

      <Separator />

      {renderList()}

      {resultEpisodes.length > 0 && !isLoading && (
        <Container>
          <FlatList
            contentContainerStyle={{
              paddingBottom: 200,
              paddingTop: 10,
            }}
            data={resultEpisodes}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <ContainerName
                key={item.id}
                onPress={() => setFiltersValues(item[filterStatus])}>
                <TextName>{item[filterStatus]}</TextName>
              </ContainerName>
            )}
            onEndReached={nextPage ? getByScrollCharacters : null}
            onEndReachedThreshold={Platform.OS == 'ios' ? 0.1 : 0.2}
            ListFooterComponent={nextPage ? renderFooter : null}
          />
        </Container>
      )}
    </ReusableModal>
  )
}

const ContainerName = styled.TouchableOpacity`
  padding: 5px 0;
`

const TextName = styled.Text`
  font-family: ${({ theme }) => theme.roboto400};
  font-size: 16px;
  color: ${({ theme }) => theme.light_black};
`

const Container = styled.View`
  padding: 0 16px 16px;
`
