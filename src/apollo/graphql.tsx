import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

export type Maybe<T> = T
export type InputMaybe<T> = T
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Upload: any
}

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC',
}

export type Character = {
  __typename?: 'Character'
  /** Time at which the character was created in the database. */
  created: Maybe<Scalars['String']>
  /** Episodes in which this character appeared. */
  episode: Array<Maybe<Episode>>
  /** The gender of the character ('Female', 'Male', 'Genderless' or 'unknown'). */
  gender: Maybe<Scalars['String']>
  /** The id of the character. */
  id: Maybe<Scalars['ID']>
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  image: Maybe<Scalars['String']>
  /** The character's last known location */
  location: Maybe<Location>
  /** The name of the character. */
  name: Maybe<Scalars['String']>
  /** The character's origin location */
  origin: Maybe<Location>
  /** The species of the character. */
  species: Maybe<Scalars['String']>
  /** The status of the character ('Alive', 'Dead' or 'unknown'). */
  status: Maybe<Scalars['String']>
  /** The type or subspecies of the character. */
  type: Maybe<Scalars['String']>
}

export type Characters = {
  __typename?: 'Characters'
  info: Maybe<Info>
  results: Maybe<Array<Maybe<Character>>>
}

export type Episode = {
  __typename?: 'Episode'
  /** The air date of the episode. */
  air_date: Maybe<Scalars['String']>
  /** List of characters who have been seen in the episode. */
  characters: Array<Maybe<Character>>
  /** Time at which the episode was created in the database. */
  created: Maybe<Scalars['String']>
  /** The code of the episode. */
  episode: Maybe<Scalars['String']>
  /** The id of the episode. */
  id: Maybe<Scalars['ID']>
  /** The name of the episode. */
  name: Maybe<Scalars['String']>
}

export type Episodes = {
  __typename?: 'Episodes'
  info: Maybe<Info>
  results: Maybe<Array<Maybe<Episode>>>
}

export type FilterCharacter = {
  gender: InputMaybe<Scalars['String']>
  name: InputMaybe<Scalars['String']>
  species: InputMaybe<Scalars['String']>
  status: InputMaybe<Scalars['String']>
  type: InputMaybe<Scalars['String']>
}

export type FilterEpisode = {
  episode: InputMaybe<Scalars['String']>
  name: InputMaybe<Scalars['String']>
}

export type FilterLocation = {
  dimension: InputMaybe<Scalars['String']>
  name: InputMaybe<Scalars['String']>
  type: InputMaybe<Scalars['String']>
}

export type Info = {
  __typename?: 'Info'
  /** The length of the response. */
  count: Maybe<Scalars['Int']>
  /** Number of the next page (if it exists) */
  next: Maybe<Scalars['Int']>
  /** The amount of pages. */
  pages: Maybe<Scalars['Int']>
  /** Number of the previous page (if it exists) */
  prev: Maybe<Scalars['Int']>
}

export type Location = {
  __typename?: 'Location'
  /** Time at which the location was created in the database. */
  created: Maybe<Scalars['String']>
  /** The dimension in which the location is located. */
  dimension: Maybe<Scalars['String']>
  /** The id of the location. */
  id: Maybe<Scalars['ID']>
  /** The name of the location. */
  name: Maybe<Scalars['String']>
  /** List of characters who have been last seen in the location. */
  residents: Array<Maybe<Character>>
  /** The type of the location. */
  type: Maybe<Scalars['String']>
}

export type Locations = {
  __typename?: 'Locations'
  info: Maybe<Info>
  results: Maybe<Array<Maybe<Location>>>
}

export type Query = {
  __typename?: 'Query'
  /** Get a specific character by ID */
  character: Maybe<Character>
  /** Get the list of all characters */
  characters: Maybe<Characters>
  /** Get a list of characters selected by ids */
  charactersByIds: Maybe<Array<Maybe<Character>>>
  /** Get a specific episode by ID */
  episode: Maybe<Episode>
  /** Get the list of all episodes */
  episodes: Maybe<Episodes>
  /** Get a list of episodes selected by ids */
  episodesByIds: Maybe<Array<Maybe<Episode>>>
  /** Get a specific locations by ID */
  location: Maybe<Location>
  /** Get the list of all locations */
  locations: Maybe<Locations>
  /** Get a list of locations selected by ids */
  locationsByIds: Maybe<Array<Maybe<Location>>>
}

export type QueryCharacterArgs = {
  id: Scalars['ID']
}

export type QueryCharactersArgs = {
  filter: InputMaybe<FilterCharacter>
  page: InputMaybe<Scalars['Int']>
}

export type QueryCharactersByIdsArgs = {
  ids: Array<Scalars['ID']>
}

export type QueryEpisodeArgs = {
  id: Scalars['ID']
}

export type QueryEpisodesArgs = {
  filter: InputMaybe<FilterEpisode>
  page: InputMaybe<Scalars['Int']>
}

