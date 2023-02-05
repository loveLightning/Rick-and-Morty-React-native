import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'

import { Screens, useNavigation } from 'src/navigation'
import { CharacterTypes } from 'src/types'

export const CharacterItem: React.FC<{ item: CharacterTypes }> = ({ item }) => {
  const { navigate } = useNavigation()

  return (
    <Wrapper
      onPress={() =>
        navigate(Screens.CharacterDetail, {
          id: item.id,
          name: item.name,
        })
      }>
      <View>
        <ImageCharacter source={{ uri: item.image }} />
        <StatusCharacter>{item.status}</StatusCharacter>
        <NameCharacter>{item.name}</NameCharacter>
      </View>
    </Wrapper>
  )
}

const Wrapper = styled.TouchableOpacity`
  width: 45%;
  height: 219px;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #efeff4;
  margin: 10px;
`

const ImageCharacter = styled.Image`
  width: 100%;
  height: 140px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`

const StatusCharacter = styled.Text`
  margin-top: 12px;
  color: #6e798c;
  letter-spacing: 0.07px;
  font-size: 11px;
  font-weight: 400;
  padding-left: 12px;
`

const NameCharacter = styled.Text`
  color: #081f32;
  letter-spacing: -0.41px;
  font-size: 17px;
  font-weight: 900;
  padding-left: 12px;
`
