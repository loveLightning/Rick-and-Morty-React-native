import React from 'react'
import { FlatList, Text } from 'react-native'
import styled from 'styled-components/native'
import { IrouteLocation } from '../../../location.type'
import { LocationTitleDetail } from '../LocationTitleDetail/LocationTitleDetail'

export const LocationResidents: React.FC<{ route: IrouteLocation }> = ({ route }) => {
    return (
        <>
            {route.params.location.residents.length ? <Wrapper>
                <FlatList
                    numColumns={2}
                    contentContainerStyle={{ backgroundColor: 'white', justifyContent: 'space-between', paddingBottom: 60 }}
                    data={route.params.location.residents}
                    keyExtractor={item => item.id.toString()}
                    ListHeaderComponent={() => (
                        <LocationTitleDetail route={route} />
                    )}
                    renderItem={({ item }) => (
                        <WrapperCard>
                            <WrapperCharacter>
                                <ImageCharacter source={{ uri: item.image }} />
                                <WrapperText>
                                    <StatusCharacter>{item.status}</StatusCharacter>
                                    <NameCharacter>{item.name}</NameCharacter>
                                </WrapperText>
                            </WrapperCharacter>
                        </WrapperCard>
                    )}
                >
                </FlatList>
            </Wrapper> : <>
                <LocationTitleDetail route={route} />
                <WrapperTextFound><TeaxtFound>Not found</TeaxtFound></WrapperTextFound>
            </>
            }
        </>
    )
}

const Wrapper = styled.View`
    background-color: white;
    width: 100%;
    height: 100%;
`

const WrapperCard = styled.View`
    width: 45%;
    max-height: 250px;
    background: #FFFFFF;
    border-radius: 8px;
    border: 1px solid #EFEFF4;
    margin: 10px;
`

const WrapperCharacter = styled.View`
`

const WrapperText = styled.View`
    padding: 12px;
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
`

const NameCharacter = styled.Text`
    color: #081F32;
    letter-spacing: -0.41px;
    font-size: 17px;
    font-weight: 900;
`

const WrapperTextFound = styled.View`
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin-top: 30px;
`

const TeaxtFound = styled.Text`
    font-weight: 900;
    font-size: 20px;
`
