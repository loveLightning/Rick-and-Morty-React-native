import { gql } from '@apollo/client'

export const GET_ALL_LOCATIONS = gql`
  query fetchLocations($page: Int, $filter: FilterLocation) {
    locations(page: $page, filter: $filter) {
      info {
        pages
        next
      }
      results {
        id
        name
        type
        dimension
      }
    }
  }
`
export const GET_LOCATION_DETAIL = gql`
  query fecthLocation($id: ID!) {
    location(id: $id) {
      id
      name
      type
      dimension
      residents {
        id
        name
        status
        image
      }
    }
  }
`
