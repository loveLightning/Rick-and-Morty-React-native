import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import { Result } from '../character.type'

export const ListCharacter: React.FC<{item: Result}> = ({ item }) => {
    return (
        <WrapperCharacter>
            <ImageCharacter source={{ uri: item.image }} />
            <StatusCharacter>{item.status}</StatusCharacter>
            <NameCharacter>{item.name}</NameCharacter>
        </WrapperCharacter>
    )
}

const WrapperCharacter = styled.View`
    width: 165px;
    height: 219px;
    background: #FFFFFF;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border: 1px solid #EFEFF4;
    flex-direction: column;
    margin: 10px;
`

const ImageCharacter = styled.Image`
    width: 163px;
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