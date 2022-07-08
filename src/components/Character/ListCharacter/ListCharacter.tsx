import { useNavigation } from '@react-navigation/native'
import React from 'react'
import styled from 'styled-components/native'
import { Result } from '../character.type'

export const ListCharacter: React.FC<{ item: Result }> = ({ item }) => {
    const navigation = useNavigation<any>()
    return (
        <Wrapper onPress={() => navigation.navigate('CharacterDetail', {
            character: {
                id: item.id,
                species: item.species,
                namePlanet: item.location.name,
                image: item.image,
                gender: item.gender,
                origin: item.origin.name,
                name: item.name,
                status: item.status,
                type: item.type,
                episode: item.episode
            }
        })}>
            <WrapperCharacter>
                <ImageCharacter source={{ uri: item.image }} />
                <StatusCharacter>{item.status}</StatusCharacter>
                <NameCharacter>{item.name}</NameCharacter>
            </WrapperCharacter>
        </Wrapper>
    )
}

const Wrapper = styled.TouchableOpacity`
    width: 45%;
    height: 219px;
    background: #FFFFFF;
    border-radius: 8px;
    border: 1px solid #EFEFF4;
    margin: 10px;
`

const WrapperCharacter = styled.View`
`

const ImageCharacter = styled.Image`
    width: 100%;
    height: 140px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`

const StatusCharacter = styled.Text`
    margin-top: 12px;
    color: #6E798C;
    letter-spacing: 0.07px;
    font-size: 11px;
    font-weight: 400;
    padding-left: 12px;
`

const NameCharacter = styled.Text`
    color: #081F32;
    letter-spacing: -0.41px;
    font-size: 17px;
    font-weight: 900;
    padding-left: 12px;
`