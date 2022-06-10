import { useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import styled from 'styled-components/native'
import { GET_ALL_CHARACTERS } from '../../query/characters'
import { ICharacter } from './character.type'
import { ListCharacter } from './ListCharacter/ListCharacter'

export const Character: React.FC = () => {
    const { data, loading, error } = useQuery(GET_ALL_CHARACTERS)
    const [characters, setCharacters] = useState<ICharacter>()

    useEffect(() => {
        if (!loading) {
            setCharacters(data)
        }
    }, [data])

    if (loading) {
        return <WrapperLoading><Text>Loading...</Text></WrapperLoading>
    }
    return (
        <Wrapper>
            <FlatList
                numColumns={2}
                contentContainerStyle={{backgroundColor: 'white', flexDirection: 'column', alignItems: 'center'}}
                keyExtractor={item => item.id.toString()}
                data={characters?.characters.results}
                renderItem={({ item }) => (
                    <ListCharacter item={item} />
                )}
            />
        </Wrapper>
    )
}

const WrapperLoading = styled.View`
    background-color: white;
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

