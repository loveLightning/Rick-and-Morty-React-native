import React, { useLayoutEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import styled from 'styled-components/native'

import { ApplyBtn, HeaderCard, RadioSearch } from 'src/components'
import { useFiltersContext } from 'src/context'
import { useNavigation } from 'src/navigation'
import { FilterTypes } from 'src/types'
import { filtersIsEmpty } from 'src/utils'

import { SearchInputModalEpisodes } from './search-input-modal-episodes'

export const EpisodeFilters = () => {
  const { setOptions, goBack } = useNavigation()

  const [isNameModal, setIsNameModal] = useState(false)
  const [isEpisodeModal, setIsEpisodeModal] = useState(false)
  const { filters, clearFilters, updateFilters, applyFilters } =
    useFiltersContext()

  const applyFiltersHandler = () => {
    applyFilters()
    goBack()
  }

  useLayoutEffect(() => {
    setOptions({
      header: () => (
        <HeaderCard
          isClear
          title="Filter"
          clearFiltersValues={() => clearFilters(FilterTypes.episode)}
          isFilterValues={filtersIsEmpty(filters[FilterTypes.episode].filter)}
          ComponentsRight={<ApplyBtn navigateScreen={applyFiltersHandler} />}
        />
      ),
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clearFilters, filters, setOptions])

  return (
    <SafeAreaView>
      <Wrapper>
        <SearchInputModalEpisodes
          filterStatus="name"
          inputValue={filters[FilterTypes.episode].filter.name}
          isVisible={isNameModal}
          setIsVisible={setIsNameModal}
          titleName="Name"
          setFiltersValues={(valueInput: string) =>
            updateFilters('name', valueInput, FilterTypes.episode)
          }
        />

        <SearchInputModalEpisodes
          filterStatus="episode"
          inputValue={filters[FilterTypes.episode].filter.episode}
          isVisible={isEpisodeModal}
          setIsVisible={setIsEpisodeModal}
          titleName="Episode"
          setFiltersValues={(valueInput: string) =>
            updateFilters('episode', valueInput, FilterTypes.episode)
          }
        />

        <RadioSearch
          changeValueSelected={() => setIsNameModal(!isNameModal)}
          selected={filters[FilterTypes.episode].filter.name.length > 0}
          title="Name"
          subtitle="Give a name"
        />
        <RadioSearch
          changeValueSelected={() => setIsEpisodeModal(!isEpisodeModal)}
          selected={filters[FilterTypes.episode].filter.episode.length > 0}
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