export type QueryEpisodesByIdsArgs = {
  ids: Array<Scalars['ID']>
}

export type QueryLocationArgs = {
  id: Scalars['ID']
}

export type QueryLocationsArgs = {
  filter: InputMaybe<FilterLocation>
  page: InputMaybe<Scalars['Int']>
}

export type QueryLocationsByIdsArgs = {
  ids: Array<Scalars['ID']>
}

export type FetchCharactersQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>
  filter: InputMaybe<FilterCharacter>
}>

export type FetchCharactersQuery = {
  __typename?: 'Query'
  characters: {
    __typename?: 'Characters'
    results: Array<{
      __typename?: 'Character'
      id: string
      name: string
      image: string
      status: string
      species: string
    }>
    info: { __typename?: 'Info'; next: number; count: number; pages: number }
  }
}

export type FetchCharacterDetailsQueryVariables = Exact<{
  id: Scalars['ID']
}>

export type FetchCharacterDetailsQuery = {
  __typename?: 'Query'
  character: {
    __typename?: 'Character'
    id: string
    name: string
    image: string
    species: string
    gender: string
    status: string
    type: string
    location: { __typename?: 'Location'; id: string; name: string }
    origin: { __typename?: 'Location'; name: string }
    episode: Array<{
      __typename?: 'Episode'
      id: string
      name: string
      air_date: string
      episode: string
    }>
  }
}

export type FetchEpisodesQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>
  filter: InputMaybe<FilterEpisode>
}>

export type FetchEpisodesQuery = {
  __typename?: 'Query'
  episodes: {
    __typename?: 'Episodes'
    info: { __typename?: 'Info'; pages: number; next: number }
    results: Array<{
      __typename?: 'Episode'
      id: string
      name: string
      episode: string
      air_date: string
    }>
  }
}

export type FetchEpisodeDetailsQueryVariables = Exact<{
  id: Scalars['ID']
}>

export type FetchEpisodeDetailsQuery = {
  __typename?: 'Query'
  episode: {
    __typename?: 'Episode'
    id: string
    name: string
    episode: string
    air_date: string
    characters: Array<{
      __typename?: 'Character'
      id: string
      name: string
      status: string
      image: string
    }>
  }
}

export type FetchLocationsQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>
  filter: InputMaybe<FilterLocation>
}>

export type FetchLocationsQuery = {
  __typename?: 'Query'
  locations: {
    __typename?: 'Locations'
    info: { __typename?: 'Info'; pages: number; next: number }
    results: Array<{
      __typename?: 'Location'
      id: string
      name: string
      type: string
      dimension: string
    }>
  }
}

export type FecthLocationQueryVariables = Exact<{
  id: Scalars['ID']
}>

export type FecthLocationQuery = {
  __typename?: 'Query'
  location: {
    __typename?: 'Location'
    id: string
    name: string
    type: string
    dimension: string
    residents: Array<{
      __typename?: 'Character'
      id: string
      name: string
      status: string
      image: string
    }>
  }
}

export const FetchCharactersDocument = gql`
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

/**
 * __useFetchCharactersQuery__
 *
 * To run a query within a React component, call `useFetchCharactersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchCharactersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchCharactersQuery({
 *   variables: {
 *      page: // value for 'page'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useFetchCharactersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    FetchCharactersQuery,
    FetchCharactersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useQuery<FetchCharactersQuery, FetchCharactersQueryVariables>(
    FetchCharactersDocument,
    options,
  )
}

export function useFetchCharactersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FetchCharactersQuery,
    FetchCharactersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useLazyQuery<
    FetchCharactersQuery,
    FetchCharactersQueryVariables
  >(FetchCharactersDocument, options)
}
export type FetchCharactersQueryHookResult = ReturnType<
  typeof useFetchCharactersQuery
>
export type FetchCharactersLazyQueryHookResult = ReturnType<
  typeof useFetchCharactersLazyQuery
>
export type FetchCharactersQueryResult = Apollo.QueryResult<
  FetchCharactersQuery,
  FetchCharactersQueryVariables
>
export const FetchCharacterDetailsDocument = gql`
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

/**
 * __useFetchCharacterDetailsQuery__
 *
 * To run a query within a React component, call `useFetchCharacterDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchCharacterDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchCharacterDetailsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFetchCharacterDetailsQuery(
  baseOptions: Apollo.QueryHookOptions<
    FetchCharacterDetailsQuery,
    FetchCharacterDetailsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useQuery<
    FetchCharacterDetailsQuery,
    FetchCharacterDetailsQueryVariables
  >(FetchCharacterDetailsDocument, options)
}

export function useFetchCharacterDetailsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FetchCharacterDetailsQuery,
    FetchCharacterDetailsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useLazyQuery<
    FetchCharacterDetailsQuery,
    FetchCharacterDetailsQueryVariables
  >(FetchCharacterDetailsDocument, options)
}
export type FetchCharacterDetailsQueryHookResult = ReturnType<
  typeof useFetchCharacterDetailsQuery
