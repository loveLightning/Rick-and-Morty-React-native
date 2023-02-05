import React from 'react'
import styled from 'styled-components/native'

import { RadioButtonActiveIcon, RadioButtonInActiveIcon } from 'src/icons'

interface Props {
  selected: boolean
  children: React.ReactNode
  changeValue?: () => void
}

export const RadioButton = ({ selected, children }: Props) => {
  return (
    <Wrapper>
      {selected ? <RadioButtonActiveIcon /> : <RadioButtonInActiveIcon />}
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`
