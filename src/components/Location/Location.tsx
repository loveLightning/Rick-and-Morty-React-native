import { useQuery } from '@apollo/client'
import React, { useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'
import styled from 'styled-components/native'
import { GET_ALL_LOCATION } from '../../query/locations'
import { ListLocation } from './ListLocation/ListLocation'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { stateLocations } from '../../store/dataLocations/dataLocations'

export const Location: React.FC = () => {
    const { data, loading } = useQuery(GET_ALL_LOCATION)
    const dispath = useAppDispatch()

    useEffect(() => {
        if (!loading) {
            dispath(stateLocations(data.locations.results))
        }
    }, [data])
    const dataLocations = useAppSelector((state) => state.dataLocations.dataLocal)

    if (loading) {
        return <View>
            <Loader size="large" color="#00ff00" />
        </View>
    }

    return (
        <Wrapper>
            <FlatList
                numColumns={2}
                contentContainerStyle={{width: '100%' }}
                keyExtractor={item => item.id.toString()}
                data={dataLocations}
                renderItem={({ item }) => (
                    <ListLocation item={item} />
                )}
            />
        </Wrapper>
    )
}

const Wrapper = styled.View`
    background-color: white;
    padding: 20px 15px 20px 15px;
    width: 100%;
    height: 100%;
`

const Loader = styled.ActivityIndicator`
    width: 100%;
    height: 100%;
`
