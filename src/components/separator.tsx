import React from 'react'
import styled from 'styled-components/native'

export const Separator = () => {
  return <Line />
}

const Line = styled.View`
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-bottom-width: 1px;
  width: 100%;
`
