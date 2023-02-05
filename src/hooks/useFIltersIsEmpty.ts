import { useCallback } from 'react'

import { FiltersCharactersTypes } from 'src/types'

type FiltersTypes = FiltersCharactersTypes

export const useFiltersIsEmpty = (filters: FiltersTypes) => {
  const isFilterEmpty = useCallback(() => {
    return Object.values(filters).some((el) => el.length > 0)
  }, [filters])

  return {
    isFilterEmpty,
  }
}
