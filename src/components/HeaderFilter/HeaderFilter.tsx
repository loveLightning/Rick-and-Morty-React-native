import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { stateGender, stateStatus } from '../../store/dataStatus/dataFilterCharacters'

export const HeaderFilter: React.FC<{ title: string }> = ({ title }) => {
    const navigation = useNavigation()
    let dataValue = useAppSelector((state) => state.dataCharacters.dataCharacters)
    // const dataDender = useAppSelector((state) => state.dataFilterCharacters.dataGender)
    // const dataStatus = useAppSelector((state) => state.dataFilterCharacters.dataStatus)
    // const dispath = useAppDispatch()

    const goBack = () => {
            navigation.goBack()
    }

    // const clearDataFilter = () => {
    //     dispath(stateStatus(''))
    //     dispath(stateGender(''))
    //     console.log(dataDender, dataStatus)
    // }

    // const showTextClear = () => {
    //     if (dataDender || dataStatus) {
    //         return <WrapperClear onPress={clearDataFilter} activeOpacity={1}>
    //             <TextClear>Clear</TextClear>
    //         </WrapperClear>
    //     }
    // }

    return (
        <WrapperFilter>
            {/* {showTextClear()} */}
            <TextFilter>{title}</TextFilter>
            <Button>
                <TextButton onPress={goBack}>Apply</TextButton>
            </Button>
        </WrapperFilter>

    )
}

const WrapperClear = styled.TouchableOpacity`
    position: absolute;
`

const TextClear = styled.Text`
    font-weight: 400;
    font-size: 17px;
    letter-spacing: -0.41px;
    color: #5856D6;
`

const TextFilter = styled.Text`
    color: #081F32;
    letter-spacing: -0.24px;
    font-weight: 900;
    font-size: 15px;
    flex: 1;
    text-align: center;
`

const WrapperFilter = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    height: 63px;
`

const Button = styled.Pressable`
    align-items: center;
    justify-content: center;
    background: #5856D6;
    width: 63px;
    height: 28px;
    position: absolute;
    right: 30px;
    border-radius: 14px;
    padding: 0px 6px 0px 6px;
`

const TextButton = styled.Text`
    text-align: center;
    letter-spacing: -0.08px;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 13px;
    color: white;
`