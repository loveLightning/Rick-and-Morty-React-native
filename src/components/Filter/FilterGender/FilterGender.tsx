import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components/native'
import { RadioButton } from 'react-native-paper'
import { FilterContext } from '../../../context/context'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { stateGender } from '../../../store/dataStatus/dataFilterCharacters'

export const FilterGender: React.FC = () => {
    const dataGender = useAppSelector((state) => state.dataFilterCharacters.dataGender)
    const [value, setValue] = useContext(FilterContext);
    const dispath = useAppDispatch()
    useEffect(() => {
        setValue({
            ...value,
            gender: dataGender
        })
        console.log(value, dataGender)
    }, [dataGender])
    return (
        <Wrapper>
            <TextAlive>Gender</TextAlive>
            <WrapperStatus>
                <BtnGender onPress={() => dispath(stateGender('female'))}>
                    <RadioButton
                        value='female'
                        status={dataGender == 'female' ? 'checked' : 'unchecked'}
                        color='#5856D6'
                        onPress={() => dispath(stateGender('female'))}
                    />
                    <GenderText>Female</GenderText>
                </BtnGender>
                <BtnGender onPress={() => dispath(stateGender('male'))}>
                    <RadioButton
                        value='male'
                        status={dataGender == 'male' ? 'checked' : 'unchecked'}
                        color='#5856D6'
                        onPress={() => dispath(stateGender('male'))}
                    />
                    <GenderText>Male</GenderText>
                </BtnGender>
                <BtnGender onPress={() => dispath(stateGender('genderless'))}>
                    <RadioButton
                        value='genderless'
                        status={dataGender == 'genderless' ? 'checked' : 'unchecked'}
                        color='#5856D6'
                        onPress={() => dispath(stateGender('genderless'))}
                    />
                    <GenderText>Genderless</GenderText>
                </BtnGender>
                <BtnGender onPress={() => dispath(stateGender('unknown'))}>
                    <RadioButton
                        value='unknown'
                        status={dataGender == 'unknown' ? 'checked' : 'unchecked'}
                        color='#5856D6'
                        onPress={() => dispath(stateGender('unknown'))}
                    />
                    <GenderText>Unknown</GenderText>
                </BtnGender>
            </WrapperStatus>
        </Wrapper>
    )
}

const Wrapper = styled.View`
`

const TextAlive = styled.Text`
    color: rgba(0, 0, 0, 0.4);
    letter-spacing: -0.24px;
    font-weight: 400;
    font-size: 15px;
    padding-left: 15px;
    margin-bottom: 9px;
    margin-top: 25px;
`

const BtnGender = styled.Pressable`
    flex-direction: row;
    align-items: center;
    padding: 5px 15px;   
    border-bottom-width: 1px;
    border-color: rgba(0, 0, 0, 0.2);
`

const WrapperStatus = styled.View`
    border-width: 1px;
    border-color: rgba(0, 0, 0, 0.2);    
`

const GenderText = styled.Text`
    font-weight: 400;
    font-size: 17px;
    color: #081F32;
    letter-spacing: -0.41px;
`
