import React from 'react'
import styled from 'styled-components/native'

import { RadioButton, Separator } from 'src/components'
import { useFilteresCharacters } from 'src/context'
import { ArrowIcon } from 'src/icons'
import { Status } from 'src/types'

interface Props {
  isLast: boolean
  value: string
  status: Status
}

export const RadioMultiple = ({ isLast, value, status }: Props) => {
  const { filtersValues, setFiltersValues } = useFilteresCharacters()

  return (
    <>
      <WrapperChoice
        onPress={() => {
          status === Status.Gender && value
            ? setFiltersValues({ ...filtersValues, gender: value })
            : setFiltersValues({ ...filtersValues, status: value })
        }}>
        <ContainerRadio>
          <RadioButton
            selected={
              status === Status.Gender && value
                ? filtersValues.gender === value
                : filtersValues.status === value
            }>
            <WrapText>
              <ItemChoice>{value}</ItemChoice>
            </WrapText>
          </RadioButton>
        </ContainerRadio>
        <ArrowIcon />
      </WrapperChoice>
      <WrapSeparator>{isLast && <Separator />}</WrapSeparator>
    </>
  )
}

const ContainerRadio = styled.View`
  flex-direction: row;
  align-items: center;
`

const ItemChoice = styled.Text`
  font-weight: 400;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.41px;
  color: ${({ theme }) => theme.light_black};
`

const WrapperChoice = styled.Pressable`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 7px 16px;
`

const WrapSeparator = styled.View`
  padding-left: 55px;
`

const WrapText = styled.View`
  margin-left: 13px;
`
