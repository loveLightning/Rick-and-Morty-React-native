import { useNavigation } from '@react-navigation/native'
import React from 'react'
import styled from 'styled-components/native'
import { Image } from 'react-native'
import { IrouteLocation } from '../../../location.type'

export const HeaderLocation: React.FC<{ route: IrouteLocation }> = ({ route }) => {
    const navigation = useNavigation()
    return (
        <Wrapper>
            <BackButton onPress={() => navigation.goBack()}>
                <Image source={require('../../../../../../assets/images/back.png')} />
                <TextBack>Back</TextBack>
            </BackButton>
            <HeaderPosition>
                <TextHeader>{route.params.location.name}</TextHeader>
            </HeaderPosition>
        </Wrapper>
    )
}

const Wrapper = styled.View`
    height: 50px;
    width: 100%;
    background-color: white;
`

const BackButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin-left: 10px;
    margin-top: 13.5px;
`

const TextBack = styled.Text`
    color: #5856D6;
    letter-spacing: -0.41px;
    font-weight: 400;
    font-size: 17px;
    margin-left: 5px;
`

const HeaderPosition = styled.View`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    align-items: center;
    justify-content: center;
`

const TextHeader = styled.Text`
    letter-spacing: -0.24px;
    color: #081F32;
    font-weight: 900;
    font-size: 15px;
`
