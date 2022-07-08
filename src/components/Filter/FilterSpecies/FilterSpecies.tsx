import React, { useState } from 'react'
import { View } from 'react-native'
import { RadioButton } from 'react-native-paper'
import styled from 'styled-components/native'

export const FilterSpecies = () => {
    const [enterSpecies, setEnterSpecies] = useState(false)

    return (
        <WrapperButton
            activeOpacity={1}
            onPress={() => setEnterSpecies(!enterSpecies)}
        >
            <RadioButton
                value='species'
                status={!enterSpecies ? 'unchecked' : 'checked'}
                color='#5856D6'
                onPress={() => setEnterSpecies(!enterSpecies)}
            />
            <View>
                <Title>
                    Species
                </Title>
                <Desc>
                    Enter species
                </Desc>
            </View>
            <ImageArrow source={require('../../../../assets/images/arrow.png')}></ImageArrow>
        </WrapperButton>
    )
}

const WrapperButton = styled.TouchableOpacity`
    border-bottom-color: rgba(0, 0, 0, 0.2);
    border-top-color: rgba(0, 0, 0, 0.2);
    border-bottom-width: 1px;
    border-top-width: 1px;
    flex-direction: row;
    padding-top: 7px;
    padding-bottom: 7px;
    align-items: center;
    padding-left: 15px;
    margin-bottom: 20px;
`

const Title = styled.Text`
    font-weight: 900;
    font-size: 17px;
    letter-spacing: -0.41px;
    color: #081F32;
`

const Desc = styled.Text`
    letter-spacing: -0.24px;
    color: #6E798C;
    font-weight: 400;
    font-size: 15px;
`

const ImageArrow = styled.Image`
    height: 15px;
    width: 15px;
    position: absolute;
    right: 30px;
`