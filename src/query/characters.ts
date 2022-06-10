import {gql} from '@apollo/client'

export const GET_ALL_CHARACTERS = gql`
query {
    characters {
      results {
        name,
        image,
        status,
        id
      }
    }
  
  }
`