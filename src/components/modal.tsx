import React from 'react'
import { Modal, View } from 'react-native'
import styled from 'styled-components/native'

interface Props {
  children: React.ReactNode
  isVisible: boolean
  setIsVisible: (val: boolean) => void
}

export const ReusableModal = ({
  children,
  isVisible,
  setIsVisible,
  ...props
}: Props) => {
  return (
    <>
      <View>
        <Modal
          {...props}
          animationType="slide"
          transparent={true}
          visible={isVisible}
          onRequestClose={() => setIsVisible(!isVisible)}>
          <WrapperContent>{children}</WrapperContent>
        </Modal>
      </View>
    </>
  )
}

const WrapperContent = styled.View`
  background-color: white;
  flex: 1;
`
