import { Dimensions, Platform } from 'react-native'

export const isIOS = Platform.OS === 'ios'

export const deviceWidth = Dimensions.get('window').width

export const deviceHeight = Dimensions.get('window').height

export const isSmall = deviceWidth < 330

export const checkPrevAndCurrValue = <T extends object>(
  prevValue: T,
  curValue: T,
) => {
  if (!prevValue) return false

  for (const key in prevValue) {
    if (prevValue[key] !== curValue[key]) {
      return false
    }
  }

  return true
}

export const generateUniqueValues = <T extends object, K extends keyof T>(
  arr: T[] | undefined,
  type: K,
) => {
  return [...new Map(arr?.map((item) => [item[type], item])).values()]
}

export const filtersIsEmpty = <T extends object>(filters: T) => {
  return Object.values(filters).some((el) => el.length > 0)
}
