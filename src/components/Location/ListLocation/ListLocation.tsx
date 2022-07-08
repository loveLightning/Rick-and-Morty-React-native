import { useNavigation } from '@react-navigation/native'
import React from 'react'
import styled from 'styled-components/native'
import { ILocation2 } from '../location.type'

export const ListLocation: React.FC<{ item: ILocation2 }> = ({ item }) => {
  const navigation = useNavigation<any>()
  return (
    <WrapperLocation onPress={() => navigation.navigate('LocationDetail', {
      location: {
        dimension: item.dimension,
        residents: item.residents,
        name: item.name,
        type: item.type
      }
    })}>
      <TextType>{item.type}</TextType>
      <TextName>{item.name}</TextName>
    </WrapperLocation>
  )
}

const WrapperLocation = styled.TouchableOpacity`
  height: 80px;
  width: 45%;
  border: 1px solid #EFEFF4;
  border-radius: 8px;
  padding: 12px;
  margin: 10px;
`

const TextType = styled.Text`
  color: #6E798C;
  letter-spacing: 0.07px;
  font-weight: 400;
  font-size: 11px;
`

const TextName = styled.Text`
  color: #081F32;
  letter-spacing: -0.41px;
  font-weight: 900;
  font-size: 17px;
`