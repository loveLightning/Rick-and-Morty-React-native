import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import styled from 'styled-components/native'

import { GET_ALL_CHARACTERS } from '../../apollo/characters'
import { AppContextInterface, FilterContext } from '../../context/filters-context'
import { useAppDispatch } from '../../hooks/hooks'
import { stateData } from '../../store/dataCharacters/dataCharacters'
import { Result } from '../characters/character.type'
import { FilterGender } from './FilterGender/FilterGender'
import { FilterName } from './FilterName/FilterName'
import { FilterSpecies } from './FilterSpecies/FilterSpecies'
import { FilterStatus } from './FilterStatus/FilterStatus'

export const Filter: React.FC = () => {
  const [value, setValue] = useState<AppContextInterface>({
    status: '',
    gender: '',
  })
  const { data } = useQuery(GET_ALL_CHARACTERS)

  const dispath = useAppDispatch()

  useEffect(() => {
    let filterData = data?.characters?.results?.filter((item: Result) => {
      if (value.status.length && value.gender.length) {
        return (
          item.status == value.status &&
          item.gender.toLowerCase() == value.gender.toLowerCase()
        )
      } else if (value.status.length && value.gender.length == 0) {
        return item.status == value.status
      } else if (value.gender.length && value.status.length == 0) {
        return item.gender.toLowerCase() == value.gender.toLowerCase()
      } else {
        return (filterData = data)
      }
    })
    dispath(stateData(filterData))
  }, [value])

  return (
    <FilterContext.Provider value={[value, setValue]}>
      <Wrapper>
        <FilterName />
        <FilterSpecies />
        <FilterStatus />
        <FilterGender />
      </Wrapper>
    </FilterContext.Provider>
  )
}

const Wrapper = styled.View`
  background-color: white;
  width: 100%;
  height: 100%;
  padding-top: 10px;
`
