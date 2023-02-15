export interface EpsiodeQueryType {
  episode: EpisodeTypesWithCharacters
}

export interface EpisodeTypesWithCharacters {
  id: string
  name: string
  episode: string
  air_date: string
  characters: CharacterItemTypes[]
}

export interface CharacterItemTypes {
  id: string
  name: string
  status: string
  image: string
}

export interface EpsiodeDataQueryType {
  data: EpisodesQueryType
}

export interface EpisodesQueryType {
  episodes: EpisodesTypes
}

export interface EpisodesTypes {
  info: InfoEpisodesTypes
  results: ResultEpsiodesTypes[]
}

export interface InfoEpisodesTypes {
  pages: number
  next: number
}

export interface ResultEpsiodesTypes {
  id: string
  name: string
  episode: string
  air_date: string
}

export interface EpisodeFiltersTypes {
  page: number
  filter: {
    name: string
    episode: string
  }
}
