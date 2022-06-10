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
}
