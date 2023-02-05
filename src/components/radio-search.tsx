import React from 'react'
import styled from 'styled-components/native'

import { RadioButton } from 'src/components'
import { ArrowIcon } from 'src/icons'

interface Props {
  changeValueSelected: () => void
  selected: boolean
  title: string
  subtitle: string
}

export const RadioSearch = ({
  changeValueSelected,
  selected,
  title,
  subtitle,
}: Props) => {
  return (
    <WrapperRadio onPress={changeValueSelected}>
      <ContainerRadio>
        <RadioButton selected={selected}>
          <WrapText>
            <Title>{title}</Title>
            <Desc>{subtitle}</Desc>
          </WrapText>
        </RadioButton>
      </ContainerRadio>
      <ArrowIcon />
    </WrapperRadio>
  )
}

const WrapperRadio = styled.Pressable`
  border-top-color: rgba(0, 0, 0, 0.2);
  border-top-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-bottom-width: 1px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 7px 16px;
  margin-bottom: 20px;
`

const ContainerRadio = styled.View`
  flex-direction: row;
  align-items: center;
`

const Title = styled.Text`
  font-weight: 900;
  font-size: 17px;
  letter-spacing: -0.41px;
  color: ${({ theme }) => theme.light_black};
`

const Desc = styled.Text`
  letter-spacing: -0.24px;
  font-weight: 400;
  font-size: 15px;
  color: ${({ theme }) => theme.grey[4]};
`

const WrapText = styled.View`
  margin-left: 13px;
`
