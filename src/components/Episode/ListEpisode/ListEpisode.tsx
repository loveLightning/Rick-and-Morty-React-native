import React from 'react'
import { Image, View } from 'react-native'
import styled from 'styled-components/native'
import { Episode } from '../episode.type'

export const ListEpisode: React.FC<{ item: Episode }> = ({ item }) => {
  return (
    <Wrapper>
      <WrapperSeason>
        <View>
          <EpisodeText>{item.episode}</EpisodeText>
          <NameText>{item.name}</NameText>
          <DateText>{item.air_date}</DateText>
        </View>
        <View>
          <Image style={{ width: 10, height: 10 }} source={require('../../../../assets/images/arrow.png')} />
        </View>
      </WrapperSeason>
    </Wrapper>
  )
}

export const Wrapper = styled.View`
  width: 100%;
  height: 100%;
`

export const WrapperSeason = styled.View`
  border-bottom-width: 1px;
  border-bottom-style : solid;
  border-bottom-color : rgba(0, 0, 0, 0.2);
  padding-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 15px;
  align-items: center;
`

export const EpisodeText = styled.Text`
  font-weight: 900;
  font-size: 17px;
  letter-spacing: -0.41px;
  color: #081F32;
`
export const NameText = styled.Text`
  font-weight: 400;
  font-size: 15px;
  letter-spacing: -0.24px;
  color: #6E798C;
  opacity: 0.9;
`

export const DateText = styled.Text`
  font-weight: 900;
  font-size: 11px;
  letter-spacing: 0.07px;
  text-transform: uppercase;
  color: #8E8E93;
`