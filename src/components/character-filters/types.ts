export interface RadioBtnsTypes {
  id: number
  value: string
}

export interface SpeciesTypes {
  id: number
  species: string
}

export const valuesGender: RadioBtnsTypes[] = [
  { id: 0, value: 'Female' },
  { id: 1, value: 'Male' },
  { id: 2, value: 'Genderless' },
  { id: 3, value: 'Unknown' },
]

export const valuesStatus: RadioBtnsTypes[] = [
  { id: 0, value: 'Alive' },
  { id: 1, value: 'Dead' },
  { id: 2, value: 'Unknown' },
]

export const speciesValues: SpeciesTypes[] = [
  {
    id: 0,
    species: 'Human',
  },
  {
    id: 1,
    species: 'Alien',
  },
  {
    id: 2,
    species: 'Humanoid',
  },
  {
    id: 3,
    species: 'unknown',
  },
  {
    id: 4,
    species: 'Poopybutthole',
  },
  {
    id: 5,
    species: 'Mythological Creauture',
  },
  {
    id: 6,
    species: 'Animal',
  },
  {
    id: 7,
    species: 'Robot',
  },
  {
    id: 8,
    species: 'Cronenberg',
  },
  {
    id: 9,
    species: 'Disease',
  },
]
