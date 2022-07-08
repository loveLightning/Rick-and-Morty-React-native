import { gql } from '@apollo/client'

export const GET_ALL_CHARACTERS = gql`
query {
  characters {
    results {
      name,
      image,
      status,
      id,
      gender,
      species,
      location {
        name
      },
      origin {
        name
      },
      image,
      type,
			episode {
        name,
        air_date,
        episode,
        name,
        id
      }
    }
  }
}
`