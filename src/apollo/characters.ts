import { gql } from '@apollo/client'

export const GET_ALL_CHARACTERS = gql`
  query fetchCharacters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      results {
        id
        name
        image
        status
        species
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
        id
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
