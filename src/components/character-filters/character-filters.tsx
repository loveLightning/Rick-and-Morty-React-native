import React, { useCallback, useLayoutEffect, useState } from 'react'
import { SafeAreaView, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

import {
  ApplyBtn,
  HeaderCard,
  RadioMultiple,
  RadioSearch,
  TextIsClear,
} from 'src/components'
import { useCharacterFiltersContext } from 'src/context'
import { useNavigation } from 'src/navigation'
import { Status } from 'src/types'
import { filtersIsEmpty } from 'src/utils'

import { SearchInputModalCharacters } from './search-input-modal-characters'
import { valuesGender, valuesStatus } from './types'

export const CharacterFilters = () => {
  const { setOptions, goBack } = useNavigation()
  const { filters, clearFilters, updateFilters, applyFilters } =
    useCharacterFiltersContext()

  const [isNameModal, setIsNameModal] = useState(false)
  const [isSpeciesModal, setIsSpeciesModal] = useState(false)

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
        <SearchInputModalCharacters
          filterStatus="name"
          inputValue={filters.filter.name}
          isVisible={isNameModal}
          setIsVisible={setIsNameModal}
          titleName="Name"
          setFiltersValues={(valueInput: string) =>
            updateFilters('name', valueInput)
          }
        />

        <SearchInputModalCharacters
          filterStatus="species"
          inputValue={filters.filter.species}
          isVisible={isSpeciesModal}
          setIsVisible={setIsSpeciesModal}
          titleName="species"
          setFiltersValues={(valueInput: string) =>
            updateFilters('species', valueInput)
          }
        />

        <RadioSearch
          changeValueSelected={() => setIsNameModal(!isNameModal)}
          selected={filters.filter.name.length > 0}
          title="Name"
          subtitle="Give a name"
        />
        <RadioSearch
          changeValueSelected={() => setIsSpeciesModal(!isSpeciesModal)}
          selected={filters.filter.species.length > 0}
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
