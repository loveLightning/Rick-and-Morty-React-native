import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'
import { Container } from './Container'
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
} from "@apollo/client"

const client: any = new ApolloClient({
    uri: 'https://rickandmortyapi.com/api/character',
    cache: new InMemoryCache()
});


export const Character: React.FC = () => {
    return (
        <Wrapper>
            <TextDesc>{client}</TextDesc>
        </Wrapper>
    )
}

const TextDesc = styled.Text`
    color: blue;
`;

const Wrapper = styled.View`
    background-color: white;
    flex: 1;
    width: 100%;
    height: 100%;
`