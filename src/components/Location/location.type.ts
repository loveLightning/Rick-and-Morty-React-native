export type ILocation = ILocation2[]

export interface ILocation2 {
  __typename: string
  dimension: string
  type: string
  id: string
  name: string
  residents: Resident[]
}

export interface Resident {
  __typename: string
  name: string
  image: string
  status: string
  id: string
}


export interface IrouteLocation {
  key: string
  name: string
  params: Params
}

export interface Params {
  location: Location
}

export interface Location {
  name: string
  type: string
  dimension: string
  residents: Resident[]
}

export interface Resident {
  __typename: string
  name: string
  image: string
  status: string
  id: string
}
