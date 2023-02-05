import React, { useState } from 'react'
import { View } from 'react-native'
import { RadioButton } from 'react-native-paper'
import styled from 'styled-components/native'

export const FilterName = () => {
  const [enterName, setEnterName] = useState(false)

  return (
    <WrapperButton activeOpacity={1} onPress={() => setEnterName(!enterName)}>
      <RadioButton
        value="name"
        status={!enterName ? 'unchecked' : 'checked'}
        color="#5856D6"
        onPress={() => setEnterName(!enterName)}
      />
      <View>
        <Title>Name</Title>
        <Desc>Give a name</Desc>
      </View>
      <ImageArrow
        source={require('../../../../assets/images/arrow.png')}></ImageArrow>
    </WrapperButton>
  )
}

const WrapperButton = styled.TouchableOpacity`
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-bottom-width: 1px;
  flex-direction: row;
  padding-bottom: 7px;
  align-items: center;
  padding-left: 15px;
  margin-bottom: 20px;
`

const Title = styled.Text`
  font-weight: 900;
  font-size: 17px;
  letter-spacing: -0.41px;
  color: #081f32;
`

const Desc = styled.Text`
  letter-spacing: -0.24px;
  color: #6e798c;
  font-weight: 400;
  font-size: 15px;
`

const ImageArrow = styled.Image`
  height: 15px;
  width: 15px;
  position: absolute;
  right: 30px;
`
