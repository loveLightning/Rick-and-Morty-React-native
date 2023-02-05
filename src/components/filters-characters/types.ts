export interface RadioBtnsTypes {
  id: number
  value: string
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
