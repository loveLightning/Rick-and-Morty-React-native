import React, { useCallback, useLayoutEffect, useState } from 'react'
import { SafeAreaView, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

import { ApplyBtn, HeaderCard, RadioSearch, TextIsClear } from 'src/components'
import { useLocationFiltersContext } from 'src/context'
import { useNavigation } from 'src/navigation'
import { filtersIsEmpty } from 'src/utils'

import { SearchInputModalLocations } from './search-input-modal-locations'

export const LocationFilters = () => {
  const { setOptions, goBack } = useNavigation()
  const [isNameModal, setIsNameModal] = useState(false)
  const [isTypeModal, setIsTypeModal] = useState(false)
  const [isDimensionModal, setIsDimensionModal] = useState(false)
  const { filters, clearFilters, updateFilters, applyFilters } =
    useLocationFiltersContext()

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
        <SearchInputModalLocations
          filterStatus="name"
          inputValue={filters.filter.name}
          isVisible={isNameModal}
          setIsVisible={setIsNameModal}
          titleName="Name"
          setFiltersValues={(valueInput: string) =>
            updateFilters('name', valueInput)
          }
        />

        <SearchInputModalLocations
          filterStatus="type"
          inputValue={filters.filter.type}
          isVisible={isTypeModal}
          setIsVisible={setIsTypeModal}
          titleName="Type"
          setFiltersValues={(valueInput: string) =>
            updateFilters('type', valueInput)
          }
        />
        <SearchInputModalLocations
          filterStatus="dimension"
          inputValue={filters.filter.dimension}
          isVisible={isDimensionModal}
          setIsVisible={setIsDimensionModal}
          titleName="Dimension"
          setFiltersValues={(valueInput: string) =>
            updateFilters('dimension', valueInput)
          }
        />

        <RadioSearch
          changeValueSelected={() => setIsNameModal(!isNameModal)}
          selected={filters.filter.name.length > 0}
          title="Name"
          subtitle="Give a name"
        />
        <RadioSearch
          changeValueSelected={() => setIsTypeModal(!isTypeModal)}
          selected={filters.filter.type.length > 0}
          title="Type"
          subtitle="Select type"
        />
        <RadioSearch
          changeValueSelected={() => setIsDimensionModal(!isDimensionModal)}
          selected={filters.filter.dimension.length > 0}
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
