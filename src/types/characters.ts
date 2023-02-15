export interface CharacterTypes {
  id: string
  name: string
  image: string
  species: string
  gender: string
  episode: EpisodeTypes[]
  status: string
  location: LocationType
  origin: OriginType
  type: string
}

export interface CharactersTypes {
  results: CharacterTypes[]
  info: InfoTypes
}

export interface CharactersQueryType {
  characters: CharactersTypes
}

export interface CharacterQueryType {
  character: CharacterTypes
}

export interface EpisodeTypes {
  id: string
  name: string
  air_date: string
  episode: string
}

interface InfoTypes {
  next: number
  count: number
  pages: number
}

interface LocationType {
  name: string
  id: string
}

interface OriginType {
  name: string
}

export interface CharacterFiltersTypes {
  page: 1
  filter: {
    name: string
    status: string
    species: string
    gender: string
    type: string
  }
}

export enum Status {
  Gender,
  Status,
}
