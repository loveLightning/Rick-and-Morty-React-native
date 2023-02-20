import React, { useCallback, useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Platform, View } from 'react-native'
import styled, { useTheme } from 'styled-components/native'

import { useFetchCharactersLazyQuery } from 'src/apollo'
import {
  ButtonBack,
  HeaderCard,
  InputWithVoiceRecorder,
  Loader,
  NotFound,
  ReusableModal,
  Separator,
} from 'src/components'
import { useCharacterFiltersContext } from 'src/context'
import { useDebounce } from 'src/hooks'
import { useNavigation } from 'src/navigation'
import { defaultCharacterFiltersValues, generateUniqueValues } from 'src/utils'

interface Props {
  filterStatus: 'name' | 'species'
  inputValue: string
  titleName: string
  isVisible: boolean
  setIsVisible: (val: boolean) => void
  setFiltersValues: (val: string) => void
}

export const SearchInputModalCharacters = ({
  filterStatus,
  inputValue,
  titleName,
  isVisible,
  setIsVisible,
  setFiltersValues,
}: Props) => {
  const [getAllCharacters, { data, loading: isLoading, fetchMore }] =
    useFetchCharactersLazyQuery()

  const { filters, updateFilters } = useCharacterFiltersContext()

  const { extra_blue } = useTheme()
  const [loadingMore, setLoadingMore] = useState(false)
  const { goBack } = useNavigation()

  const searchInputQuery = useDebounce(inputValue, 1000)

  const resultCharacters = generateUniqueValues(
    data?.characters.results,
    filterStatus,
  )
  const nextPage = data?.characters.info.next

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

    if (!isLoading && !resultCharacters.length) {
      return <NotFound>Not found</NotFound>
    }
  }

  useEffect(() => {
    updateFilters(filterStatus, searchInputQuery)
    getAllCharacters({
      variables: {
        ...defaultCharacterFiltersValues,
        filter: {
          ...defaultCharacterFiltersValues.filter,
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

      {resultCharacters.length > 0 && !isLoading && (
        <Container>
          <FlatList
            contentContainerStyle={{
              paddingBottom: 20,
              paddingTop: 10,
            }}
            data={resultCharacters}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <ContainerName
                key={item.id}
                onPress={() => setFiltersValues(item[filterStatus])}>
                <TextName>{item[filterStatus]}</TextName>
              </ContainerName>
            )}
            onEndReached={nextPage ? getByScrollCharacters : null}
            onEndReachedThreshold={Platform.OS === 'ios' ? 0.1 : 0.2}
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
  padding: 0 16px 0;
  flex: 1;
`
