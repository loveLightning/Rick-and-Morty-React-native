import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components/native'
import { RadioButton } from 'react-native-paper'
import { FilterContext } from '../../../context/context'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { stateStatus } from '../../../store/dataStatus/dataFilterCharacters'

export const FilterStatus: React.FC = () => {
    const dispath = useAppDispatch()
    const dataStatus = useAppSelector((state) => state.dataFilterCharacters.dataStatus)
    const [value, setValue] = useContext(FilterContext);

    useEffect(() => {
        setValue({
            ...value,
            status: dataStatus
        })
        console.log(value, dataStatus)
    }, [dataStatus])

    return (
        <Wrapper>
            <TextAlive>Status</TextAlive>
            <WrapperStatus>
                <BtnStatus onPress={() => dispath(stateStatus(('Alive')))}>
                    <RadioButton
                        value='Alive'
                        status={dataStatus == 'Alive' ? 'checked' : 'unchecked'}
                        color='#5856D6'
                        onPress={() => dispath(stateStatus(('Alive')))}
                    />
                    <StatusText>Alive</StatusText>
                </BtnStatus>
                <BtnStatus onPress={() => dispath(stateStatus(('Dead')))}>
                    <RadioButton
                        value='Dead'
                        status={dataStatus == 'Dead' ? 'checked' : 'unchecked'}
                        color='#5856D6'
                        onPress={() => dispath(stateStatus(('Dead')))}
                    />
                    <StatusText>Dead</StatusText>
                </BtnStatus>
                <BtnStatus onPress={() => dispath(stateStatus(('unknown')))}>
                    <RadioButton
                        value='unknown'
                        status={dataStatus == 'unknown' ? 'checked' : 'unchecked'}
                        color='#5856D6'
                        onPress={() => dispath(stateStatus(('unknown')))}
                    />
                    <StatusText>Unknown</StatusText>
                </BtnStatus>
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
`

const BtnStatus = styled.Pressable`
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

const StatusText = styled.Text`
    font-weight: 400;
    font-size: 17px;
    color: #081F32;
    letter-spacing: -0.41px;
`
