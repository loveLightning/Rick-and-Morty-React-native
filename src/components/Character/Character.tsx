import { useQuery } from '@apollo/client'
import React, { useEffect } from 'react'
import { FlatList, Text, View } from 'react-native'
import styled from 'styled-components/native'
import { GET_ALL_CHARACTERS } from '../../query/characters'
import { ListCharacter } from './ListCharacter/ListCharacter'
import { useAppSelector, useAppDispatch } from '../../hooks/hooks'
import { stateData } from '../../store/dataCharacters/dataCharacters'

export const Character: React.FC = () => {
    const { data, loading, error } = useQuery(GET_ALL_CHARACTERS)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (!loading) {
            dispatch(stateData(data.characters.results))
        }
    }, [data])

    const dataValue = useAppSelector((state) => state.dataCharacters.dataCharacters)
    if (loading) {
        return <View>
            <Loader size="large" color="#00ff00" />
        </View>
    }
    return (
        <>
            {data?.characters?.results?.length ? <Wrapper>
                <FlatList
                    numColumns={2}
                    contentContainerStyle={{ backgroundColor: 'white', justifyContent: 'space-between', paddingTop: 20, paddingBottom: 20 }}
                    keyExtractor={item => item.id.toString()}
                    data={dataValue}
                    renderItem={({ item }) => (
                        <ListCharacter item={item} />
                    )}
                />
            </Wrapper> : <WrapperNotFound>
                <TextNotFound>Nothing found</TextNotFound>
            </WrapperNotFound>}
        </>
    )
}

const Loader = styled.ActivityIndicator`
    width: 100%;
    height: 100%;
`

const Wrapper = styled.View`
    background-color: white;
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
    height: 100%;
`

const WrapperNotFound = styled.View`
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
`

const TextNotFound = styled.Text`
    font-size: 20px;
`