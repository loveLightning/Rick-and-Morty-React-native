import { ApolloClient } from '@apollo/client'

import { cache } from './cache'

const BASE_URL = 'https://rickandmortyapi.com/graphql'

export const client = new ApolloClient({
  uri: BASE_URL,
  cache,
})
