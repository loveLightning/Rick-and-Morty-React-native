import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Platform, View } from 'react-native'
import styled, { useTheme } from 'styled-components/native'

import { useFetchLocationsLazyQuery } from 'src/apollo'
import {
  ButtonBack,
  HeaderCard,
  InputWithVoiceRecorder,
  Loader,
  NotFound,
  ReusableModal,
  Separator,
} from 'src/components'
import { useLocationFiltersContext } from 'src/context'
import { useDebounce } from 'src/hooks'
import { useNavigation } from 'src/navigation'
import { defaultLocationFiltersValues, generateUniqueValues } from 'src/utils'

interface Props {
  filterStatus: 'name' | 'type' | 'dimension'
  inputValue: string
  titleName: string
  isVisible: boolean
  setIsVisible: (val: boolean) => void
  setFiltersValues: (val: string) => void
}

export const SearchInputModalLocations = ({
  filterStatus,
  inputValue,
  titleName,
  isVisible,
  setIsVisible,
  setFiltersValues,
}: Props) => {
  const [getAllEpisodes, { data, loading: isLoading, fetchMore }] =
    useFetchLocationsLazyQuery()

  const { extra_blue } = useTheme()
  const [loadingMore, setLoadingMore] = useState(false)
  const { goBack } = useNavigation()

  const searchInputQuery = useDebounce(inputValue, 1000)
  const { filters, updateFilters } = useLocationFiltersContext()

  const resultLocations = generateUniqueValues(
    data?.locations.results,
    filterStatus,
  )
  const nextPage = data?.locations.info.next

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

  const closeModal = () => {
    setIsVisible(!isVisible)
    goBack
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

    if (!isLoading && !resultLocations.length) {
      return <NotFound>Not found</NotFound>
    }
  }

  useEffect(() => {
    updateFilters(filterStatus, searchInputQuery)
    getAllEpisodes({
      variables: {
        ...defaultLocationFiltersValues,
        filter: {
          ...defaultLocationFiltersValues.filter,
          [filterStatus]: filters.filter[filterStatus],
        },
      },
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInputQuery])

  return (
    <ReusableModal isVisible={isVisible} setIsVisible={setIsVisible}>
      <HeaderCard
        title={titleName}
        ComponentsLeft={<ButtonBack pressOnBack={closeModal} />}
      />
      <InputWithVoiceRecorder
        setFiltersValues={setFiltersValues}
        inputValue={inputValue}
      />

      <Separator />

      {renderList()}

      {resultLocations.length > 0 && !isLoading && (
        <Container>
          <FlatList
            contentContainerStyle={{
              paddingBottom: 200,
              paddingTop: 10,
            }}
            data={resultLocations}
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
