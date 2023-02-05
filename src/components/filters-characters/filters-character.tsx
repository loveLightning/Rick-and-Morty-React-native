import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import { useLazyQuery } from '@apollo/client'
import styled from 'styled-components/native'

import { GET_ALL_CHARACTERS } from 'src/apollo'
import { RadioMultiple, RadioSearch, SearchInputModal } from 'src/components'
import { useDebounce } from 'src/hooks'
import { CharactersQueryType, Status } from 'src/types'

import { valuesGender, valuesStatus } from './types'

export const FiltersCharacter = () => {
  const [inputName, setInputName] = useState('')
  const [inputSpecies, setInputSpecies] = useState('')
  const searchQueryNames = useDebounce(inputName, 1000)
  const searchQuerySpecies = useDebounce(inputSpecies, 1000)
  const [getAllCharactersNames, { data: charactersNames }] =
    useLazyQuery<CharactersQueryType>(GET_ALL_CHARACTERS, {
      variables: {
        name: searchQueryNames,
      },
    })

  const [getAllCharactersSpecies, { data: charactersSpecies }] =
    useLazyQuery<CharactersQueryType>(GET_ALL_CHARACTERS, {
      variables: {
        name: searchQuerySpecies,
      },
    })

  const [names, setNames] = useState<string[]>([])
  const [species, setSpecies] = useState<string[]>([])

  const resultNames = charactersNames?.characters.results
  const resultSpecies = charactersSpecies?.characters.results

  const [isNameModal, setIsNameModal] = useState(false)
  const [isSpeciesModal, setIsSpeciesModal] = useState(false)

  const [enterName, setEnterName] = useState(false)
  const [enterSpecies, setEnterSpecies] = useState(false)

  const generateUniqueValues = () => {
    if (resultNames?.length) {
      setNames(() => {
        return Array.from(new Set(resultNames?.map((el) => el.name)))
      })
    }

    if (resultSpecies?.length) {
      setSpecies(() => {
        return Array.from(new Set(resultSpecies?.map((el) => el.name)))
      })
    }
  }

  useEffect(() => {
    getAllCharactersNames()
    generateUniqueValues()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQueryNames])

  useEffect(() => {
    getAllCharactersSpecies()
    generateUniqueValues()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuerySpecies])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Wrapper>
        <SearchInputModal
          values={names}
          inputValue={inputName}
          setInputValue={setInputName}
          isVisible={isNameModal}
          setIsVisible={setIsNameModal}
          titleName="Name"
        />

        <SearchInputModal
          values={species}
          inputValue={inputSpecies}
          setInputValue={setInputSpecies}
          isVisible={isSpeciesModal}
          setIsVisible={setIsSpeciesModal}
          titleName="Species"
        />

        <RadioSearch
          changeValueSelected={() => setIsNameModal(!isNameModal)}
          selected={enterName}
          title="Name"
          subtitle="Give a name"
        />
        <RadioSearch
          changeValueSelected={() => setIsSpeciesModal(!isSpeciesModal)}
          selected={enterSpecies}
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
  background-color: ${({ theme }) => theme.white};
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
