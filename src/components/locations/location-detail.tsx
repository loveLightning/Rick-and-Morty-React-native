import React from 'react'
import { FlatList, View } from 'react-native'
import styled from 'styled-components/native'

import { CharacterItem, DescriptionDetail } from 'src/components'
import { LocationTypes } from 'src/types'

interface Props {
  locationDetail: LocationTypes
}

export const LocationDetail = ({ locationDetail }: Props) => {
  const renderHeader = () => {
    return <Subtitle>Residents</Subtitle>
  }

  return (
    <View>
      <ContainerHeaderImage>
        <DescriptionDetail
          status={locationDetail?.type}
          name={locationDetail?.name}
          species={locationDetail?.dimension}
        />
      </ContainerHeaderImage>

      <FlatList
        ListHeaderComponent={renderHeader()}
        contentContainerStyle={{
          backgroundColor: 'white',
          justifyContent: 'space-between',
          paddingBottom: 250,
        }}
        data={locationDetail?.residents}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CharacterItem
            key={item.id}
            name={item.name}
            image={item.image}
            status={item.status}
            id={item.id}
          />
        )}
      />
    </View>
  )
}

const Subtitle = styled.Text`
  padding: 20px 0 9.5px 16px;
  text-align: left;
  font-size: 20px;
  line-height: 25px;
  color: ${({ theme }) => theme.grey[5]};
`

const ContainerHeaderImage = styled.View`
  background: ${({ theme }) => theme.grey[3]};
`
