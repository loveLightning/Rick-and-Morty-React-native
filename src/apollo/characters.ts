import { gql } from '@apollo/client'

export const GET_ALL_CHARACTERS = gql`
  query fetchCharacters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      uniqueNames @client
      uniqueSpecies @client
      results {
        id
        name
        image
      }
      info {
        next
        count
        pages
      }
    }
  }
`

export const GET_CHARACTER_DETAIL = gql`
  query fetchCharacterDetails($id: ID!) {
    character(id: $id) {
      id
      name
      image
      species
      gender
      status
      type
      location {
        name
      }
      origin {
        name
      }
      episode {
        id
        name
        air_date
        episode
      }
    }
  }
`
