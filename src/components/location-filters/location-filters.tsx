import React, { useLayoutEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import styled from 'styled-components/native'

import { ApplyBtn, HeaderCard, RadioSearch } from 'src/components'
import { useFiltersContext } from 'src/context'
import { useNavigation } from 'src/navigation'
import { FilterTypes } from 'src/types'
import { filtersIsEmpty } from 'src/utils'

import { SearchInputModalLocations } from './search-input-modal-locations'

export const LocationFilters = () => {
  const { setOptions, goBack } = useNavigation()
  const [isNameModal, setIsNameModal] = useState(false)
  const [isTypeModal, setIsTypeModal] = useState(false)
  const [isDimensionModal, setIsDimensionModal] = useState(false)
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
          clearFiltersValues={() => clearFilters(FilterTypes.location)}
          isFilterValues={filtersIsEmpty(filters[FilterTypes.location].filter)}
          ComponentsRight={<ApplyBtn navigateScreen={applyFiltersHandler} />}
        />
      ),
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clearFilters, filters, setOptions])

  return (
    <SafeAreaView>
      <Wrapper>
        <SearchInputModalLocations
          filterStatus="name"
          inputValue={filters[FilterTypes.location].filter.name}
          isVisible={isNameModal}
          setIsVisible={setIsNameModal}
          titleName="Name"
          setFiltersValues={(valueInput: string) =>
            updateFilters('name', valueInput, FilterTypes.location)
          }
        />

        <SearchInputModalLocations
          filterStatus="type"
          inputValue={filters[FilterTypes.location].filter.type}
          isVisible={isTypeModal}
          setIsVisible={setIsTypeModal}
          titleName="Type"
          setFiltersValues={(valueInput: string) =>
            updateFilters('type', valueInput, FilterTypes.location)
          }
        />
        <SearchInputModalLocations
          filterStatus="dimension"
          inputValue={filters[FilterTypes.location].filter.dimension}
          isVisible={isDimensionModal}
          setIsVisible={setIsDimensionModal}
          titleName="Dimension"
          setFiltersValues={(valueInput: string) =>
            updateFilters('dimension', valueInput, FilterTypes.location)
          }
        />

        <RadioSearch
          changeValueSelected={() => setIsNameModal(!isNameModal)}
          selected={filters[FilterTypes.location].filter.name.length > 0}
          title="Name"
          subtitle="Give a name"
        />
        <RadioSearch
          changeValueSelected={() => setIsTypeModal(!isTypeModal)}
          selected={filters[FilterTypes.location].filter.type.length > 0}
          title="Type"
          subtitle="Select type"
        />
        <RadioSearch
          changeValueSelected={() => setIsDimensionModal(!isDimensionModal)}
          selected={filters[FilterTypes.location].filter.dimension.length > 0}
          title="Dimension"
          subtitle="Select type"
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
