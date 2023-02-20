import React, { useCallback, useLayoutEffect, useState } from 'react'
import { SafeAreaView, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

import { ApplyBtn, HeaderCard, RadioSearch, TextIsClear } from 'src/components'
import { useEpisodeFiltersContext } from 'src/context'
import { useNavigation } from 'src/navigation'
import { filtersIsEmpty } from 'src/utils'

import { SearchInputModalEpisodes } from './search-input-modal-episodes'

export const EpisodeFilters = () => {
  const { setOptions, goBack } = useNavigation()

  const { filters, clearFilters, updateFilters, applyFilters } =
    useEpisodeFiltersContext()

  const [isNameModal, setIsNameModal] = useState(false)
  const [isEpisodeModal, setIsEpisodeModal] = useState(false)

  const applyFiltersHandler = useCallback(() => {
    applyFilters()
    goBack()
  }, [applyFilters, goBack])

  useLayoutEffect(() => {
    setOptions({
      header: () => (
        <HeaderCard
          title="Filter"
          ComponentsLeft={
            filtersIsEmpty(filters.filter) && (
              <TouchableOpacity onPress={() => clearFilters()}>
                <TextIsClear>Clear</TextIsClear>
              </TouchableOpacity>
            )
          }
          ComponentsRight={<ApplyBtn navigateScreen={applyFiltersHandler} />}
        />
      ),
    })
  }, [applyFiltersHandler, clearFilters, filters, setOptions])

  return (
    <SafeAreaView>
      <Wrapper>
        <SearchInputModalEpisodes
          filterStatus="name"
          inputValue={filters.filter.name}
          isVisible={isNameModal}
          setIsVisible={setIsNameModal}
          titleName="Name"
          setFiltersValues={(valueInput: string) =>
            updateFilters('name', valueInput)
          }
        />

        <SearchInputModalEpisodes
          filterStatus="episode"
          inputValue={filters.filter.episode}
          isVisible={isEpisodeModal}
          setIsVisible={setIsEpisodeModal}
          titleName="Episode"
          setFiltersValues={(valueInput: string) =>
            updateFilters('episode', valueInput)
          }
        />

        <RadioSearch
          changeValueSelected={() => setIsNameModal(!isNameModal)}
          selected={filters.filter.name.length > 0}
          title="Name"
          subtitle="Give a name"
        />
        <RadioSearch
          changeValueSelected={() => setIsEpisodeModal(!isEpisodeModal)}
          selected={filters.filter.episode.length > 0}
          title="Episode"
          subtitle="select one"
        />
      </Wrapper>
    </SafeAreaView>
  )
}

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.white[0]};
  width: 100%;
  height: 100%;
`
