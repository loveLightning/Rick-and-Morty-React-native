export interface EpsiodeQueryType {
  data: EpisodeType
}

export interface EpisodeType {
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