>
export type FetchCharacterDetailsLazyQueryHookResult = ReturnType<
  typeof useFetchCharacterDetailsLazyQuery
>
export type FetchCharacterDetailsQueryResult = Apollo.QueryResult<
  FetchCharacterDetailsQuery,
  FetchCharacterDetailsQueryVariables
>
export const FetchEpisodesDocument = gql`
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

/**
 * __useFetchEpisodesQuery__
 *
 * To run a query within a React component, call `useFetchEpisodesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchEpisodesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchEpisodesQuery({
 *   variables: {
 *      page: // value for 'page'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useFetchEpisodesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    FetchEpisodesQuery,
    FetchEpisodesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useQuery<FetchEpisodesQuery, FetchEpisodesQueryVariables>(
    FetchEpisodesDocument,
    options,
  )
}

export function useFetchEpisodesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FetchEpisodesQuery,
    FetchEpisodesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useLazyQuery<FetchEpisodesQuery, FetchEpisodesQueryVariables>(
    FetchEpisodesDocument,
    options,
  )
}
export type FetchEpisodesQueryHookResult = ReturnType<
  typeof useFetchEpisodesQuery
>
export type FetchEpisodesLazyQueryHookResult = ReturnType<
  typeof useFetchEpisodesLazyQuery
>
export type FetchEpisodesQueryResult = Apollo.QueryResult<
  FetchEpisodesQuery,
  FetchEpisodesQueryVariables
>
export const FetchEpisodeDetailsDocument = gql`
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

/**
 * __useFetchEpisodeDetailsQuery__
 *
 * To run a query within a React component, call `useFetchEpisodeDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchEpisodeDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchEpisodeDetailsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFetchEpisodeDetailsQuery(
  baseOptions: Apollo.QueryHookOptions<
    FetchEpisodeDetailsQuery,
    FetchEpisodeDetailsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useQuery<
    FetchEpisodeDetailsQuery,
    FetchEpisodeDetailsQueryVariables
  >(FetchEpisodeDetailsDocument, options)
}

export function useFetchEpisodeDetailsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FetchEpisodeDetailsQuery,
    FetchEpisodeDetailsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useLazyQuery<
    FetchEpisodeDetailsQuery,
    FetchEpisodeDetailsQueryVariables
  >(FetchEpisodeDetailsDocument, options)
}
export type FetchEpisodeDetailsQueryHookResult = ReturnType<
  typeof useFetchEpisodeDetailsQuery
>
export type FetchEpisodeDetailsLazyQueryHookResult = ReturnType<
  typeof useFetchEpisodeDetailsLazyQuery
>
export type FetchEpisodeDetailsQueryResult = Apollo.QueryResult<
  FetchEpisodeDetailsQuery,
  FetchEpisodeDetailsQueryVariables
>
export const FetchLocationsDocument = gql`
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

/**
 * __useFetchLocationsQuery__
 *
 * To run a query within a React component, call `useFetchLocationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchLocationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchLocationsQuery({
 *   variables: {
 *      page: // value for 'page'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useFetchLocationsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    FetchLocationsQuery,
    FetchLocationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useQuery<FetchLocationsQuery, FetchLocationsQueryVariables>(
    FetchLocationsDocument,
    options,
  )
}

export function useFetchLocationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FetchLocationsQuery,
    FetchLocationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useLazyQuery<FetchLocationsQuery, FetchLocationsQueryVariables>(
    FetchLocationsDocument,
    options,
  )
}
export type FetchLocationsQueryHookResult = ReturnType<
  typeof useFetchLocationsQuery
>
export type FetchLocationsLazyQueryHookResult = ReturnType<
  typeof useFetchLocationsLazyQuery
>
export type FetchLocationsQueryResult = Apollo.QueryResult<
  FetchLocationsQuery,
  FetchLocationsQueryVariables
>
export const FecthLocationDocument = gql`
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

/**
 * __useFecthLocationQuery__
 *
 * To run a query within a React component, call `useFecthLocationQuery` and pass it any options that fit your needs.
 * When your component renders, `useFecthLocationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFecthLocationQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFecthLocationQuery(
  baseOptions: Apollo.QueryHookOptions<
    FecthLocationQuery,
    FecthLocationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useQuery<FecthLocationQuery, FecthLocationQueryVariables>(
    FecthLocationDocument,
    options,
  )
}

export function useFecthLocationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FecthLocationQuery,
    FecthLocationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useLazyQuery<FecthLocationQuery, FecthLocationQueryVariables>(
    FecthLocationDocument,
    options,
  )
}
export type FecthLocationQueryHookResult = ReturnType<
  typeof useFecthLocationQuery
>
export type FecthLocationLazyQueryHookResult = ReturnType<
  typeof useFecthLocationLazyQuery
>
export type FecthLocationQueryResult = Apollo.QueryResult<
  FecthLocationQuery,
  FecthLocationQueryVariables
>
