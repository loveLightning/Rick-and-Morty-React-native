import React from 'react'
import styled from 'styled-components/native'

import { BackHomeIcon } from 'src/icons'

interface Props {
  pressOnBack: () => void
}

export const ButtonBack = ({ pressOnBack }: Props) => {
  return (
    <BackHomeWrapper onPress={pressOnBack} activeOpacity={0.5}>
      <BackHomeIcon />
      <TextBack>Back</TextBack>
    </BackHomeWrapper>
  )
}

const BackHomeWrapper = styled.TouchableOpacity`
  margin-left: 10px;
  flex-direction: row;
`

const TextBack = styled.Text`
  font-weight: 400;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.41px;
  color: ${({ theme }) => theme.extra_blue};
  margin-left: 5px;
`
