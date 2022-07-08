import { gql } from '@apollo/client'

export const GET_ALL_LOCATION = gql`
query {
	locations {
    results {
      dimension
      type
      id
      name
      residents {
       name
      image
      status
      id
      }
    }
  }
}

`
