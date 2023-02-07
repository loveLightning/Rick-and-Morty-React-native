import { gql } from '@apollo/client'

export const GET_ALL_EPISODES = gql`
  query fetchEpisodes($page: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      info {
        pages
        next
      }
      results {
        id
        name
        episode
        air_date
      }
    }
  }
`

export const GET_EPISODE_DETAIL = gql`
  query fetchEpisodeDetails($id: ID!) {
    episode(id: $id) {
      id
      name
      episode
      air_date
      characters {
        id
        name
        status
        image
      }
    }
  }
`
