import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

import { HeaderCard, ReusableModal, Separator } from 'src/components'
import { DisctaphoneIcon, SearchIcon } from 'src/icons'

interface Props {
  titleName: string
  isVisible: boolean
  setIsVisible: (val: boolean) => void
  inputValue: string
  setInputValue: (val: string) => void
  values: string[]
}

export const SearchInputModal = ({
  inputValue,
  setInputValue,
  titleName,
  isVisible,
  setIsVisible,
  values,
}: Props) => {
  return (
    <ReusableModal isVisible={isVisible} setIsVisible={setIsVisible}>
      <HeaderCard
        isBack
        title={titleName}
        pressOnBack={() => setIsVisible(!isVisible)}
      />
      <Container>
        <WrapInput>
          <SearchWrap>
            <SearchIcon />
            <Input
              onChangeText={setInputValue}
              value={inputValue}
              placeholder="Search"
            />
          </SearchWrap>
          <DisctaphoneIcon />
        </WrapInput>
      </Container>

      <Separator />

      <Container>
        {values?.map((el) => (
          <Text key={el}>{el}</Text>
        ))}
      </Container>
    </ReusableModal>
  )
}

const Input = styled.TextInput`
  flex: 1;
  margin-left: 5px;
  padding: 8px;
`

const Container = styled.View`
  padding: 16px;
`

const WrapInput = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: rgba(118, 118, 128, 0.12);
  border-radius: 10px;
  padding: 0 8px;
`

const SearchWrap = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
`
