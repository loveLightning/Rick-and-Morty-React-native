import React, { useLayoutEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import styled from 'styled-components/native'

import {
  ApplyBtn,
  HeaderCard,
  RadioMultiple,
  RadioSearch,
} from 'src/components'
import { useFiltersContext } from 'src/context'
import { useNavigation } from 'src/navigation'
import { FilterTypes, Status } from 'src/types'
import { filtersIsEmpty } from 'src/utils'

import { SearchInputModalCharacters } from './search-input-modal-characters'
import { valuesGender, valuesStatus } from './types'

export const CharacterFilters = () => {
  const { setOptions, goBack } = useNavigation()
  const { filters, clearFilters, updateFilters, applyFilters } =
    useFiltersContext()

  const [isNameModal, setIsNameModal] = useState(false)
  const [isSpeciesModal, setIsSpeciesModal] = useState(false)

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
          clearFiltersValues={() => clearFilters(FilterTypes.character)}
          isFilterValues={filtersIsEmpty(filters.character.filter)}
          ComponentsRight={<ApplyBtn navigateScreen={applyFiltersHandler} />}
        />
      ),
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clearFilters, filters, setOptions])

  return (
    <SafeAreaView>
      <Wrapper>
        <SearchInputModalCharacters
          filterStatus="name"
          inputValue={filters.character.filter.name}
          isVisible={isNameModal}
          setIsVisible={setIsNameModal}
          titleName="Name"
          setFiltersValues={(valueInput: string) =>
            updateFilters('name', valueInput, FilterTypes.character)
          }
        />

        <SearchInputModalCharacters
          filterStatus="species"
          inputValue={filters.character.filter.species}
          isVisible={isSpeciesModal}
          setIsVisible={setIsSpeciesModal}
          titleName="species"
          setFiltersValues={(valueInput: string) =>
            updateFilters('species', valueInput, FilterTypes.character)
          }
        />

        <RadioSearch
          changeValueSelected={() => setIsNameModal(!isNameModal)}
          selected={filters.character.filter.name.length > 0}
          title="Name"
          subtitle="Give a name"
        />
        <RadioSearch
          changeValueSelected={() => setIsSpeciesModal(!isSpeciesModal)}
          selected={filters.character.filter.species.length > 0}
          title="Species"
          subtitle="Enter species"
        />

        <TitleChoice>Status</TitleChoice>
        <WrapBorder>
          {valuesStatus.map((item) => (
            <RadioMultiple
              status={Status.Status}
              key={item.id}
              isLast={valuesStatus.length - 1 !== item.id}
              value={item.value}
            />
          ))}
        </WrapBorder>

        <TitleChoice>Gender</TitleChoice>
        <WrapBorder>
          {valuesGender.map((item) => (
            <RadioMultiple
              status={Status.Gender}
              key={item.id}
              isLast={valuesGender.length - 1 !== item.id}
              value={item.value}
            />
          ))}
        </WrapBorder>
      </Wrapper>
    </SafeAreaView>
  )
}

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.white[0]};
  width: 100%;
  height: 100%;
`

const TitleChoice = styled.Text`
  font-family: ${({ theme }) => theme.roboto400};
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.24px;
  color: rgba(0, 0, 0, 0.4);
  padding: 0 15px 9px;
`

const WrapBorder = styled.View`
  border-top-color: rgba(0, 0, 0, 0.2);
  border-top-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-bottom-width: 1px;
  margin-bottom: 20px;
`
