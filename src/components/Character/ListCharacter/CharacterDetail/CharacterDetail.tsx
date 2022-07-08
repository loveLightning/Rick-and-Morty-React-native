import { useRoute } from '@react-navigation/native';
import React from 'react'
import { FlatList, Image, View } from 'react-native';
import styled from 'styled-components/native';
import { IRouteCharacter } from '../../character.type';
import { HeaderCharacter } from './HeaderCharacter/HeaderCharacter';
import { InformationCharacter, InformationLine } from './InformationCharacter/InformationCharacter';

export const CharacterDetail: React.FC<{}> = () => {
  const route = useRoute<IRouteCharacter>();
  return (
    <>
      <HeaderCharacter route={route} />
      <FlatList
        contentContainerStyle={{
          borderBottomWidth: 1,
          borderColor: 'rgba(0, 0, 0, 0.2)',
          paddingBottom: 60,
        }}
        data={route.params.character.episode}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={() => (
          <>
            <WrapperLogo>
              <BackgroundCharacter source={require('../../../../../assets/images/background-character.png')} />
              <ImageCharacterWrapper>
                <ImageCharacter source={{ uri: `${route.params.character.image}` }} />
              </ImageCharacterWrapper>
              <TextStatusWrapper>
                <TextStatus>
                  {route.params.character.status}
                </TextStatus>
              </TextStatusWrapper>
              <TextNameWrapper>
                <TextName>
                  {route.params.character.name}
                </TextName>
              </TextNameWrapper>
              <TextGenderWrapper>
                <TextGender>
                  {route.params.character.gender}
                </TextGender>
              </TextGenderWrapper>
            </WrapperLogo>
            <InformationCharacter route={route} />
          </>
        )}
        renderItem={({ item }) => (
          <>
            <WrapperEpisodes>
              <View>
                <EpisodeText>{item.episode}</EpisodeText>
                <NameText>{item.name}</NameText>
                <DateText>{item.air_date}</DateText>
              </View>
              <View>
                <Image style={{ width: 10, height: 10 }} source={require('../../../../../assets/images/arrow.png')} />
              </View>
            </WrapperEpisodes>
            <Line></Line>
          </>
        )}
      />

    </>
  )
}

const WrapperLogo = styled.View`
  position: relative;
`

const BackgroundCharacter = styled.ImageBackground`
  width: 100%;
  height: 256px;
`

const ImageCharacterWrapper = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  top: 22px;
`

const ImageCharacter = styled.Image`
  height: 130px;
  width: 130px;
  border-radius: 65px;
  overflow: hidden;
  border-width: 6px;
  border-color: #F2F2F7;
`

const TextStatusWrapper = styled(ImageCharacterWrapper)`
  top: 169px;
`

const TextStatus = styled.Text`
  font-weight: 400;
  color: #6E798C;
  letter-spacing: 0.07px;
  font-size: 11px;
`

const TextNameWrapper = styled(ImageCharacterWrapper)`
  top: 185px;
`

const TextName = styled.Text`
  color: #081F32;
  letter-spacing: 0.337647px;
  font-weight: 700;
  font-size: 28px;
`

const TextGenderWrapper = styled(ImageCharacterWrapper)`
  top: 222px;
`

const TextGender = styled.Text`
  color: #8E8E93;
  letter-spacing: -0.08px;
  font-weight: 900;
  font-size: 13px;
`

const WrapperEpisodes = styled.View`
  flex-direction: row;
  padding: 5px 15px 10px 15px;
  align-items: center;
  justify-content: space-between;
`

const EpisodeText = styled.Text`
  font-weight: 900;
  font-size: 17px;
  letter-spacing: -0.41px;
  color: #081F32;
`

const NameText = styled.Text`
  font-weight: 400;
  font-size: 15px;
  letter-spacing: -0.24px;
  color: #6E798C;
  opacity: 0.9;
`

const DateText = styled.Text`
  font-weight: 900;
  font-size: 11px;
  letter-spacing: 0.07px;
  text-transform: uppercase;
  color: #8E8E93;
`

const Line = styled.View`
  border-bottom-width: 1px;
  border-color: rgba(0, 0, 0, 0.2);
  margin-left: 15px;
`