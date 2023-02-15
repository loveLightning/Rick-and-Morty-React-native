import {
  CharacterFiltersTypes,
  EpisodeFiltersTypes,
  LocationsFiltersTypes,
} from 'src/types'

export const defaultCharacterFiltersValues: CharacterFiltersTypes = {
  page: 1,
  filter: {
    name: '',
    status: '',
    species: '',
    gender: '',
    type: '',
  },
}

export const defaultLocationFiltersValues: LocationsFiltersTypes = {
  page: 1,
  filter: {
    name: '',
    type: '',
    dimension: '',
  },
}

export const defaultEpisodeFiltersValues: EpisodeFiltersTypes = {
  page: 1,
  filter: {
    name: '',
    episode: '',
  },
}
