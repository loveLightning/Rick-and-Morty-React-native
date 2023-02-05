import { Dimensions, Platform } from 'react-native'

import { FiltersCharactersTypes } from 'src/types'

export const isIOS = Platform.OS === 'ios'

export const deviceWidth = Dimensions.get('window').width

export const deviceHeight = Dimensions.get('window').height

export const isSmall = deviceWidth < 330

export const defaultFiltersValues: FiltersCharactersTypes = {
  name: '',
  status: '',
  species: '',
  gender: '',
}

export const initialRequestedVariables = {
  page: 1,
  filter: {
    name: '',
    status: '',
    gender: '',
    species: '',
  },
}
