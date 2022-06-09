import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import styled from 'styled-components/native'

export const HeaderTitle: React.FC<{ title: string }> = ({ title }) => {
    return (
        <Wrapper>
            <WrapperFilter>
                <FilterText>
                    Filter
                </FilterText>
            </WrapperFilter>
            <View>
                <TitlePage>
                    {title}
                </TitlePage>
            </View>
        </Wrapper>
    )
}

const Wrapper = styled.View`
    flex: 1;
    height: 88px;
    padding-top: 11px;
`

const FilterText = styled.Text`
    color: #5856D6;
    font-weight: 900;
    letter-spacing: -0.41px;
    font-size: 17px;
`

const WrapperFilter = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    padding-right: 30px;
`

const TitlePage = styled.Text`
    font-weight: 700;
    font-size: 34px;
    letter-spacing: 0.41px;
    color: #081F32;
`
