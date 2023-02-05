import React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styled from 'styled-components/native'

export const HeaderTitle: React.FC<{ title: string }> = ({ title }) => {
  const navigation = useNavigation<any>()

  return (
    <Wrapper>
      <WrapperFilter>
        <FilterText onPress={() => navigation.navigate('Filter')}>
          Filter
        </FilterText>
      </WrapperFilter>
      <View>
        <TitlePage>{title}</TitlePage>
      </View>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  flex: 1;
  padding-top: 11px;
`

const FilterText = styled.Text`
  color: #5856d6;
  font-weight: 900;
  letter-spacing: -0.41px;
  font-size: 17px;
`

const WrapperFilter = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
`

const TitlePage = styled.Text`
  font-weight: 700;
  font-size: 34px;
  letter-spacing: 0.41px;
  color: #081f32;
`
