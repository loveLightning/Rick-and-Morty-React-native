export interface ICharacter {
    characters: Characters
}

export interface Characters {
    __typename: string
    results: Result[]
}

export interface Result {
    __typename: string
    name: string
    image: string
    status: string
    id: number
    gender: string
    species: string
    location: ILocation
    origin: IOrigin
    type: string
    episode: Episode[]
}

export interface ILocation {
    name: string
}

export interface IOrigin {
    name: string
}

export interface Episode {
    name: string
    air_date: string
    episode: string
    id: string
  }
  


export interface IRouteCharacter {
    key: string
    name: string
    params: Params
  }
  
  export interface Params {
    character: Character
  }
  
  export interface Character {
    id: string
    species: string
    namePlanet: string
    image: string
    gender: string
    origin: string
    name: string
    status: string
    type: string
    episode: Episode[]
  }
  