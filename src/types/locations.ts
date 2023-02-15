export interface LocationsQueryType {
  locations: LocationsTypes
}

export interface LocationsTypes {
  info: InfoLocationsTypes
  results: ResultLocationsTypes[]
}

export interface InfoLocationsTypes {
  pages: number
  next: number
}

export interface ResultLocationsTypes {
  id: string
  name: string
  type: string
  dimension: string
}

export interface LocationsFiltersTypes {
  page: number
  filter: {
    name: string
    type: string
    dimension: string
  }
}

export interface LocationQueryType {
  location: LocationTypes
}

export interface LocationTypes {
  id: string
  name: string
  type: string
  dimension: string
  residents: ResidentTypes[]
}

export interface ResidentTypes {
  id: string
  name: string
  status: string
  image: string
}
